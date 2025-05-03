<<<<<<< HEAD
import React from 'react'
import { COLORS } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../components'
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useFavorites } from '../stateManagement/contexts';
import { FavoritesTile } from '../components/favorites';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  return (
    <SafeAreaView>
      <Header title={"Favorites"}/>
      <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>You have no favorite products yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <FavoritesTile product={item} onRemove={removeFromFavorites} />
          )}
        />
      )}
    </View>
=======
import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const Favorites = () => {
  return (
    <SafeAreaView>
      <Text>Favorites</Text>
>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845
    </SafeAreaView>
  )
}

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: { padding: 10 },
  emptyText: { fontSize: 18, textAlign: 'center', fontFamily: 'regular', marginTop: 50, color: '#666' },
});


=======
>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845
export default Favorites