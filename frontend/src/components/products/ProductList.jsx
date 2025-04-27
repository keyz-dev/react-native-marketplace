import { FlatList, View, Text } from 'react-native'
import React from 'react'
import styles from './styles/productList.style'
import { Loader } from '../'
import ProductCardView from './ProductCardView'
import { useProducts } from '../../stateManagement/contexts'

const ProductList = () => {
    const { products, loading, error} = useProducts()

    if (loading){
        return (
            <Loader />
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                numColumns={2}
                renderItem={({item}) => (<ProductCardView product={item}/>)}
                keyExtractor={(item) => item._id.toString()}
                contentContainerStyle={styles.container}
                ItemSeparatorComponent={() => <View style={styles.separator}/>}
            />
        </View>
    )
}

export default ProductList