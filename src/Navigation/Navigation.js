import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../Screens/Home/Home";
import Chat from "../Screens/Chat/Chat";
import Profile from "../Screens/Profile/Profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Color from "../../common/Color";
import { useTheme } from "react-native-paper";
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export default RootNav = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = Color.white;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Color.green}
      inactiveColor={Color.white}
      barStyle={{
        backgroundColor: Color.black,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
