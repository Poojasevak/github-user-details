import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {Searchbar} from 'react-native-paper';
import {defineIcon} from './src/assets/svg/index';
import HomeScreen from './src/screens/HomeScreen';
import FollowersScreen from './src/screens/FollowersScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: 'purple',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Follower"
            component={FollowersScreen}
            options={{
              headerStyle: {
                backgroundColor: 'purple',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
            options={{
              headerStyle: {
                backgroundColor: 'purple',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
