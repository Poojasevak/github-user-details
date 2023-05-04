import React, {useState, useEffect} from 'react';
import {View, StyleSheet, BackHandler} from 'react-native';
import {Searchbar} from 'react-native-paper';
import UserDetails from '../components/user-components/UserDetails';
import {defineIcon} from '../assets/svg';
import {Colors} from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import ConfirmExitModal from '../components/ common-components/ConfirmExitModal';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.RED_SHADE,
  },
});
const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [deboucedkey, setDeboucedkey] = useState('');

  const [showCloseModal, setShowCloseModal] = useState(false);

  const backActionHandler = () => {
    setShowCloseModal(true);
    return <ConfirmExitModal />;
  };

  useEffect(() => {
    // Add event listener for hardware back button press on Android
    BackHandler.addEventListener('hardwareBackPress', backActionHandler);
    return () =>
      // clear/remove event listener
      BackHandler.removeEventListener('hardwareBackPress', backActionHandler);
  }, []);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const onChangeSearch = query => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const delayedSearch = debounce(() => {
      console.log(`Searching for ${searchQuery}`);
      setDeboucedkey(searchQuery);
    }, 500);
    delayedSearch();
  }, [searchQuery]);

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
      {showCloseModal ? (
        <ConfirmExitModal
          onCancel={() => {
            setShowCloseModal(false);
          }}
          onConfirm={() => {
            setShowCloseModal(false);
            BackHandler.exitApp();
          }}
        />
      ) : null}
      <UserDetails username={deboucedkey} />
    </LinearGradient>
  );
};

export default HomeScreen;
