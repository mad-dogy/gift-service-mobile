import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main } from './Main';
import { Settings } from './Settings';
import { Icon } from '@/shared/ui/Icon';

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if(route.name === 'Main' && focused) {
              return <Icon name='home' size={size} color={color} />
            }

            if(route.name === 'Main' && !focused) {
              return <Icon name='homeOutline' size={size} color={color} />
            }

            if(route.name === 'Settings' && focused) {
              return <Icon name='settings' size={size} color={color} />
            }

            if(route.name === 'Settings' && !focused) {
              return <Icon name='settingsOutline' size={size} color={color} />
            }
          },
          tabBarActiveTintColor: '#63629b',
          tabBarInactiveTintColor: '#5D617B',
          headerShown: false
        })}
      >
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
