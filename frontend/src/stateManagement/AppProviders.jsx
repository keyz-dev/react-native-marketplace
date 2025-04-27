import { AuthProvider, ProductProvider, CategoryProvider, CartProvider, FavoritesProvider } from "./contexts";

import React from 'react'

const AppProviders = ({children}) => (
    <AuthProvider>
        <ProductProvider>
            <CategoryProvider>
                <CartProvider>
                    <FavoritesProvider>
                        {children}
                    </FavoritesProvider>
                </CartProvider>
            </CategoryProvider>
        </ProductProvider>
    </AuthProvider>
)

export default AppProviders
