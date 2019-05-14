import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './components/HomeScreen'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);