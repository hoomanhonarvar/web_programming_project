from django.db.models import Q
from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import RetrieveUpdateDestroyAPIView,CreateAPIView,ListAPIView,GenericAPIView
from .models import dish
from cart.models import cart,cart_dish_table
from .serializers import list_of_dishes_Serializer
from rest_framework.permissions import IsAdminUser, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from restaurant.models import restaurant
from address.models import user_add
# Create your views here.
class dishCreateAPIView(CreateAPIView):
    serializer_class = list_of_dishes_Serializer
    queryset = dish.objects.all()
    permission_classes = (IsAdminUser,)
    def perform_create(self, serializer):
        return serializer.save()

class dishlistAPIView(ListAPIView):
    serializer_class = list_of_dishes_Serializer
    queryset = dish.objects.all()
class DishDetail(RetrieveUpdateDestroyAPIView):
    queryset = dish.objects.all()
    serializer_class = list_of_dishes_Serializer
    permission_classes = (IsAdminUser,)

class like_dishAPIView(GenericAPIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, pk):
        dish_id = pk
        if not dish.objects.filter(id=dish_id).exists():
            return Response({'error': 'this id dish not exists'}, status=status.HTTP_404_NOT_FOUND)
        else:
            dish_item = dish.objects.get(id=dish_id)
            if dish_item.fav.filter(id=request.user.id).exists():
                dish_item.fav.remove(request.user)
            else:
                dish_item.fav.add(request.user)
            return Response(status=status.HTTP_204_NO_CONTENT)

class like_dislike(GenericAPIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, pk):
        dish_id = pk
        if not dish.objects.filter(id=dish_id).exists():
            return Response({'error': 'this id dish not exists'}, status=status.HTTP_404_NOT_FOUND)
        else:
            dish_item = dish.objects.get(id=dish_id)
            if dish_item.fav.filter(id=request.user.id).exists():
               return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)

class favourite_dishAPIView(ListAPIView):
    serializer_class = list_of_dishes_Serializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    def get_queryset(self):
        user = self.request.user

        return dish.objects.filter(fav__username__in=[user.username])


class add_dish_to_cart_APIView(GenericAPIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request,pk):
        dish_id = pk

        if not dish.objects.filter(id=dish_id).exists():
            return Response({'error': 'this dish is not exists'}, status=status.HTTP_404_NOT_FOUND)
        else:
            user_carts=cart.objects.filter(owner=request.user)
            if user_carts.filter(finish_cancel='N').exists():
                not_started_cart=user_carts.get(finish_cancel='N')
                dish_restaurant=dish.objects.get(id=dish_id)
                if (not_started_cart.rest_id!=dish_restaurant.rest_id):
                    return Response({'error':'you should order just from one restaurant '},status=status.HTTP_400_BAD_REQUEST)
                if cart_dish_table.objects.filter(Q(dish_id=dish.objects.get(id=dish_id)) and Q( cart_id=not_started_cart)).exists():

                    goal_cart=cart_dish_table.objects.get(Q(dish_id=dish.objects.get(id=dish_id)) and Q( cart_id=not_started_cart))

                    goal_cart.number+=1
                    goal_cart.save()
                    not_started_cart.total+=dish.objects.get(id=dish_id).fee
                    not_started_cart.save()

                else:
                     new_dish=cart_dish_table(cart_id=not_started_cart,dish_id=dish.objects.get(id=dish_id),number=1)
                     not_started_cart.total += dish.objects.get(id=dish_id).fee
                     not_started_cart.save()
                     new_dish.save()

            else:
                ##adding a cart
                if user_add.objects.filter(id=request.user.id).exists():
                    try:
                        new_cart=cart(owner=request.user,rest_id=restaurant.objects.get(id=restaurant.objects.get(name=dish.objects.get(id=dish_id).rest_id).id),rest_name=restaurant.objects.get(name=dish.objects.get(id=dish_id).rest_id.name),
                                      add_id=user_add.objects.get(id=user_add.objects.filter(id=request.user.id).first().id))
                        new_cart.total=dish.objects.get(id=dish_id).fee + restaurant.objects.get(id=new_cart.rest_id.id).delivery
                        new_cart.save()
                        not_started_cart = user_carts.get(finish_cancel='N')
                        new_dish = cart_dish_table(cart_id=not_started_cart, dish_id=dish.objects.get(id=dish_id), number=1)
                        new_dish.save()
                        # print(fee+dish.objects.get(id=dish_id).fee)
                        # not_started_cart.total += dish.objects.get(id=dish_id).fee+restaurant.objects.get(id=new_cart.rest_id.id).delivery
                        # not_started_cart.save()
                    except:
                        return Response({'error': "error"},
                                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

                else:
                    return Response({'error':"you don't have any address please enter an address"},status=status.HTTP_400_BAD_REQUEST)
            return Response(status=status.HTTP_204_NO_CONTENT)




class del_dish_from_cart_APIView(GenericAPIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, pk):
        dish_id = pk

        if not dish.objects.filter(id=dish_id).exists():
            return Response({'error': 'this dish is not exists'}, status=status.HTTP_404_NOT_FOUND)
        else:
            user_carts = cart.objects.filter(owner=request.user)
            if user_carts.filter(finish_cancel='N').exists():
                not_started_cart = user_carts.get(finish_cancel='N')

                if cart_dish_table.objects.filter(Q(dish_id=dish_id) and Q(cart_id=not_started_cart.id)):

                    goal_cart = cart_dish_table.objects.get(Q(dish_id=dish_id) and Q(cart_id=not_started_cart.id))
                    if(goal_cart.number==1):
                         cart_dish_table.delete(goal_cart)

                    else:
                        goal_cart.number-=1
                    not_started_cart.total -= dish.objects.get(id=dish_id).fee
                    not_started_cart.save()
                else:
                    return Response(status=status.HTTP_406_NOT_ACCEPTABLE)

            else:
                return Response(status=status.HTTP_406_NOT_ACCEPTABLE)
            return Response(status=status.HTTP_204_NO_CONTENT)








