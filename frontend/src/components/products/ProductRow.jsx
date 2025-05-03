<<<<<<< HEAD
import { View, Text, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './styles/productRow.style'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import { Loader } from '../index'
import { useProducts } from '../../stateManagement/contexts'

const ProductRow = () => {
    const { bestSellers, loading, error } = useProducts()

    return (
        <View style={styles.container}>
            {loading ? (
                <Loader />
            ): error ? (
                <Text> {error.toString()}</Text>
            ): (
                <FlatList
                    data={bestSellers}
                    renderItem={({ item }) => (
                        <ProductCardView product={item}/>
                    )}
                    keyExtractor={(item) => item._id.toString()}
                    numColumns={2}
                    contentContainerStyle={{ 
                        paddingHorizontal: 10, 
                        paddingBottom: 120,
                        paddingTop: SIZES.medium 
                    }}
                    columnWrapperStyle={{ 
                        gap: SIZES.medium // Replaces columnGap
                    }}
                    ItemSeparatorComponent={() => <View style={{ height: SIZES.medium }} />} // This replaces rowGap
                />
            )}
        </View>
    );
=======
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
>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845
}

export default ProductRow