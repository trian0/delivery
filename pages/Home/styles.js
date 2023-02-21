import styled from "styled-components/native";

// View para tela toda
export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

// View para cada Item dos produtos
export const ItemContainer = styled.View`
    width: 300px;
    background-color: #D3D3D3;
    margin: 5px;
`;

// Style para o titulo do produto
export const Title = styled.Text`
    font-size: 25px;
    color: #000;
    align-self: center;
    font-weight: bold;
`;

// Style para a descrição do produto
export const Description = styled.Text`
    margin: 15px;
    font-size: 12px;
    color: #000;
    align-self: center;
`;

// Style para o preço do produto
export const Price = styled.Text`
    font-size: 15px;
    color: #00ff00;
    margin-left: 15px;
`;

// Style para as tags
export const Tags = styled.Text`
    font-size: 8px;
    color: #fff;
    align-self: center;
`;

// View para encapsular o icone de carrinho e a quantidade
export const ContainerQuantity = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

// Style para as quantidades
export const Quantity = styled.Text`
    font-size: 15px;
    color: #fff;
    margin-left: 5px;
    margin-right: 5px;
`;

// View para encapsular quantidade e os icones de adicionar e remover
export const ItemBottomContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

// Botão para adicionar ao carrinho
export const ButtonAddCart = styled.TouchableOpacity`
    background-color: #000;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 5px;
`;

// Botões simples para os icones de adicionar, remover e carrinho
export const ButtonAdd = styled.TouchableOpacity`
`;

export const ButtonRemove = styled.TouchableOpacity`
`;

export const ButtonCart = styled.TouchableOpacity`
`;

// Style para texto do botão de adicionar ao carrinho
export const ButtonText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    align-self: center;
    color: #fff;
`;

// Style da header
export const Header = styled.View`
    width: 100%;
    height: 60px;
    background-color: #d3d3d3;
    justify-content: center;
    align-items: center;
`;

// Style para quantidade de itens no carrinho
export const QuantityCart = styled.Text`
    font-size: 12px;
    background: #fb3b1e;
    padding: 0 5px 5px;
    font-weight: bold;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

// Style para imagem
export const StyledImage = styled.Image`
    width: 100px;
    height: 100px;
    align-self: center;
`;