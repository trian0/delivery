import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { AuthContext } from '../contexts/auth';
import { Container, StyledImage, ItemContainer, Quantity, TotalText, TotalValue, TotalContainer } from './styles';

function Cart() {
    const { cartItems } = useContext(AuthContext);

    //Também utiliza método MAP para fazer listagem de itens 
    const renderCart = () => {
        return (
            <ScrollView>
                {cartItems.map((item) => 
                    <ItemContainer key={item.id}>
                        <StyledImage source={require('../assets/images/tradicional.png')} />
                        <Quantity>{item.quantity}</Quantity>
                    </ItemContainer>
                )}
            </ScrollView>
        )
    }

    // Usa o reduce para calcular valor total dos itens, pega a quantidade de produtos, multiplica pelo preço e
    // Somando todos os valores depois
    const total = cartItems.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.price * currentValue.quantity);
    }, 0)

    // Usa toFixed para diminuir casas decimais
    return (
        <Container>
            {renderCart()}
            <TotalContainer>
                <TotalText>VALOR TOTAL = </TotalText>
                <TotalValue>R$ {total.toFixed(2)}</TotalValue>
            </TotalContainer>
        </Container>
    )
};

export default Cart;