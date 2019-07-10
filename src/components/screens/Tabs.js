import React from 'react';
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchScreen from '../screens/SearchScreen';
import ProcessesScreen from '../screens/ProcessesScreen';
import PricesScreen from './PricesScreen';
import NewProcessScreen from '../screens/NewProcessScreen';
import NewProcessScreenPart2 from '../screens/NewProcessScreenPart2';
import SettingsScreen from '../screens/SettingsScreen';
import NewProcessScreenPart3 from './NewProcessScreenPart3';
const ProcessesStack = createStackNavigator({
    ShowProcesses: {
        screen: ProcessesScreen,
    }
});

const SearchStack = createStackNavigator({
    Search: {
        screen: SearchScreen,
    }
});

const NewProcessStack = createStackNavigator({
    NewProcess: {
        screen: NewProcessScreen,
    },
    Part2:{
        screen: NewProcessScreenPart2
    },
    Part3:{
        screen: NewProcessScreenPart3
    },
});

const PricesStack = createStackNavigator({
    Prices: {
        screen: PricesScreen,
    }
});

const SettingsStack = createStackNavigator({
    Settings: {
        screen: SettingsScreen,
    }
});

const TabsStack = createBottomTabNavigator({
    Processes:{
        screen: ProcessesStack,
    },
    // Search:{
    //     screen: SearchStack,
    // },
    NewProcess:{
        screen: NewProcessStack,
    },
    Prices: {
        screen: PricesStack,
    },
    Settings: {
        screen: SettingsStack,
    }
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        // lazy: false,
        resetOnBlur: true,
        tabBarOptions: {
            activeTintColor: 'gray',
            showLabel: false,
            style: {
                backgroundColor: '#ffffff',
                borderBottomColor: '#ffffff',
            },
            resetOnBlur: true,
            lazy: false,
        },
        tabBarLabel: null,
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            // let IconComponent = Ionicons;
            let iconName;
            let labelName;
            if (routeName === 'Search') {
                iconName = `search`;
                labelName = 'Pesquisa';
            } else if (routeName === 'Processes') {
                iconName = `stream`;
                labelName = 'Prestador';
            } else if (routeName === 'NewProcess') {
                iconName = `plus`;
                labelName = 'Novo Serviço';
            }else if (routeName === 'Prices') {
                iconName = `user-alt`;
                labelName = 'Cliente';
            }else if (routeName === 'Settings') {
                labelName = 'Sobre';
                iconName = `address-card`;
            }
            return (
                focused ?
                <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={iconName} size={24} color={'#1758aa'} />
                    <Text style={{ color: '#1758aa', fontSize: 9 }}>{labelName}</Text>
                </View>
                :
                <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={iconName} size={24} color={'#c8c7cc'} />
                    <Text style={{ color: '#c8c7cc', fontSize: 9 }}>{labelName}</Text>
                </View>
            );
        },
        tabBarSelectedItemStyle: {
            borderBottomWidth: 2,
            borderBottomColor: 'red',
        },
    }),
});

export default createAppContainer(TabsStack);