// import React, { useState } from "react";
// import {
//   View,
//   ScrollView,
//   Button,
//   Text,
//   Image,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Dimensions,
//   ImageBackground,
//   Modal,
// } from "react-native";

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorText, setErrorText] = useState("");
//   const [selectedEmail, setSelectedEmail] = useState("admin@admin.com");
//   const [selectedPassword, setSelectedPassword] = useState("admin");
//   const [loginSuccessful, setLoginSuccessful] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);

//   const signup = () => {
//     console.log("Sign Up pressed");
//   };

//   const checkLogin = () => {
//     setErrorText("");
//     setLoginSuccessful(false);
//     console.log("checkLogin clicked");
//     if (password.length === 0) {
//       setErrorText("Please Enter A Password");
//     } else if (email.length === 0) {
//       setErrorText("Please Enter An Email");
//     } else if (password !== selectedPassword) {
//       setErrorText("Please Enter Correct Password");
//     } else if (email !== selectedEmail) {
//       setErrorText("Please Enter Correct Email ID");
//     } else {
//       setLoginSuccessful(true);
//     }
//   };

//   const openModal = () => {
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Image style={styles.backgroundImage} source={require("../images/backg1.jpg")} />
//       <View style={styles.mainView}>
//         <Image style={styles.logo} source={require("../images/ilogo.png")} />
//         <Text style={styles.myLogo}>Fashion Destination</Text>
//       </View>
//       <View style={styles.mainView}>
//         <Text style={styles.label}>Email ID</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={setEmail}
//           value={email}
//           placeholder="Enter Email ID"
//           keyboardType="email-address"
//         />
//       </View>

//       <View style={styles.mainView}>
//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={setPassword}
//           value={password}
//           placeholder="Enter Password"
//           secureTextEntry={true}
//         />
//       </View>

//       {errorText.length > 0 && (
//         <View style={styles.errorView}>
//           <Text style={styles.errorText}>{errorText}</Text>
//         </View>
//       )}

//       {loginSuccessful && (
//         <View style={styles.successView}>
//           <Text style={styles.successText}>Login successful</Text>
//         </View>
//       )}

