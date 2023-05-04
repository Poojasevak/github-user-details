import {View, Text, Image} from 'react-native';
import React from 'react';

const UserListItem = ({profileImg, username, followers, following}) => {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: '#F7F7F7',
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        elevation: 4,
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
      <Text style={{paddingLeft: 20}}>{username}</Text>
    </View>
  );
};

export default UserListItem;
