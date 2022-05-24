import BacketItem from "./BacketItem";

function BacketList(props) {
  const {
    order = [],
    getCartShow,
    removeFromBacket,
    incQuantity,
    decQuantity,
  } = props;

  const totalPrice = order.reduce((sum, e) => {
    return sum + e.price * e.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((e) => (
          <BacketItem
            key={e.id}
            {...e}
            removeFromBacket={removeFromBacket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Корзин пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {totalPrice} руб.
      </li>
      <li className="collection-item">
        <button className="btn btn-small">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={getCartShow}>
        close
      </i>
    </ul>
  );
}

export default BacketList;
