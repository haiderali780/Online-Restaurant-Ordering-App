import { Fragment ,useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
 
const [cartIsShown,setCartIsShown]=useState(false)
const showCardHandler=()=>
{
  setCartIsShown(true)
}
const hidCardHandler=()=>
{
  setCartIsShown(false)
}
  return (
    <Fragment>
      {cartIsShown&&<Cart onClose={hidCardHandler}/>}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
