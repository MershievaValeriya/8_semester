const Setting ={
    rentalOffersCount: 312,
} as const;

export {Setting};

const AppRoute = {
    Main : '/',
    Login : '/login',
    Favorites : '/favorities',
    Offer : '/offer/:id',
}   as const;

const AuthorizationStatus = {
    Auth : 'AUTH',
    NoAuth : 'NO_AUTH',
    Unknown : 'UNKNOWN',
} 

export {AppRoute,AuthorizationStatus};