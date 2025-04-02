import {JSX} from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import {AppRoute, AuthorizationStatus } from "../../const";
import MainPage from "../../pages/main-page/main-page";
import FavoritiesPage from "../favorites/favorites";
import LoginPage from "../login/login";
import OfferPage from "../offer/offer";
import NotFoundPage from "../not-found-page/not-found-page";
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer} from "../../types/offer";


type AppMainPageProps = {
    offers: FullOffer[];
}



function App({offers }: AppMainPageProps): JSX.Element {


    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={<MainPage/>} />
                <Route path={AppRoute.Favorites}
                    element={
                        <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                            <FavoritiesPage offers={offers}/>
                        </PrivateRoute>
                    } />
                <Route path={AppRoute.Login} element={<LoginPage />} />
                <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;