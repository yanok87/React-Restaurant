import React, { useState } from 'react';
import { CardWrapper, Ingredients, Product, Title } from './StyledComponents';


export interface IMenuItem {
    foodName: string;
    foodIngredients: ISubIngredient [];
    products?: string;
    id: string;
}

export interface ISubIngredient {
    subIngredientName: string;
    subIngredientProducts: string [];
}

const FoodCard = (props: IMenuItem) => {
const {foodName, foodIngredients} = props; 
const [showProducts, setShowProducts] = useState(false);   
    return ( <CardWrapper onClick={()=> {setShowProducts(!showProducts)}}>
        <Title>{foodName}</Title>
        {foodIngredients.map((ingredient, index)=>{
           return <div key={index}> <Ingredients >{ingredient.subIngredientName}</Ingredients>
            {showProducts && ingredient.subIngredientProducts.map((product, index) => {
            return <Product key={index}>{product}</Product>
            })} </div>
        })}
    </CardWrapper>
    )
};

export default FoodCard;