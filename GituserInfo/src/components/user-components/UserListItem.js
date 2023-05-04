import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  userListItem: {
    borderWidth: 2,
    borderColor: Colors.BLACK,
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.PRIMARY,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: Colors.WHITE,
  },
});

const UserListItem = ({profileImg, username, followers, following}) => {
  return (
    <View style={styles.userListItem}>
      {profileImg ? (
        <Image
          style={{
            width: 80,
            height: 80,
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
      <Text style={{paddingLeft: 20, color: Colors.WHITE}}>{username}</Text>
    </View>
  );
};

export default UserListItem;
