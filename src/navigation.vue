<template>
    <root>
        <AppNavigation />
    </root>
 
</template>

<script>
import HomeScreen from "@/screens/HomeScreen";
import MeetupDetailScreen from '@/screens/MeetupDetailScreen';
import Screen1 from "@/screens/Screen1";
import Screen2 from "@/screens/Screen2";
import Screen3 from "@/screens/Screen3";

import { Root } from "native-base";

import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Meetup: MeetupDetailScreen,
    ScreenOne: Screen1
    
  },
  {
    initialRouteName:'Home'
  }
)

const SomeStack1 = createStackNavigator({
    Screen2
}, {
    headerMode:'none',
    navigationOptions: {
        headerVisible: false
    }
})

const SomeStack2 = createStackNavigator({
    Screen3
}, {
    headerMode:'none',
    navigationOptions: {
        headerVisible: false
    }
})

const DrawerNavigation = createDrawerNavigator({
    DrawerStack1: SomeStack1,
    DrawerStack2: SomeStack2
    
})

const TabNavigation = createBottomTabNavigator({
    Meetups: HomeStack,
    Other: DrawerNavigation

})
const AppNavigation = createAppContainer(TabNavigation)

export default {
  components: {
    AppNavigation, Root
  },
};
</script>

