import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const Cart= () => {
  const cartItems = [
    {
      id: 1,
      title: "RED LONG DRESS",
      price: "10000",
      image: require("../images/image3.jpg"),
      quantity: 2
    },
    {
      id: 2,
      title: "HELLS",
      price: "1000",
      image: require("../images/image2.jpg"),
      quantity: 1
    },
    {
      id: 3,
      title: "NECKLACE",
      price: "5000",
      image: require("../images/image4.jpg"),
      quantity: 1
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>Name :{item.title}</Text>
        <Text style={styles.productPrice}>Price: {item.price}</Text>
        <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const itemPrice = parseFloat(item.price) * item.quantity;
      total += itemPrice;
    });
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CART</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: {calculateTotal()}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "black"
  },
  heading: {
    fontFamily:"fantasy",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color:"black"
    
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    color: "grey"
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5
  },
  productDetails: {
    flex: 1
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "gray"
  },
  productPrice: {
    fontSize: 14,
    marginBottom: 5,
    color: "gray"
  },
  productQuantity: {
    fontSize: 14,
    color: "gray"
  },
  totalContainer: {
    marginTop: 20,
    alignItems: "center"
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily:"fantasy"
  },
  checkoutButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default Cart;