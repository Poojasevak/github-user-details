import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import NoUsersCard from '../ common-components/NoUsersCard';
import UserListItem from './UserListItem';

const FollowersList = ({users, navigate}) => {
  const [userList, setuserList] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  const handlePress = item => {
    navigate.navigate('UserProfile', {
      username: item.login,
    });
    setSelectedItem(item);
  };

  useEffect(() => {
    setuserList(users);
  }, [users]);

  const listEmptyComponent = () => {
    return (
      <View>
        <Text>No Data</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      {users.length > 0 ? (
        <FlatList
          data={userList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handlePress(item)}
              style={{
                paddingVertical: 16,
                //   backgroundColor: item === selectedItem ? 'gray' : 'white',
              }}>
              <UserListItem
                followers={item.followers}
                followings={item.following}
                profileImg={item.avatar_url}
                username={item.login}
              />
            </TouchableOpacity>
          )}
          // keyExtractor={item => item.id}
        />
      ) : (
        <NoUsersCard title={'No Users Found'} />
      )}
    </View>
  );
};

export default FollowersList;
