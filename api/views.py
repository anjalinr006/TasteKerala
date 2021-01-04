from django.shortcuts import render
from rest_framework import serializers
from rest_framework.decorators import api_view
from api.serializers import *
from rest_framework.response import Response


def index(request):

    return render(request, 'build/index.html')


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def food_list(request, pk=0):

    if request.method == 'POST':
        serializer = FoodListSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response('sucess')
        else:
            return Response('something Bad')

    if request.method == 'GET':
        food_obj = FoodItem.objects.all()
        serializer = FoodListSerializers(food_obj, many=True)
        return Response(serializer.data)

    if request.method == 'PUT':
        print('put')
    if request.method == 'DELETE':
        print('delete')
    return Response('hello')


@api_view(['GET', 'POST', 'DELETE'])
def comment_list(request):
    if request.method == 'POST':
        print('hello')
    if request.method == 'GET':
        print('get')
    if request.method == 'DELETE':
        print('delete')
