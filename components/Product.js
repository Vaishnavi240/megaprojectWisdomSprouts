import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const Product = () => {
  const product = {
    name: "Red Onepiece",
    price: "₹10,000",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "U&F Women Gorgeous Red Solid Swirling Volume Dress"
  };

  const handleAddToCart = () => {
    
  };

  const handleBuyNow = () => {
    
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../images/image3.jpg")} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Price: {product.price}</Text>
        <Text style={styles.size}>
          Size: {product.size.join(", ")}
        </Text>
      </View>
      <Text style={styles.email}>Contact us: example@example.com</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleAddToCart} style={styles.button}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBuyNow} style={styles.button}>
          <Text style={styles.buttonText}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#000033",
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  imageContainer: {
    borderWidth: 4,
    borderColor: "#134d00",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 290,
    resizeMode: "cover",
  },
  detailsContainer: {
    flex: 1,
    color: "white"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white"
  },
  price: {
    fontSize: 18,
    marginBottom: 8,
    color: "white"
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: "white",
    paddingTop: 9
  },
  email: {
    fontSize: 16,
    color: "#8080ff",
    textDecorationLine: "underline",
    marginBottom: 16
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 4,
    paddingVertical: 8,
    marginHorizontal: 8,
    marginBottom:10
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  size: {
    fontSize: 17,
    color: "white",
    paddingTop: 1
  }
});

export default Product;
