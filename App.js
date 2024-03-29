import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "welcome"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.Input}
          placeholderTextColor="#2C3335"
          placeholder="Enter Value here ..."
          onChangeText={text => {
            this.setState({ text });
          }}
        />
        <Text
          style={{
            marginTop: 60,
            fontSize: 25
          }}
        >
          {this.state.text.split(" ").map(text => text && " 🗣️️")}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  Input: {
    marginTop: 40,
    height: 50,
    width: 200,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: "#23abab"
  }
});
