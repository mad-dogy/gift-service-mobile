import { HomeNavigatorTabParamList } from "@/shared/providers/navigation";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Button, StyleSheet, Text, View } from "react-native";

type Props = BottomTabScreenProps<HomeNavigatorTabParamList, 'Home'>

export const Main = (props: Props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings", {userId: (Math.random() * 100).toFixed()})}
      />

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