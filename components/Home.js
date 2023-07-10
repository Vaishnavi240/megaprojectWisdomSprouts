import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button
} from "react-native";

function Home() {
  let myObj = [
    {
      id: 1,
      image: require("../images/image5.jpg"),
      title: "PERFUME",
      price: "₹ 2000"
    },
    {
      id: 2,
      image: require("../images/image3.jpg"),
      title: "RED LONG DRESS",
      price: "₹ 10000"
    },
    {
      id: 3,
      image: require("../images/image2.jpg"),
      title: "HELLS",
      price: "₹ 1000"
    },
    {
      id: 4,
      image: require("../images/image4.jpg"),
      title: "NECKLACE",
      price: "₹ 5000"
    },
    {
      id: 5,
      image: require("../images/Cimage.jpg"),
      title: "MAXI DRESS",
      price: "₹ 2000"
    },
    {
      id: 6,
      image: require("../images/image6.jpg"),
      title: "SNEAKERS",
      price: "₹ 3000"
    }
  ];

  const handleAddToCart = (productId) => {
    console.log(`Product added to cart`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Fashion Destination🛍️</Text>
        <TouchableOpacity>
          <Image source={require("../images/search.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../images/like.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../images/cart.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.productContainer}>
        {myObj.map((data) => (
          <TouchableOpacity key={data.id} style={styles.productItem}>
            <Image source={data.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{data.title}</Text>
            <Text style={styles.productPrice}>{data.price}</Text>
            <Button
              title="Add to Cart"
              onPress={() => handleAddToCart(data.id)}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Image source={require("../images/home.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../images/notificaton.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../images/account.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "orange"
  },
  title: {
    height: 40,
    width: 100,
    fontWeight: "bold"
  },
  icon: {
    height: 24,
    width: 24,
    marginLeft: 60
  },
  categoryContainer: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 8
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    marginRight: 12
  },
  categoryText: {
    fontSize: 16,
    color: "black"
  },
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 16
  },
  productItem: {
    width: "48%",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#e6faff",
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: '#69F508',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4
  },
  productImage: {
    width: "100%",
    height: 210,
    borderRadius: 2
  },
  productTitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "bold"
  },
  productPrice: {
    marginTop: 4,
    fontSize: 14,
    color: "black",
    fontWeight: "bold"
  },
  button: {
    borderRadius: 20
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "orange"
  }
});

export default Home;
