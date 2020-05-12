import React, { ChangeEvent, useState } from 'react';
import FoodCard, { IMenuItem, ISubIngredient } from './Components/FoodCard';
import FoodInput from './Components/FoodInput';
import { menuContent } from './Components/MenuContent';
import { ContentWrapper, FormTitle, Input, MenuWrapper, Product, RestaurantWrapper, Wrapper, Body } from './Components/StyledComponents';

const App = () => {
const [menu, setMenu] = useState<IMenuItem[]>([...menuContent]);
const [searchValue, setSearchValue] = useState<string>('');
const [searchResults, setSearchResults] = useState<IMenuItem[]>([]);

React.useEffect(() => {
  const results: IMenuItem[] = menu.filter((menuItem:IMenuItem) => 
  menuItem.foodIngredients.some((subIngredient:ISubIngredient) => 
  subIngredient.subIngredientProducts.some(product =>
  product.includes(searchValue))));
  setSearchResults(results);
}, [searchValue, menu]);

const saveFood = (food:IMenuItem): void => {
  const newMenu: IMenuItem[] = [...menu, {...food}]
  setMenu(newMenu)
};

const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
 setSearchValue(e.target.value);
};

const isProductHighlighted = (searchResults: IMenuItem[]) => {
  if(searchResults.length > 0){
    for(let i = 0; i < searchResults.length; i++){
      let ingredients = searchResults[i].foodIngredients;
      for (let j = 0; j < ingredients.length; j++){
        let subingredientProducts = ingredients[j].subIngredientProducts;
          for (let h = 0; h < subingredientProducts.length; h++){
            let product = subingredientProducts[h];
            if(searchValue !== '' && product.includes(searchValue)){
              console.log('productHL :>>',product);
              console.log('searchValue :>> ', searchValue);
              return product;
            };
          }
      }
    }
  } else return null;
}

console.log('menu :>> ', menu);

return (
     <Body>
     <RestaurantWrapper>
        <FoodInput addFood={saveFood}/>
        <ContentWrapper>
        <Wrapper>
            <FormTitle>Find a specific ingredient</FormTitle>
            <Input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Type to find an ingredient..."
            />
        </Wrapper>
        <MenuWrapper>
          {searchValue === "" ? menu.map((menuItem: IMenuItem)=>{
            return <FoodCard id={menuItem.id} key={menuItem.id} foodName={menuItem.foodName} foodIngredients={menuItem.foodIngredients} />
          }): searchResults.map((menuItem: IMenuItem)=>{
            return <FoodCard id={menuItem.id} key={menuItem.id} foodName={menuItem.foodName} foodIngredients={menuItem.foodIngredients} highlight={isProductHighlighted(searchResults) || ''}/>
          })}
          {searchResults.length === 0 && 
          <Wrapper style={{textAlign: 'center'}}>
          <Product>We have no dishes with "{searchValue}"</Product>
          </Wrapper>}
          </MenuWrapper>
          </ContentWrapper>
     </RestaurantWrapper>
     </Body>
   );
 }
export default App;
