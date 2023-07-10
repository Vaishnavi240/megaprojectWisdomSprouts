import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView
} from "react-native";

function Thankyou() {
  const handleButtonPress = () => {
    console.log("Done button pressed");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../images/fthankyou.png")} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#B54756"
    
  },
  image: {
    resizeMode: "contain",
    width: 320,
    height: 320,
    alignSelf: "center",
    margin: 40,
    borderTopLeftRadius: 90,
    borderBottomRightRadius: 90,
    borderWidth: 12,
    borderStyle: "double",
    borderColor: "black"
  },
  button: {
    marginTop: 1,
    width: 200,
    backgroundColor: "blue",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  }
});

export default Thankyou;