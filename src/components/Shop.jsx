import { useState, useEffect } from "react";
import { API_URL } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BacketList from "./BacketList";
import { Alert } from "./Alert";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setIsCartShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const addtoBucket = (item) => {
    const itemIndex = order.findIndex((e) => e.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((e, index) => {
        if (index === itemIndex) {
          return {
            ...e,
            quantity: e.quantity + 1,
          };
        } else {
          return e;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const removeFromBacket = (itemId) => {
    const newOrder = order.filter((e) => e.id !== itemId);
    setOrder(newOrder);
  };

  const getCartShow = () => {
    setIsCartShow(!isCartShow);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: '82d75152-6db6ed47-34723604-dddebac3', },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <main className="container content">
        <Cart quantity={order.length} getCartShow={getCartShow} />
        {loading ? (
          <Preloader />
        ) : (
          <GoodsList goods={goods} addtoBucket={addtoBucket} />
        )}
        {isCartShow && (
          <BacketList
            order={order}
            getCartShow={getCartShow}
            removeFromBacket={removeFromBacket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        )}
        {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
      </main>
    </>
  );
}

export default Shop;
