from django.urls import path,include
from .views import createNewCartAPIView,CartDetail,Upcoming_orders_list_APIView,Previous_orders_list_APIView,CartListAPIView,CartDetailAPIView
urlpatterns= [
    path("new/",createNewCartAPIView.as_view(),name="create_Cart"),
    path("all/",CartListAPIView.as_view(),name="Cart_List"),
    # path("<int:pk>/",CartDetailAPIView.as_view(),name="Cart_Detail"),
    path("up-coming/",Upcoming_orders_list_APIView.as_view(),name="upcoming_orders"),
    path("previous/",Previous_orders_list_APIView.as_view(),name="previous_orders"),
    path("<int:pk>/",CartDetailAPIView.as_view(),name="update_state_of_cart")

]