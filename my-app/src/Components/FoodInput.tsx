import React, { ChangeEvent, FormEvent, useState } from 'react';
import shortid from 'shortid';
import { IMenuItem } from './FoodCard';
import { FormTitle, Input, Label, SubmitButton, Wrapper } from './StyledComponents';

export interface IFoodInput {
    addFood: (food: IMenuItem) => void; 
}

const FoodInput = (props: IFoodInput) => {
    const {addFood} = props;

    const [foodName, setFoodName] = useState<string>('');
    const [foodIngredient1, setfoodIngredient1] = useState<string>('');
    const [product1, setProduct1] = useState<string>('');
    const [foodIngredient2, setfoodIngredient2] = useState<string>('');
    const [product2, setProduct2] = useState<string>('');
    const [foodIngredient3, setfoodIngredient3] = useState<string>('');
    const [product3, setProduct3] = useState<string>('');

const clearInputs = () => {
    setFoodName('');
    setfoodIngredient1('');
    setProduct1('');
    setfoodIngredient2('');
    setProduct2('');
    setfoodIngredient3('');
    setProduct3('');
}
const menuItem1 = {
    foodName,
    foodIngredients: [
        { 
            subIngredientName: foodIngredient1 ,
            subIngredientProducts: product1.split(',')
        }
    ],
    id: shortid.generate(),
}

const menuItem2 = {
    foodName,
    foodIngredients: [
        { 
            subIngredientName: foodIngredient1 ,
            subIngredientProducts: product1.split(',')
        },
        { 
            subIngredientName: foodIngredient2 ,
            subIngredientProducts: product2.split(',')
        }
    ],
    id: shortid.generate(),
}

const menuItem3 = {
    foodName,
    foodIngredients: [
        { 
            subIngredientName: foodIngredient1 ,
            subIngredientProducts: product1.split(',')
        },
        { 
            subIngredientName: foodIngredient2 ,
            subIngredientProducts: product2.split(',')
        },
        { 
            subIngredientName: foodIngredient3 ,
            subIngredientProducts: product3.split(',')
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

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addFood({...selectedMenuItem()});
    clearInputs();
};

const onFoodNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFoodName(e.target.value);
};

const onIngredient1Change = (e: ChangeEvent<HTMLInputElement>) => {
    setfoodIngredient1(e.target.value);
};

const onProduct1Change = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct1(e.target.value);
};
const onIngredient2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setfoodIngredient2(e.target.value);
};

const onProduct2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct2(e.target.value);
};
const onIngredient3Change = (e: ChangeEvent<HTMLInputElement>) => {
    setfoodIngredient3(e.target.value);
};

const onProduct3Change = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct3(e.target.value);
};

    return <Wrapper onSubmit={handleSubmit}>
        <FormTitle>Add new dish to menu</FormTitle>
        <Label htmlFor="foodName">Dish name</Label>
        <Input id="foodName" type="text" name="foodName" placeholder="ex: Pizza Margharita"  value={foodName} onChange={onFoodNameChange} required/>
        <Label htmlFor="foodIngredient1">Ingredient</Label>
        <Input id="foodIngredient1" type="text" name="foodIngredient1" placeholder="ex: Pizza Bread" value={foodIngredient1} onChange={onIngredient1Change} required/>
        <Label htmlFor="product1">What products does this ingredient consist of?</Label>
        <Input id="product1" type="text" name="product1" placeholder="ex: flour, water" value={product1} onChange={onProduct1Change}  required/>
        <Label htmlFor="foodIngredient2">Additional ingredient</Label>
        <Input id="foodIngredient2" type="text" name="foodIngredient2" placeholder="ex: Tomato Sauce " value={foodIngredient2} onChange={onIngredient2Change}/>
        <Label htmlFor="product2">What products does this ingredient consist of?</Label>
        <Input id="product2" type="text" name="product2" placeholder="ex: tomatoes, garlic" value={product2} onChange={onProduct2Change}/>
        <Label htmlFor="foodIngredient3">Additional Ingredient</Label>
        <Input id="foodIngredient3" type="text" name="foodIngredient3" placeholder="ex: Mozzarella cheese" value={foodIngredient3} onChange={onIngredient3Change}/>
        <Label htmlFor="product3">What products does this ingredient consist of?</Label>
        <Input id="product3" type="text" name="product3" placeholder="ex: milk" value={product3} onChange={onProduct3Change}/>
        <SubmitButton type="submit">Add to menu</SubmitButton>
    </Wrapper>
}

export default FoodInput;