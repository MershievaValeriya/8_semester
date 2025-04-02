import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
    {
        'id': '1',
        'title': 'Cozy apartment in the center of Amsterdam',
        'description': 'Modern one-bedroom apartment located in the heart of the city. Within walking distance of museums and cafes',
        'type': 'apartment',
        'price': 170,
        'images': [
            '../../public/img/apartment-01.jpg',
            '../../public/img/41.jpg',
            '../../public/img/42.jpg',
            '../../public/img/43.jpg',
            '../../public/img/44.jpg',
            '../../public/img/45.jpg'
        ],
        'city': {
        'name': 'Amsterdam',
        'location': {
            'latitude': 52.3676,
            'longitude': 4.9041,
            'zoom': 13
            }
        },
        'location': {
            'latitude': 52.370216,
            'longitude': 4.895168,
            'zoom': 16
        },
        'goods': [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Baby seat',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine'
        ],
        'host': {
            'isPro': true,
            'name': 'Angelina',
            'avatarUrl': 'avatar-angelina.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.3,
        'bedrooms': 1,
        'maxAdults': 3
    },
    {
        'id': '2',
        'title': 'Modern apartment in Cologne',
        'description': 'Stylish apartment located in the center of Cologne next to Cologne Cathedral. Perfect for a couple.',
        'type': 'apartment',
        'price': 190,
        'images': [
            '../../img/apartment-02.jpg',
            '../../img/31.jpg',
            '../../img/32.jpg',
            '../../img/33.jpg',
            '../../img/34.jpg',
            '../../img/35.jpg'
        ],
        'city': {
            'name': 'Cologne',
            'location': {
                'latitude': 50.9375,
                'longitude': 6.9603,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 50.9413,
            'longitude': 6.9583,
            'zoom': 16
        },
        'goods': [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Air conditioning',
            'Washer',
            'Towels',
            'Kitchen',
            'Coffee machine',
            'Smart TV',
            'Hairdryer',
            'Iron'
        ],
        'host': {
            'isPro': true,
            'name': 'Angelina',
            'avatarUrl': 'avatar-angelina.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 2,
        'maxAdults': 3
    },
    {
        'id': '3',
        'title': 'Modern loft in the heart of Hamburg',
        'description': 'Stylish one-bedroom apartment in the area of Shantzen, near the port and the famous Elbphilarmony.',
        'type': 'apartment',
        'price': 250,
        'images': [
            '../../img/apartment-03.jpg',
            '../../img/21.jpg',
            '../../img/22.jpg',
            '../../img/23.jpg',
            '../../img/24.jpg',
            '../../img/25.jpg'
        ],
        'city': {
            'name': 'Hamburg',
            'location': {
                'latitude': 53.5753,
                'longitude': 10.0153,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 53.57610000000004,
            'longitude': 10.019342499,
            'zoom': 16
        },
        'goods': [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Air conditioning',
            'Washer',
            'Towels',
            'Kitchen',
            'Coffee machine',
            'Smart TV',
            'Balcony'
        ],
        'host': {
            'isPro': true,
            'name': 'Angelina',
            'avatarUrl': 'avatar-angelina.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 1,
        'maxAdults': 3
    },
    {
        'id': '4',
        'title': 'Comfortable apartment in Brussels',
        'description': 'A cozy apartment in the heart of Brussels, featuring modern amenities and a lovely balcony with city views. Perfect for couples or solo travelers',
        'type': 'apartment',
        'price': 150,
        'images': [
            '../../img/apartment-04.jpg',
            '../../img/51.jpg',
            '../../img/52.jpg',
            '../../img/53.jpg',
            '../../img/54.jpg',
            '../../img/55.jpg'
        ],
        'city': {
            'name': 'Brussels',
            'location': {
                'latitude': 50.8503,
                'longitude': 4.34878,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 50.8550,
            'longitude': 4.3501,
            'zoom': 16
        },
        'goods': [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Air conditioning',
            'Washer',
            'Towels',
            'Kitchen',
            'Coffee machine',
            'Smart TV',
            'Hairdryer'
        ],
        'host': {
            'isPro': true,
            'name': 'Angelina',
            'avatarUrl': 'avatar-angelina.jpg'
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 4.8,
        'bedrooms': 1,
        'maxAdults': 2
    }
]

export {offers};