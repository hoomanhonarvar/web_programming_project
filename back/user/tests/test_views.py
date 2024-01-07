from  .test_setup import TestSetUp
from ..models import User
class TestViews(TestSetUp):


    def test_user_can_register_correctly (self):
        res = self.client.post(self.register_url,self.user_data,format="json")
        self.assertEquals(res.status_code, 201)
        self.assertEquals(res.data['email'], self.user_data['email'])
        self.assertEquals(res.data['username'], self.user_data['username'])

    def test_user_cannot_register_with_no_data(self):
       res= self.client.post(self.register_url)
       self.assertEquals(res.status_code,400)


    def test_user_cannot_login_with_unverified_email(self):
        self.client.post(self.register_url, self.user_data, format="json")
        res = self.client.post(self.login_url, self.user_data, format="json")
        self.assertEquals(res.status_code, 403)


    def test_user_can_login_after_verification(self):
        response=self.client.post(self.register_url, self.user_data, format="json")
        email=response.data['email']
        user=User.object.get(email=email)
        user.is_varified=True
        user.save()
        res = self.client.post(self.login_url, self.user_data, format="json")
        self.assertEquals(res.status_code, 200)
