import {View, Text, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {defineIcon} from '../../assets/svg';

const NoUsersCard = ({title, marginTop}) => {
  return (
    <View
      style={{
        marginTop: marginTop,
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
      }}>
      {/* <Icon name="camera" size={30} color="#900" /> */}
      <View>{defineIcon('lock')}</View>
      <Text style={{color: 'white', fontSize: 16}}>{title}</Text>
    </View>
  );
};

export default NoUsersCard;
