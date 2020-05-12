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
            return <FoodCard id={menuItem.id} key={menuItem.id} foodName={menuItem.foodName} foodIngredients={menuItem.foodIngredients}/>
          }): searchResults.map((menuItem: IMenuItem)=>{
            return <FoodCard id={menuItem.id} key={menuItem.id} foodName={menuItem.foodName} foodIngredients={menuItem.foodIngredients}/>
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
