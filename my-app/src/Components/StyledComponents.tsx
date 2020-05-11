import styled from 'styled-components';


export const Wrapper = styled.form`
padding: 20px;
margin: 10px;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
display: flex;
flex-direction: column;
width: 300px;
background-color: white;
`;

export const FormTitle = styled.p`
font-size: 20px;
text-align: center;
margin: 0;
margin-bottom: 15px;
color: darkred;
`;

export const Label = styled.label`
font-size: 16px;
margin-bottom: 5px;
`;

export const Input = styled.input`
padding-left: 10px;
font-size: 14px;
widht: 150px;
height: 30px;
border-radius: 5px;
margin-bottom: 15px;
outline: none;
`;

export const SubmitButton = styled.button`
padding: 10px;
border-radius: 10px;
color: white;
background-color: darkred;
font-weight: bold;
font-size: 16px;
outline: none;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.5s ease-in;
`;

export const CardWrapper = styled.button`
padding: 10px 15px;
margin: 10px;
border-radius: 10px;
outline: none;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s ease-in;
:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const Title = styled.p`
font-size: 24px;
text-align: center;
margin: 0;
margin-bottom: 10px;
border-bottom: 2px solid darkred;
`;

export const Ingredients = styled.p`
font-size: 18px;
margin: 0;
`;

export const Product = styled.p`
font-size: 14px;
margin: 0;
`;
export const Body = styled.div`
background-image: url(${require("../images/ivan-torres-MQUqbmszGGM-unsplash.jpg")});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;


export const RestaurantWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 30px;
`;

export const ContentWrapper = styled.div`
display: flex;
flex: 1;
flex-direction: column;
align-items: center;
`;

export const MenuWrapper = styled.div`
`;