import { StyleProp, View, ViewStyle } from 'react-native';
import { useMemo } from 'react';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import { IconType } from '../types/types';

interface IconProps {
  name: IconType;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  accessibilityLabel?: string;
}

export const Icon = (props: IconProps) => {
  const { name, size, color, style, testID, accessibilityLabel } = props;

  const vectorIconsLibProps = useMemo(
    () => ({ size, color, accessibilityLabel }),
    [size, color, accessibilityLabel]
  );

  const svgIconsProps = useMemo(
    () => ({ width: size, height: size, color, accessibilityLabel }),
    [size, color, accessibilityLabel]
  );

  const IconComponent = useMemo(() => {
    switch (name) {
      case 'home':
        return <IoniconsIcons name="home" {...vectorIconsLibProps} />;
      case 'homeOutline':
        return <IoniconsIcons name="home-outline" {...vectorIconsLibProps} />;
      case 'settings':
        return <IoniconsIcons name="settings" {...vectorIconsLibProps} />;
      case 'settingsOutline':
        return <IoniconsIcons name="settings-outline" {...vectorIconsLibProps} />;
      default:
        return <FontAwesomeIcons name="question" {...vectorIconsLibProps} />;
    }
  }, [name, vectorIconsLibProps, svgIconsProps]);

  return (
    <View style={style} testID={testID}>
      {IconComponent}
    </View>
  );
};
