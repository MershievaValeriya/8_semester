import { JSX } from "react";
import FavoriteCard from "../favorite-card/favorite-card";
import { FullOffer } from "../../types/offer";

type FavoriteCardListProps = {
  offers: FullOffer[];
};

function FavoriteCardList({ offers }: FavoriteCardListProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  const groupedOffers = favoriteOffers.reduce<{ [key: string]: FullOffer[] }>(
    (acc, offer) => {
      if (!acc[offer.city.name]) {
        acc[offer.city.name] = [];
      }
      acc[offer.city.name].push(offer);
      return acc;
    },
    {}
  );

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(groupedOffers).map(([city, cityOffers]) => (
          <li key={city} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {cityOffers.map((offer) => (
                <FavoriteCard key={offer.id} offer={offer} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FavoriteCardList;
