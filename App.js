// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from './components/Login';
// import Login from './components/Register;
// import Home from './components/Home';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Register" component={Register} />
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Product from "./components/Product";
 import Cart from "./components/Cart.js";
 import Thankyou from "./components/Thankyou";


function App() {
  return (
    <View style={styles.view}>
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <Cart/> */}
      {/* <Thankyou/> */}
      <Product/>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: "100%"
  }
});

export default App;