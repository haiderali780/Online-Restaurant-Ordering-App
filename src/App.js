import {  useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCardHandler = () => {
    setCartIsShown(true);
  };
  const hidCardHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hidCardHandler} />}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