//       <View style={styles.mainView}>
//         <TouchableOpacity onPress={checkLogin} style={styles.loginButton}>
//           <Text style={styles.loginButtonText}>Login</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.signupView}>
//         <Text style={styles.signupText}>Already have an account?</Text>
//         <TouchableOpacity onPress={openModal} style={styles.signupButton}>
//           <Text style={styles.signupButtonText}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={closeModal}
//       >
//         <ScrollViewView style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <ImageBackground
//               source={require("../images/backg1.jpg")}
//               style={{
//                 flex: 1,
//                 resizeMode: "cover",
//               }}
//             >
//               <View style={{ flex: 1, justifyContent: "center" }}>
//                 <Text style={{ fontSize: 40, alignSelf: "center", fontWeight: "bold", fontFamily: "fantasy", marginBottom: 20 }}>
//                   Sign Up
//                 </Text>
//                 <Text
//                   style={{
//                     padding: 10,
//                     fontSize: 20,
//                     marginLeft: 20,
//                     marginTop: 50,
//                     color: "black",
//                     fontWeight: "bold",
//                     fontFamily: "cursive",
//                   }}
//                 >
//                   Enter your Name:
//                 </Text>
//                 <TextInput
//                   style={{
//                     borderWidth: 3,
//                     height: 45,
//                     width: 240,
//                     marginLeft: 20,
//                     borderColor: "black",
//                     color: "black",
//                     backgroundColor: "#D6EAF8",
//                     borderRadius: 20,
//                     fontWeight: "bold",
//                   }}
//                 />
//                 <Text
//                   style={{
//                     padding: 10,
//                     fontSize: 20,
//                     marginLeft: 10,
//                     marginTop: 15,
//                     color: "black",
//                     fontWeight: "bold",
//                     fontFamily: "cursive",
//                   }}
//                 >
//                   Enter your E-mail:
//                 </Text>
//                 <TextInput
//                   style={{
//                     borderWidth: 3,
//                     height: 45,
//                     width: 240,
//                     marginLeft: 20,
//                     borderColor: "black",
//                     color: "black",
//                     backgroundColor: "#D6EAF8",
//                     borderRadius: 20,
//                     fontWeight: "bold",
//                   }}
//                 />
//                 <Text
//                   style={{
//                     padding: 10,
//                     fontSize: 20,
//                     marginLeft: 10,
//                     color: "black",
//                     fontWeight: "bold",
//                     fontFamily: "cursive",
//                   }}
//                 >
//                   Enter your Password:
//                 </Text>
//                 <TextInput
//                   style={{
//                     borderWidth: 3,
//                     height: 45,
//                     width: 240,
//                     marginLeft: 20,
//                     borderColor: "black",
//                     color: "black",
//                     backgroundColor: "#D6EAF8",
//                     borderRadius: 20,
//                     fontWeight: "bold",
//                   }}
//                   secureTextEntry={true}
//                 />
//                 <Text
//                   style={{
//                     padding: 10,
//                     fontSize: 20,
//                     marginLeft: 10,
//                     color: "black",
//                     fontWeight: "bold",
//                     fontFamily: "cursive",
//                   }}
//                 >
//                   Confirm your Password:
//                 </Text>
//                 <TextInput
//                   style={{
//                     borderWidth: 3,
//                     height: 45,
//                     width: 240,
//                     marginLeft: 20,
//                     borderColor: "black",
//                     color: "black",
//                     backgroundColor: "#D6EAF8",
//                     borderRadius: 20,
//                     fontWeight: "bold",
//                   }}
//                   secureTextEntry={true}
//                 />
//               </View>
//               <View style={{ width: 200, alignSelf: "center", marginBottom: 40, marginTop: 20 }}>
//                 <Button title="Sign Up" onPress={signup} />
//               </View>
//             </ImageBackground>
//           </View>
//           <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
//             <Text style={styles.closeButtonText}>Close</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </Modal>
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff0b3",
//   },
//   backgroundImage: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: windowWidth,
//     height: windowHeight,
//     resizeMode: "cover",
//   },
//   input: {
//     height: 40,
//     width: 280,
//     margin: 9,
//     marginLeft: 15,
//     borderWidth: 2,
//     borderColor: "red",
//     padding: 15,
//     borderRadius: 90,
//     backgroundColor: "black",
//     color: "white",
//   },
//   mainView: {
//     padding: 6,
//     color: "white",
//   },
//   loginButton: {
//     width: 120,
//     alignSelf: "center",
//     alignItems: "center",
//     backgroundColor: "#2A5C99",
//     padding: 10,
//     borderRadius: 10,
//     shadowColor: "black",
//     shadowOffset: { width: 8, height: 6 },
//     shadowOpacity: 0.5,
//     shadowRadius: 2,
//     elevation: 4,
//   },
//   loginButtonText: {
//     color: "white",
//     paddingRight: 20,
//   },
//   logo: {
//     width: 188,
//     height: 157,
//     marginTop: 45,
//     alignSelf: "center",
//     shadowColor: "white",
//     shadowOffset: { width: 6, height: 4 },
//     shadowOpacity: 0.5,
//     shadowRadius: 2,
//   },
//   myLogo: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "black",
//     textAlign: "center",
//     marginTop: 10,
//     fontFamily: "cursive",
//     textShadowColor: "rgba(0, 0, 0, 0.75)",
//     textShadowOffset: { width: 3, height: 8 },
//     textShadowRadius: 6,
//   },
//   errorView: {
//     backgroundColor: "orange",
//     padding: 10,
//     marginLeft: 20,
//     marginRight: 20,
//     borderRadius: 10,
//   },
//   errorText: {
//     color: "black",
//   },
//   successView: {
//     backgroundColor: "green",
//     padding: 10,
//     marginLeft: 70,
//     marginRight: 20,
//     borderRadius: 10,
//     marginBottom: 10,
//     width: 160,
//   },
//   successText: {
//     color: "white",
//     textAlign: "center",
//   },
//   signupView: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   signupText: {
//     color: "black",
//   },
//   signupButton: {
//     backgroundColor: "#2A5C99",
//     paddingVertical: 5,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginLeft: 5,
//     radius: 10,
//   },
//   signupButtonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
//   label: {
//     fontFamily: "fantasy",
//     paddingLeft: 15,
//     marginTop: 1,
//     color: "black",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0,0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   closeButton: {
//     marginTop: 20,
//     backgroundColor: "#2A5C99",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   closeButtonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
// });

// export default Login;

