import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Colors } from "../theme/colors";
import FilmItem from "../components/FilmItem";
import SearchInput from "../components/SearchInput";
import { Montserrat } from "../theme/Fonts";
import searchFilmByTitle from "../redux/films/actions";
import {LinearGradient} from 'expo-linear-gradient';
import Slide from './Slider'
import List from './List'

// const IRON_MAN = {
//   Title: 'Iron Man',
//   Year: 2008,
//   Runtime: '126 min',
//   Genre: 'Action, Adventure, Sci-Fi',
//   imdbRating: 7.9,
//   Poster:
//     'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
// };

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const films = useSelector((store) => store.films);
  const dispatch = useDispatch();

  const handleFetchMovies = () => {
    dispatch(searchFilmByTitle(searchText));
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>

      {searchText == "" && (<View style={{height: 180,}}><Slide></Slide></View>)}
      
      <View style={styles.inputContainer}>
        <SearchInput
          value={searchText}
          setValue={setSearchText}
          handleSubmit={handleFetchMovies}
          
        />
      </View>

      {searchText != "" && (
        <FlatList
          style={styles.flatList}
          data={films.films}
          renderItem={({ item }) => (
            <FilmItem film={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => item + index}
        />
      )}
      
      {searchText == "" && ( <View style={{height: 350}}><List></List></View> )}
      
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue[800],
    flex: 1,
    padding: 24,
  },
  flatList: {
    borderRadius: 0,
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  title: {
    color: Colors.white,
    fontFamily: Montserrat.semiBold,
    fontSize: 32,
  },
});
