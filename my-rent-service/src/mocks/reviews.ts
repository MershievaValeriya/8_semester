import { Review } from "../types/review";

const reviews: Review[] = [
    {
        'id': '1',
        'comment': 'The room was spacious and clean. The pool locked nothing like the photos',
        'date': '2023-06-29T21:00:00.465Z',
        'rating': 4,
        'user': {
            'name': 'Dima',
            'avatarUrl': '../../img/avatar-max.jpg',
            'isPro': true
        }
    },
    {
        'id': '2',
        'comment': 'The room was spacious and clean. The pool locked nothing like the photos',
        'date': '2023-06-29T21:00:00.465Z',
        'rating': 3,
        'user': {
            'name': 'Inga',
            'avatarUrl': '../../img/avatar-inga.jpg',
            'isPro': true
        }
    },
];

export { reviews };