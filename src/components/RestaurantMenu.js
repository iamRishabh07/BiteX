import Shimmer from './Shimer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(typeof itemCards);
  const cardInfo = resInfo?.cards[0]?.card?.card;
  const name = cardInfo?.info?.name;
  const cuisines = cardInfo?.info?.cuisines;
  const costForTwoMessage = cardInfo?.info?.costForTwoMessage;

  const itemCardsInfo =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const itemCards = itemCardsInfo?.itemCards || [];

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(' , ')} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {'Rs'}{' '}
            {item.card.info.price / 100 || item.card.info.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
