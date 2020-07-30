import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import Home from './pages/Home';
import Profile from './pages/Profile';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#388E3C',
    card: '#388E3C',
  },
};

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    backgroundColor: '#388E3C',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 30,
    maxHeight: 90,
  },
  statusBarText: {
    color: '#fff',
    fontSize: 24,
    paddingLeft: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

const App: React.FC = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <View style={styles.statusBar}>
        <Text style={styles.statusBarText}>LeafLife</Text>
        <StatusBar style="light" />
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: '#C8E6C9',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
