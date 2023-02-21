import React, { useState, createContext } from 'react';

// Criação do contexto  da aplicação

export const AuthContext = createContext({});

function AuthProvider({children}) {
    const [cartItems, setCartItems] = useState([]);

    // Metodo para adicionar item ao carrinho, verificando se o item já está no carrinho para poder adicionar
    // Se já estiver, não é permitido adicionar novamente
    const addItemCart = (item) => {
        if (!cartItems.some((object) => object.id === item.id)) {
            setCartItems([...cartItems, item]);
        }
    }

    return (
        <AuthContext.Provider value={{ addItemCart, cartItems }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;