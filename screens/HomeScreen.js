/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../services/Services';

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  console.log('movie', movie);

  useEffect(() => {
    getUpcomingMovies()
      .then(allMovies => {
        setMovies(allMovies);
        setMovie(allMovies[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text>{movie?.original_title}hell</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
