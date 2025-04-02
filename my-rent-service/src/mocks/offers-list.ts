import { OffersList } from '../types/offer';

export const offersList : OffersList[] = 
[
    {
        'id': '1',
        'title': 'Cozy apartment in the center of Amsterdam',
        'type': 'apartment',
        'price': 170,
        'previewImage': '../../public/img/apartment-01.jpg',
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
        'isFavorite': true,
        'isPremium': false,
        'rating': 4.3
    },
    {
        'id': '2',
        'title': 'Modern apartment in Cologne',
        'type': 'apartment',
        'price': 190,
        'previewImage': '../../public/img/apartment-02.jpg',
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
        'isFavorite': false,
        'isPremium': true,
        'rating': 4.6
    },
    {
        'id': '3',
        'title': 'Modern loft in the heart of Hamburg',
        'type': 'apartment',
        'price': 250,
        'previewImage': '../../public/img/apartment-03.jpg',
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
        'isFavorite': false,
        'isPremium': true,
        'rating': 4.7
    },
    {
        'id': '4',
        'title': 'Comfortable apartment in Brussels',
        'type': 'apartment',
        'price': 150,
        'previewImage': '../../public/img/apartment-04.jpg',
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
        'isFavorite': true,
        'isPremium': false,
        'rating': 4.8
    },
    



    {
        'id': '5',
        'title': 'Stylish apartment  Near Amsterdams Attractions',
        'type': 'apartment',
        'price': 200,
        'previewImage': '../../public/img/apartment-05.jpg',
        'city': {
        'name': 'Amsterdam',
        'location': {
            'latitude': 52.3809553943508,
            'longitude':  4.939309666406198,
            'zoom': 13
            }
        },
        'location': {
            'latitude': 52.3809553943508,
            'longitude': 4.939309666406198,
            'zoom': 16
        },
        'isFavorite': true,
        'isPremium': false,
        'rating': 4.9
    },
    
]