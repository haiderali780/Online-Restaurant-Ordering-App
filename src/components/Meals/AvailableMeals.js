import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";
import { useState,useEffect } from "react";



const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const [isLoading,setIsLoading]=useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-53317-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals();
  }, []);

if(isLoading)
{
  return(<section className={classes.loading}><p className={classes.lText}>Loading...</p></section>);
}


  const mealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
