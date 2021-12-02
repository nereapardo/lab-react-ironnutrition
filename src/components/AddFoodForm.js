import { Input, Button } from "antd";
import { useState } from "react";

const AddFoodForm = (props) => {
  const { newFoods, setNewFoods } = props;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const createNewFood = () => {
    setNewFoods([
      ...newFoods,
      {
        name,
        image,
        calories,
        servings,
      },
    ]);
  };

  return (
    <div>
      <p>Name: </p>
      <Input
        value={name}
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <p>Image: </p>
      <Input
        value={image}
        type="text"
        onChange={(event) => {
          setImage(event.target.value);
        }}
      />
      <p>Calories: </p>
      <Input
        value={calories}
        type="number"
        onChange={(event) => {
          setCalories(event.target.value);
        }}
      />
      <p>Servings: </p>
      <Input
        value={servings}
        type="number"
        onChange={(event) => {
          setServings(event.target.value);
        }}
      />

      <Button
        onClick={() => {
          createNewFood();
        }}
      >
        Create new food
      </Button>
    </div>
  );
};
export default AddFoodForm;
