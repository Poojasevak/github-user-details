import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';
import UserDetails from '../components/user-components/UserDetails';
import {defineIcon} from '../assets/svg';
import {Colors} from '../styles';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.RED_SHADE,
  },
});
const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {}, [searchQuery]);

  return (
    <LinearGradient
      colors={['purple', 'white']}
      style={styles.homeContainer}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onClearIconPress={() => {
          setSearchQuery('');
        }}
        icon={() => <View>{defineIcon('searchbar', 20, 20)}</View>}
        clearIcon={() => <View>{defineIcon('close', 20, 20)}</View>}
      />

      <UserDetails username={searchQuery} />
    </LinearGradient>
  );
};

export default HomeScreen;
