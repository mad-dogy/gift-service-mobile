import { Button, Text, View } from "react-native";

export const  Details = ({ route, navigation }) => {
  const { itemId, otherParam, query } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>

      <Text>{itemId}</Text>
      <Text>{otherParam??''}</Text>
      <Text>{query??''}</Text>


      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
          otherParam: 'from details screen'
        })}
      />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />

      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />

      <Button
        title="Go with new param"
        onPress={() => navigation.setParams({
          query: 'someText',
        })}
      />
    </View>
  );
}