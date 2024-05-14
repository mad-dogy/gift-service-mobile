import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Settings } from '@/screens/home/Settings';
import { Main } from '@/screens/home/Main';
import { Icon } from '@/shared/ui/Icon';
import { HomeNavigatorTabParamList } from '@/shared/navigation';

const Tab = createBottomTabNavigator<HomeNavigatorTabParamList>();

export const HomeNavigator = () => (
  <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if(route.name === 'Home') {
            return <Icon name='home' size={size} color={color} />
          }

          if(route.name === 'Settings') {
            return <Icon name='settings' size={size} color={color} />
          }
        },
        tabBarActiveTintColor: '#63629b',
        tabBarInactiveTintColor: '#5D617B',
        headerShown: false
      })}
    >
    <Tab.Screen name="Home" component={Main} />
    <Tab.Screen name="Settings" component={Settings} initialParams={{userId: '10000'}} />
  </Tab.Navigator>
)
