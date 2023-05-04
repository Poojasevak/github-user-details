import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import FollowersList from '../components/user-components/FollowersList';
import {Colors} from '../styles';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  followerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.RED_SHADE,
  },
});

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
    <LinearGradient
      colors={['purple', 'white']}
      style={styles.followerContainer}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FollowersList users={followersList} navigate={navigation} />
      )}
    </LinearGradient>
  );
};

export default FollowersScreen;
