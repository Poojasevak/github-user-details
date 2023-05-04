import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
import UserDetails from '../components/user-components/UserDetails';
import {defineIcon} from './src/assets/index';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {}, [searchQuery]);

  return (
    <View style={{flex: 1, padding: 20, backgroundColor: 'lightblue'}}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onClearIconPress={() => {
          setSearchQuery('');
        }}
      />
      {/* <Text>Home Screen {searchQuery}</Text> */}

      <UserDetails username={searchQuery} />
    </View>
  );
};

export default HomeScreen;
