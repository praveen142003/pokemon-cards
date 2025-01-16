import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import PokemonCards from './components/PokemonCards';

export default function App() {
  //  const charmanderDetails = {
  //       name : 'Charmander',
  //       image : require("./assets/charmander.png"),
  //       type : 'Fire',
  //       hp : 39,
  //       moves : ['Scratch','Ember' ,'Growl' ,'Leer'],
  //       weaknesses : ['Water','Rock']
  //   }
  //   const squirtleData = {
  //     name: "Squirtle",
  //     image: require("./assets/squirtle.png"), 
  //     type: "Water",
  //     hp: 44,
  //     moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
  //     weaknesses: ["Electric", "Grass"],
  //   };
  
  //   const bulbasaurData = {
  //     name: "Bulbasaur",
  //     image: require("./assets/bulbasaur.png"),
  //     type: "Grass",
  //     hp: 45,
  //     moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
  //     weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  //   };
  
  //   const pikachuData = {
  //     name: "Pikachu",
  //     image: require("./assets/pikachu.png"), 
  //     type: "Electric",
  //     hp: 35,
  //     moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
  //     weaknesses: ["Ground"],
  //   };
    const cardData = [
      {
        name : 'Charmander',
        image : require("./assets/charmander.png"),
        type : 'Fire',
        hp : 39,
        moves : ['Scratch','Ember' ,'Growl' ,'Leer'],
        weaknesses : ['Water','Rock']
    },
    {
      name: "Squirtle",
      image: require("./assets/squirtle.png"), 
      type: "Water",
      hp: 44,
      moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
      weaknesses: ["Electric", "Grass"],
    },
    {
      name: "Bulbasaur",
      image: require("./assets/bulbasaur.png"),
      type: "Grass",
      hp: 45,
      moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    },
    {
      name: "Pikachu",
      image: require("./assets/pikachu.png"), 
      type: "Electric",
      hp: 35,
      moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
      weaknesses: ["Ground"],
    }
    ]
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Pokemon Cards</Text>
          </View>
    <ScrollView>
            <PokemonCards datas = {cardData} />
            {/* <PokemonCards {...charmanderDetails}/>
            <PokemonCards {...pikachuData}/>
            <PokemonCards {...squirtleData}/>
            <PokemonCards {...bulbasaurData}/> */}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer : {
    marginTop : 40,
    backgroundColor :'cornflowerblue',
    alignItems : 'center',
    padding : 10
  },
  headerText : {
    color : 'white',
    fontWeight : 'bold'
  }
});
