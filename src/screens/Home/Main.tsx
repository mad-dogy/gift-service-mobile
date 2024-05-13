import { Button, StyleSheet, Text, View } from "react-native";

export const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
          otherParam: 'from details screen'
        })}
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