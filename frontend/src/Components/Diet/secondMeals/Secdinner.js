import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "../FoodCard";

function Secdinner() {
  const [dinner, setDinner] = useState([]);

  const getData = async () => {
    const dinner =
      "https://api.edamam.com/api/recipes/v2?type=public&q=salads&app_id=2b4dfcef&app_key=71054cd413f030b66479d7f3fb2a6112&diet=balanced&health=alcohol-free&mealType=Dinner";
    const result = await axios.get(dinner);
    const dr = Math.floor(Math.random() * 20);
    setDinner(result.data.hits[dr].recipe);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* {bf !== [] && bf.map((recipe) => <Recipe recipe={recipe} />)} */}
      <h2 className="dishes">Dinner</h2>
      {dinner !== [] && <FoodCard recipe={dinner} />}
    </>
  );
}

export default Secdinner;
