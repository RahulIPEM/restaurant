import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from './src/screens/SearchScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';

const Navigator = createStackNavigator(
  {
    SearchScreen,
    RestaurantScreen
  },
  {
    initialRouteName: "SearchScreen",
    defaultNavigationOptions: {
      title: 'Restaurant Search'
    }
  }
)

export default createAppContainer(Navigator);