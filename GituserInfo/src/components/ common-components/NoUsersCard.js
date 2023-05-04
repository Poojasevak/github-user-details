import {View, Text, Image} from 'react-native';
import React from 'react';
import {defineIcon} from '../../assets/svg';

const NoUsersCard = ({title, marginTop}) => {
  return (
    <View
      style={{
        marginTop: marginTop,
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
      }}>
      <View style={{padding: 20}}>{defineIcon('search', 50, 50)}</View>
      <Text style={{color: 'white', fontSize: 16, lineHeight: 20}}>
        {title}
      </Text>
      <Text style={{color: 'white', fontSize: 12, lineHeight: 20}}>
        Try with diff username
      </Text>
    </View>
  );
};

export default NoUsersCard;
