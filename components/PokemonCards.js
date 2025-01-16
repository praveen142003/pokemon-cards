import { FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


function getTypeDetails(type) {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
}
export default function Cards({ datas }) {
  const Deatils = (item) => {
    const { borderColor, emoji } = getTypeDetails(item.type)
    return (
      <View style={styles.cardContainer}>
        <View style={styles.nameContainer}>
          <Text style={{ fontWeight: 'bold',color:'cornflowerblue' ,fontSize:22 }}>{item.name}</Text>
          <Text style={{ fontWeight: 'bold' }}>❤️HP:{item.hp}</Text>
        </View>
        <Image source={item.image} resizeMode='contain' style={styles.image} />
        <View style={styles.typeDetails}>
          <View style={[styles.badge, { borderColor }]}>
            <Text style={styles.batchEmoji}>{emoji}</Text>
            <Text style={styles.batchType}>{item.type}</Text>
          </View>
        </View>
        <View style={styles.movesContainer}>
          <Text style={styles.movesText}>Moves :<Text>{item.moves.join(',')}</Text></Text>
        </View>
        <View style={styles.weaknessContainer}>
          <Text style={styles.weaknessText}>Weakness :<Text>{item.weaknesses.join(',')}</Text></Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <FlatList
        data={datas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          Deatils(item)
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    margintop: 60
  },
  cardContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 4
      },
      android: {
        elevation: 3
      }
    })
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16
  },
  typeDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  batchEmoji: {
    paddingRight: 5
  },
  batchType :{
 fontWeight :'bold'
  },
  movesContainer: {
    marginBottom: 16
  },
  movesText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  weaknessContainer: {
    mrginbottom: 30
  },
  weaknessText: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})