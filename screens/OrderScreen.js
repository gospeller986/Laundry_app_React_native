import { StyleSheet, Text, View, SafeAreaView, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import img from "../assets/1.gif"
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => { 
    const navigation = useNavigation();
  return (
    <SafeAreaView>

      <Image style={{
        height : 360,
        width : 300 ,
        marginLeft : 49,
        marginTop : 80
      }} source={img}/>
      <Text
        style={{
          marginTop: 40,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your order has been placed
      </Text> 

      <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={{marginTop:40 , marginLeft: 80 ,padding:5 , backgroundColor: "#00AB66" , borderRadius :10, marginRight: 80,paddingVertical: 20 }}>
        <Text style={{textAlign: "center" , fontSize: 18 ,fontWeight:"bold" ,color : "white"}}>
            Continue 
        </Text>
      </TouchableOpacity>


    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
