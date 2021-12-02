import { useState } from "react";
import "./App.css";
import data from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";

const App = () => {
  // const [foods] = useState(data);
  const [newFoods, setNewFoods] = useState([...data]);

  return (
    <div className="App">
      <AddFoodForm newFoods={newFoods} setNewFoods={setNewFoods} />

      {newFoods.map((food, index) => {
        return <FoodBox food={food} key={index + Date.now()} />;
      })}
    </div>
  );
};

export default App;
