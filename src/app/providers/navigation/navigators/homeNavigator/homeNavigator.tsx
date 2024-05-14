import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Settings } from '@/screens/home/Settings';
import { Main } from '@/screens/home/Main';
import { Icon } from '@/shared/ui/Icon';
import { HomeNavigatorTabParamList } from '@/shared/providers/navigation';
import { useTheme } from '@/shared/lib/hooks/useTheme';

const Tab = createBottomTabNavigator<HomeNavigatorTabParamList>();

export const HomeNavigator = () => {
  const { theme } = useTheme()
  return (
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
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.primaryLight,
        headerShown: false
      })}
    >
    <Tab.Screen name="Home" component={Main} />
    <Tab.Screen name="Settings" component={Settings} initialParams={{userId: '1000'}} />
  </Tab.Navigator>
  )
} 
