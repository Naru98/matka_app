import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import COLORS from '../constants/colors';
import { Games, Bids, Wallet, Account } from './Home/index';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName;

        if (route.name === 'Games') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Bids') {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === 'Wallet') {
          iconName = focused ? 'wallet' : 'wallet-outline';
        } else if (route.name === 'Account') {
          iconName = focused ? 'person' : 'person-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={23} color={color} />;
      },
      tabBarStyle: {
        height: 65,
        paddingBottom: 5,
        paddingTop: 5
      },
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: 'gray',
      tabBarLabelStyle: {
        fontSize: 14,
        marginBottom: 5
      },
    })}>
      <Tab.Screen name="Games" component={Games}  />
      <Tab.Screen name="Bids" component={Bids} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}