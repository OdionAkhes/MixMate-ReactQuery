import React from 'react'

import { Link, useLoaderData } from "react-router-dom";

import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPage'
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  console.log(data);

  return { id, data };
};



const Cocktail = () => {
  const { id, data } = useLoaderData()
  
  const singleDrink = data.drinks[0]
  console.log(singleDrink)
  const { strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructios
  } = singleDrink

  return <Wrapper>
    <header>
      <Link to="/" className="btn">
        back home
      </Link>
      <h3>{ name}</h3>
    </header>
    <div className="drink">
      <img src={image} alt="" />
       <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
        </p>
        </div>
    </div>
  </Wrapper>;
}

export default Cocktail