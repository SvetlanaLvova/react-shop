function Cart(props) {
  const { quantity = 0, getCartShow } = props;

  return (
    <div className="cart light-blue darken-4 white-text" onClick={getCartShow}>
      <i className="material-icons">shopping_basket</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
