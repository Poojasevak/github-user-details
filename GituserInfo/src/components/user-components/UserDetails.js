import React, {useEffect, useState, useReducer} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import reducer from '../../redux-store/reducer';
import {useNavigation} from '@react-navigation/native';
import NoUsersCard from '../ common-components/NoUsersCard';
import {Colors} from '../../styles';
import {KEYS} from '../../config/Constants';

const styles = StyleSheet.create({
  detailsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
    padding: 20,
    backgroundColor: Colors.BLACK,
  },
});

const UserDetails = ({username, clickFollow = true}) => {
  const [userData, setUserData] = useState({a: 1});
  const [isLoading, setIsLoading] = useState(false);

  const [loginName, setLoginName] = useState('');
  const [profileImg, setProfileImg] = useState('');

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [followersCount, setFollowersCount] = useState(0);
  const [followingsCount, setFollowingsCount] = useState(0);
  const [followersListUri, setFollowersListUri] = useState('');
  const [followingsListUri, setFollowingsListUri] = useState('');

  const navigation = useNavigation();

  const navigateFollowers = () => {
    navigation.navigate('Follower', {uri: followersListUri, type: 'Followers'});
  };

  const navigateFollowings = () => {
    navigation.navigate('Follower', {
      uri: followingsListUri,
      type: 'Followings',
    });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const headers = {
          Authorization: `Bearer ${KEYS.GITHUB_TOKEN}`,
        };
        const response = await fetch(
          `https://api.github.com/users/${username}`,
          {headers},
        );
        if (response.status === 200) {
          console.log('inside success');
          const data = await response.json();
          if (Object.keys(data).length > 0) {
            setLoginName(data.login || '');
            setName(data.name || '');
            setProfileImg(data.avatar_url || '');
            setFollowersCount(data.followers || 0);
            setFollowingsCount(data.following || 0);

            setFollowersListUri(data.followers_url || '');
            // Here Other User adding at end of the followings uri.
            // So I removed that
            setFollowingsListUri(
              data.following_url.replace('{/other_user}', '') || '',
            );

            setUserData(data);
            setIsLoading(false);
          } else {
            setLoginName('');
            setProfileImg('');
            setName('');
            setIsLoading(false);
          }
        }
      } catch (error) {
        // console.error('Err--->', error);
        setLoginName('');
        setProfileImg('');
        setName('');
        setIsLoading(false);
      }
    };

    if (username !== '') {
      fetchUserData();
    } else {
      setLoginName('');
      setProfileImg('');
      setName('');
      setIsLoading(false);
    }
  }, [username]);

  if (
    !isLoading &&
    loginName === '' &&
    profileImg === '' &&
    name === '' &&
    followersCount === 0 &&
    followingsCount === 0
  ) {
    return <NoUsersCard marginTop={20} title={'No user Found'}></NoUsersCard>;
  }

  return (
    <View>
      {isLoading ? (
        <View style={{paddingTop: 40}}>
          <ActivityIndicator size="large" />
        </View>
      ) : null}
      {!isLoading && loginName !== '' ? (
        <View style={styles.detailsContainer}>
          {profileImg ? (
            <Image
              style={{
                width: 100,
                height: 100,
                //   backgroundColor: 'pink',
                borderRadius: 100,
              }}
              source={{uri: profileImg}}
            />
          ) : (
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                backgroundColor: 'pink',
              }}>
              {' '}
            </View>
          )}
          <View style={{marginTop: 20}}>
            <Text style={{lineHeight: 30, color: 'white'}}>
              UserName : {loginName}
            </Text>
            <Text style={{lineHeight: 30, color: 'white'}}>Name : {name}</Text>
            <Text style={{lineHeight: 30, color: 'white'}}>Description :</Text>
            <TouchableOpacity
              onPress={() => {
                if (clickFollow) {
                  navigateFollowers();
                }
              }}>
              <Text style={{lineHeight: 30, color: 'white'}}>
                Followers Count: {followersCount}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (clickFollow) {
                  navigateFollowings();
                }
              }}>
              <Text style={{lineHeight: 30, color: 'white'}}>
                Followings Count: {followingsCount}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default UserDetails;
