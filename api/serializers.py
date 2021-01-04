from api.models import *
from rest_framework.serializers import ModelSerializer


class FoodListSerializers(ModelSerializer):
    class Meta:
        model = FoodItem
        fields = '__all__'
