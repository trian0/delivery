import styled from "styled-components/native";

// View para a tela toda
export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

// Style para a imagem
export const StyledImage = styled.Image`
    width: 100px;
    height: 100px;
`;

// Style para cada item do carrinho
export const ItemContainer = styled.View`
    flex-direction: row;
    width: 300px;
    background-color: #D3D3D3;
    margin: 5px;
    justify-content: space-evenly;
    align-items: center;
`;

// Style para a quantidade
export const Quantity = styled.Text`
    font-size: 15px;
    color: #fff;
    margin-right: 15px;
`;

// Style para o texto do total
export const TotalText = styled.Text`
    font-size: 30px;
    color: #000;
    font-weight: bold;
`;

// Style para o valor do total
export const TotalValue = styled.Text`
    font-size: 30px;
    color: #000;
    font-weight: bold;
`;

// View para ajustar valor final
export const TotalContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;