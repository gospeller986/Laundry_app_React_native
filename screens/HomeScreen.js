import {
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import DressItem from "../components/DressItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ProductReducer";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart)
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const navigation = useNavigation();
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "We are Loading Your Location..."
  );
  const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location Services are not Enabled ",
        "Please enable the location Services ",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      setlocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied ",
        "Allow the app to use the Location services  ",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      // console.log(coords)
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      // console.log(response)

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setdisplayCurrentAddress(address);
      }
    }
  };

  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;
    const fetchProducts = () => {
      services.map((service, index) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);

  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "Shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "Dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "Jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "Shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];

  return (
    <>
      <ScrollView
        style={{ backgroundColor: "#e7e7e8", flex: 1, marginTop: 15 }}
      >
        <View
          style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
        >
          <MaterialIcons name="location-on" size={36} color="#fd5c63" />
          <View>
            <Text style={styles.title}>Home</Text>
            <Text>{displayCurrentAddress}</Text>
          </View>

          <Pressable style={{ marginLeft: "auto", marginRight: 9 }}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 20 }}
              source={{
                uri: "https://yt3.ggpht.com/yti/AHXOFjUH1nl7-b4NBmKCXInL-Dz1zHG3C_xMThCa5w3u=s88-c-k-c0x00ffffff-no-rj-mo",
              }}
            />
          </Pressable>
        </View>

        {/*  Search bar */}

        <View
          style={{
            padding: 10,
            margin: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1.0,
            borderColor: "#C0C0C0",
            borderRadius: 7,
          }}
        >
          <TextInput placeholder="Search For Items or More" />
          <Feather name="search" size={24} color="#fd5c63" />
        </View>

        {/* Image  Carousel  */}
        <Carousel />

        {/* services  */}
        <Services />

        {/* Render all the products  */}

        {product.map((item, index) => (
          <DressItem item={item} key={index} />
        ))}
      </ScrollView>
      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            padding: 10,
            marginBottom: 30,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style ={{fontSize:15 , fontWeight:"800" , color: "white" }}>{cart.length} items | ₹ {total} </Text>
            <Text style={{fontSize:13, fontWeight:"400" , color : "white" ,marginVertical :6  }}>Extra Charges might apply </Text>
          </View>
          <Pressable onPress={() => navigation.navigate("PickUp")
         }>
            <Text style ={{fontSize: 17 , fontWeight:"bold" , color : "white"}}>Proceed to PickUp</Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
