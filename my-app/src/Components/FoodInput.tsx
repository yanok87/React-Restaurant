import React, { ChangeEvent, FormEvent, useReducer } from 'react';
import shortid from 'shortid';
import { IMenuItem } from './FoodCard';
import { FormTitle, Input, Label, SubmitButton, Wrapper } from './StyledComponents';

export interface IFoodInput {
    addFood: (food: IMenuItem) => void; 
}

const FoodInput = (props: IFoodInput) => {
    const {addFood} = props;

    const [userInput, setUserInput] = useReducer(
        (state:any, newState:any) => ({...state, ...newState}),
        {
        foodName: '',
        foodIngredient1: '',
        product1: '',
        foodIngredient2: '',
        product2: '',
        foodIngredient3: '',
        product3: '',
        }
      );

      const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({[name]: newValue});
      }

      const clearInputs = () => {
        setUserInput( {
            foodName: '',
            foodIngredient1: '',
            product1: '',
            foodIngredient2: '',
            product2: '',
            foodIngredient3: '',
            product3: '',
            });
      }
      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addFood({...selectedMenuItem()});
        clearInputs();
    };

const menuItem1 = {
    foodName: userInput.foodName,
    foodIngredients: [
        { 
            subIngredientName: userInput.foodIngredient1 ,
            subIngredientProducts: userInput.product1.split(',')
        }
    ],
    id: shortid.generate(),
}

const menuItem2 = {
    foodName: userInput.foodName,
    foodIngredients: [
        { 
            subIngredientName: userInput.foodIngredient1 ,
            subIngredientProducts: userInput.product1.split(',')
        },
        { 
            subIngredientName: userInput.foodIngredient2 ,
            subIngredientProducts: userInput.product2.split(',')
        }
    ],
    id: shortid.generate(),
}

const menuItem3 = {
    foodName: userInput.foodName,
    foodIngredients: [
        { 
            subIngredientName: userInput.foodIngredient1 ,
            subIngredientProducts: userInput.product1.split(',')
        },
        { 
            subIngredientName: userInput.foodIngredient2 ,
            subIngredientProducts: userInput.product2.split(',')
        },
        { 
            subIngredientName: userInput.foodIngredient3 ,
            subIngredientProducts: userInput.product3.split(',')
        }
    ],
    id: shortid.generate(),
}

const selectedMenuItem = () => {
    if(menuItem3.foodIngredients[2].subIngredientName === "" && menuItem3.foodIngredients[1].subIngredientName === ""){
        return menuItem1;
    } else if(menuItem3.foodIngredients[2].subIngredientName === ""){
        return menuItem2;
    } else return menuItem3;
}

    return <Wrapper onSubmit={handleSubmit}>
        <FormTitle>Add new dish to menu</FormTitle>
        <Label htmlFor="foodName">Dish name</Label>
        <Input id="foodName" type="text" name="foodName" placeholder="ex: Pizza Margharita"  value={userInput.foodName} onChange={handleChange} required/>
        <Label htmlFor="foodIngredient1">Ingredient</Label>
        <Input id="foodIngredient1" type="text" name="foodIngredient1" placeholder="ex: Pizza Bread" value={userInput.foodIngredient1} onChange={handleChange} required/>
        <Label htmlFor="product1">What products does this ingredient consist of?</Label>
        <Input id="product1" type="text" name="product1" placeholder="ex: flour, water" value={userInput.product1} onChange={handleChange}  required/>
        <Label htmlFor="foodIngredient2">Additional ingredient</Label>
        <Input id="foodIngredient2" type="text" name="foodIngredient2" placeholder="ex: Tomato Sauce " value={userInput.foodIngredient2} onChange={handleChange}/>
        <Label htmlFor="product2">What products does this ingredient consist of?</Label>
        <Input id="product2" type="text" name="product2" placeholder="ex: tomatoes, garlic" value={userInput.product2} onChange={handleChange}/>
        <Label htmlFor="foodIngredient3">Additional Ingredient</Label>
        <Input id="foodIngredient3" type="text" name="foodIngredient3" placeholder="ex: Mozzarella cheese" value={userInput.foodIngredient3} onChange={handleChange}/>
        <Label htmlFor="product3">What products does this ingredient consist of?</Label>
        <Input id="product3" type="text" name="product3" placeholder="ex: milk" value={userInput.product3} onChange={handleChange}/>
        <SubmitButton type="submit">Add to menu</SubmitButton>
    </Wrapper>
}

export default FoodInput;