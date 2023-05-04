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
        const token = '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';
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await fetch(
          `https://api.github.com/users/${username}`,
          {headers},
        );
        console.log('respome-->', response);
        if (response.status === 200) {
          console.log('inside success');
          const data = await response.json();
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
        // setIsLoading(false);
        // setUserData(JSON.stringify(data));
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
    !loginName &&
    !profileImg &&
    !name &&
    !followersCount &&
    !followingsCount
  ) {
    return (
      <NoUsersCard marginTop={20} title={'No user Details Found'}></NoUsersCard>
    );
  }

  return (
    <View>
      {isLoading && (
        <View style={{paddingTop: 40}}>
          <ActivityIndicator size="large" />
        </View>
      )}
      {/* <Text>{JSON.stringify(userData) + ' ---'}</Text> */}
      {/* <Text>{userData.name}</Text>
      <Text>{userData.bio}</Text>
      <Text>{userData.location}</Text> */}
      {!isLoading && loginName !== '' ? (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 20,
            alignItems: 'center',
            borderWidth: 2,
            borderColor: 'red',
            borderRadius: 20,
            padding: 20,
            elevation: 5,
            backgroundColor: 'rgba(0, 0, 0, 1)',
          }}>
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
