import { NavigatorScreenParams } from '@react-navigation/native';

export type HomeNavigatorTabParamList = {
  Home: NavigatorScreenParams<undefined>;
  Settings: { userId: string };
};

