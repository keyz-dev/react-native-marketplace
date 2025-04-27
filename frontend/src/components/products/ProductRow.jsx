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
}

export default ProductRow