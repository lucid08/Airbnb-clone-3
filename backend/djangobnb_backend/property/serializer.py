from rest_framework import serializers
from useraccount.serializers import UserDetailSerializer
from .models import Property

class PropertiesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = (
            'id',
            'title',
            'price_per_night',
            'image_url',
        )

class PropertyDetailSerializer(serializers.ModelSerializer):
    class Meta:
        landlord = UserDetailSerializer(read_only=True, many=False)
        model = Property
        fields = (
            'id',
            'title',
            'description',
            'price_per_night',
            'image_url',
            'bedrooms',
            'bathrooms',
            'guests',
            'landlord'
        )