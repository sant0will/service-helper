import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import LoginScreen from './components/screens/LoginScreen';
import Tabs from './components/screens/Tabs';


const MainStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Tabs: {
        screen: Tabs,

    }
},
{
    headerMode: 'none',
}
);

export default createAppContainer(MainStack);