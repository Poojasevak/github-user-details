import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

const ConfirmExitModal = ({visible, onCancel, onConfirm}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}>
        <View style={{backgroundColor: 'white', padding: 20, borderRadius: 8}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
            Confirm Exit
          </Text>
          <Text style={{marginBottom: 20}}>
            Are you sure you want to exit the app?
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={onCancel}
              style={{
                backgroundColor: 'lightgrey',
                padding: 10,
                marginRight: 10,
              }}>
              <Text style={{color: 'black'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              style={{backgroundColor: 'red', padding: 10}}>
              <Text style={{color: 'white'}}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmExitModal;
