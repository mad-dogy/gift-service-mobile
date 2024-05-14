import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";

import { HomeNavigatorTabParamList } from "@/shared/providers/navigation";

type Props = BottomTabScreenProps<HomeNavigatorTabParamList, 'Settings'>

export const Settings = (props: Props) => {
  const { navigation, route } = props;
  const { params } = route

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Text>{params.userId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});