import React, { useState } from "react";
import {
  View,
  ScrollView,
  Button,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Modal,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("admin@admin.com");
  const [selectedPassword, setSelectedPassword] = useState("admin");
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const signup = () => {
    console.log("Sign Up pressed");
  };

  const checkLogin = () => {
    setErrorText("");
    setLoginSuccessful(false);
    console.log("checkLogin clicked");
    if (password.length === 0) {
      setErrorText("Please Enter A Password");
    } else if (email.length === 0) {
      setErrorText("Please Enter An Email");
    } else if (password !== selectedPassword) {
      setErrorText("Please Enter Correct Password");
    } else if (email !== selectedEmail) {
      setErrorText("Please Enter Correct Email ID");
    } else {
      setLoginSuccessful(true);
    }
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../images/backg1.jpg")}
      />
      <View style={styles.mainView}>
        <Image style={styles.logo} source={require("../images/ilogo.png")} />
        <Text style={styles.myLogo}>Fashion Destination</Text>
      </View>
      <View style={styles.mainView}>
        <Text style={styles.label}>Email ID</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter Email ID"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.mainView}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
      </View>

      {errorText.length > 0 && (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}

      {loginSuccessful && (
        <View style={styles.successView}>
          <Text style={styles.successText}>Login successful</Text>
        </View>
      )}

      <View style={styles.mainView}>
        <TouchableOpacity onPress={checkLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupView}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity onPress={openModal} style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <ScrollView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ImageBackground
              source={require("../images/backg1.jpg")}
              style={{
                flex: 1,
                resizeMode: "cover",
              }}
            >
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontSize: 40, alignSelf: "center", fontWeight: "bold", fontFamily: "fantasy", marginBottom: 20 }}>
                  Sign Up
                </Text>
                <Text
                  style={{
                    padding: 10,
                    fontSize: 20,
                    marginLeft: 20,
                    marginTop: 50,
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Enter your Name:
                </Text>
                <TextInput
                  style={styles.modalInput}
                />
                <Text
                  style={{
                    padding: 10,
                    fontSize: 20,
                    marginLeft: 10,
                    marginTop: 15,
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Enter your E-mail:
                </Text>
                <TextInput
                  style={styles.modalInput}
                  keyboardType="email-address"
                />
                <Text
                  style={{
                    padding: 10,
                    fontSize: 20,
                    marginLeft: 10,
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Enter your Password:
                </Text>
                <TextInput
                  style={styles.modalInput}
                  secureTextEntry={true}
                />
                <Text
                  style={{
                    padding: 10,
                    fontSize: 20,
                    marginLeft: 10,
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Confirm your Password:
                </Text>
                <TextInput
                  style={styles.modalInput}
                  secureTextEntry={true}
                />
              </View>
              <View style={{ width: 200, alignSelf: "center", marginBottom: 40, marginTop: 20 }}>
                <Button title="Sign Up" onPress={signup} />
              </View>
            </ImageBackground>
          </View>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0b3",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight,
    resizeMode: "cover",
  },
  input: {
    height: 40,
    width: 280,
    margin: 9,
    marginLeft: 15,
    borderWidth: 2,
    borderColor: "red",
    padding: 15,
    borderRadius: 90,
    backgroundColor: "black",
    color: "white",
  },
  mainView: {
    padding: 6,
    color: "white",
  },
  loginButton: {
    width: 120,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#2A5C99",
    padding: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 8, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
  loginButtonText: {
    color: "white",
    paddingRight: 20,
  },
  logo: {
    width: 188,
    height: 157,
    marginTop: 45,
    alignSelf: "center",
    shadowColor: "white",
    shadowOffset: { width: 6, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  myLogo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "cursive",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 3, height: 8 },
    textShadowRadius: 6,
  },
  errorView: {
    backgroundColor: "orange",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  errorText: {
    color: "black",
  },
  successView: {
    backgroundColor: "green",
    padding: 10,
    marginLeft: 70,
    marginRight: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: 160,
  },
  successText: {
    color: "white",
    textAlign: "center",
  },
  signupView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signupText: {
    color: "black",
  },
  signupButton: {
    backgroundColor: "#2A5C99",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 5,
    radius: 10,
  },
  signupButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  label: {
    fontFamily: "fantasy",
    paddingLeft: 15,
    marginTop: 1,
    color: "black",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#2A5C99",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    marginTop:20
  },
  modalInput: {
    borderWidth: 3,
    height: 45,
    width: 240,
    marginLeft: 20,
    borderColor: "black",
    color: "black",
    backgroundColor: "#D6EAF8",
    borderRadius: 20,
    fontWeight: "bold",
  },
});

export default Login;
