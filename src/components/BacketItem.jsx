function BacketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBacket,
    incQuantity,
    decQuantity,
  } = props;

  return (
    <>
      <li className="collection-item">
        {name}{" "}
        <i
          className="material-icons basket-quantity"
          onClick={() => decQuantity(id)}
        >
          remove
        </i>{" "}
        x{quantity}
        <i
          className="material-icons basket-quantity"
          onClick={() => incQuantity(id)}
        >
          add
        </i>{" "}
        = {price * quantity} руб.
        <div className="secondary-content">
          <i
            className="material-icons basket-delete"
            onClick={() => removeFromBacket(id)}
          >
            close
          </i>
        </div>
      </li>
    </>
  );
}

export default BacketItem;
