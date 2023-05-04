import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import UserDetails from '../components/user-components/UserDetails';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../styles';

const styles = StyleSheet.create({
  userprofile: {
    padding: 20,
    flex: 1,
  },
});

const UserProfileScreen = ({route, navigation}) => {
  const {username} = route.params;

  return (
    <LinearGradient
      colors={['purple', 'white']}
      style={styles.userprofile}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <UserDetails clickFollow={false} username={username} />
    </LinearGradient>
  );
};

export default UserProfileScreen;
