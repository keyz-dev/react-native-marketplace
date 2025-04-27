import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles/productRow.style'
import { SIZES, PRODUCTS } from '../../constants'
import ProductCardView from './ProductCardView'


const ProductRow = () => {
    PRODUCTS.forEach(element => {
        console.log(element.id)
    });

    return (
        <ScrollView style={{marginTop: SIZES.medium, flex: 1, marginBottom: 120}}>
            <FlatList
                data={PRODUCTS}
                renderItem={({ item }) => (
                    <ProductCardView product={item}/>
                )}
                keyExtractor={(item) => item._id.toString()}
                numColumns={2}
                contentContainerStyle={{ paddingHorizontal: 10, columnGap: SIZES.medium, rowGap: SIZES.medium }}
            />
        </ScrollView>
    )
}

export default ProductRow