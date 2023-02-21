import {
    Container,
    Title,
    Description,
    Price,
    ItemContainer,
    Tags,
    Quantity,
    ItemBottomContainer,
    ContainerQuantity,
    ButtonAddCart,
    ButtonText,
    Header,
    QuantityCart,
    ButtonAdd,
    ButtonRemove,
    StyledImage,
    ButtonCart,
} from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import { coffees } from '../../assets/coffees';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

function Home() {
    const [defaultCoffees, setDefaultCoffees] = useState(coffees);
    const navigation = useNavigation();
    const { addItemCart, cartItems } = useContext(AuthContext);

    // Não utilizei FlatList, preferir usar o método MAP para fazer a listagem dos produtos 
    const renderCoffees = () => {
        return (
            <ScrollView>
                {defaultCoffees.map((item) =>
                    <ItemContainer key={item.id}>
                        <StyledImage source={require(`../assets/images/americano.png`)} />
                        <Title>{item.name}</Title>
                        <Tags>{item.tags.map((tag) => tag + ' ')}</Tags>
                        <Description>{item.description}</Description>
                        <ItemBottomContainer>
                            <Price>"$ {item.price}"</Price>
                            <ContainerQuantity>
                                <ButtonAdd onPress={() => addQuantity(item.id)}>
                                    <MaterialIcons name="add-circle" size={32} color="white" />
                                </ButtonAdd>
                                <Quantity>{item.quantity}</Quantity>
                                <ButtonRemove onPress={() => removeQuantity(item.id)}>
                                    <MaterialIcons name="remove-circle" size={32} color="white" />
                                </ButtonRemove>
                            </ContainerQuantity>
                        </ItemBottomContainer>
                        <ButtonAddCart onPress={() => addItemCart(item)}>
                            <ButtonText>ADICIONA AO CARRINHO</ButtonText>
                        </ButtonAddCart>
                    </ItemContainer>
                )}
            </ScrollView>
        )
    }

    // Método para adicionar quantidade de produtos ao clicar no botão "+", onde percorre o array de produtos, identifica o
    // que foi clicado e altera o valor do array setando um array atualizado.
    const addQuantity = (id) => {
        const updatedItems = defaultCoffees.map(coffe => {
            if (id === coffe.id) {
                return {
                    ...coffe,
                    quantity: coffe.quantity + 1
                }
            }
            return coffe;
        })

        setDefaultCoffees(updatedItems);
    }

    // Método para remover quantidade de produtos ao clicar no botão "-", mesma ideia do botão de adicionar
    const removeQuantity = (id) => {
        const updatedItems = defaultCoffees.map(coffe => {
            if (id === coffe.id && coffe.quantity !== 0) {
                return {
                    ...coffe,
                    quantity: coffe.quantity - 1
                }
            }
            return coffe;
        })

        setDefaultCoffees(updatedItems);
    }

    // Aqui tem o Header, que ao clicar no Cart vai para a tela do carrinho e também mostrando a quantidade de produtos adicionados
    // Pelo tamanho do array
    return (
        <Container>
            <Header>
                <ContainerQuantity>
                    <QuantityCart>{cartItems.length}</QuantityCart>
                    <ButtonCart onPress={() => navigation.navigate("Cart")}>
                        <MaterialIcons name="add-shopping-cart" size={32} color="white" />
                    </ButtonCart>
                </ContainerQuantity>
            </Header>
            {renderCoffees()}
        </Container>
    );
}

export default Home;