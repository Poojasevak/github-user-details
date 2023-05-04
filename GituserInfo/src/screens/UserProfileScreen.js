import {View, Text} from 'react-native';
import React from 'react';
import UserDetails from '../components/user-components/UserDetails';

const UserProfileScreen = ({route, navigation}) => {
  const {username} = route.params;

  return (
    <View style={{padding: 20}}>
      <UserDetails clickFollow={false} username={username} />
    </View>
  );
};

export default UserProfileScreen;
