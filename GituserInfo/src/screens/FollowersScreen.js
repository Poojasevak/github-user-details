import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import FollowersList from '../components/user-components/FollowersList';
import axios from 'axios';

const FollowersScreen = ({route, navigation}) => {
  const {uri, type} = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [followersList, setFollowersList] = useState([]);

  useEffect(() => {
    navigation.setOptions({title: type});
    const fetchFollowersData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(uri);
        console.log('respome-->', response);
        if (response.status === 200) {
          console.log('inside success');
          const data = await response.json();
          console.log('Data---->', data);
          setFollowersList(data);
          setIsLoading(false);
        } else {
          setFollowersList([]);
          setIsLoading(false);
        }
        // setIsLoading(false);
        // setUserData(JSON.stringify(data));
      } catch (error) {
        setFollowersList([]);
        setIsLoading(false);
      }
    };
    fetchFollowersData();
  }, [uri, type, navigation]);
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: '#F5F5F8'}}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FollowersList users={followersList} navigate={navigation} />
      )}
    </View>
  );
};

export default FollowersScreen;
