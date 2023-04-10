import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView, 
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [loading,setLoading] =useState(false)
  const [password, setPassword] = useState("");
  const navigation = useNavigation(); 
  useEffect(() => {
    setLoading(true)
     const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(!authUser){
            setLoading(false);
        }
        if(authUser){
            navigation.navigate("Home")
        }
     });

     return unsubscribe ;
  }, [])
  

  const login = () => {
     signInWithEmailAndPassword(auth,email,password).then((userCrendential)=> {
        console.log("user Credential",userCrendential )
        const user = userCrendential.user
        console.log("user details",user) 
     })
  }
  
  return (
    <SafeAreaView 
      style={{
        backgroundColor: "#e7e7e8",
        flex: 1,
        marginTop: 15,
        padding: 15,
        alignItems: "center",
      }}
    >
        {loading ? (
            <View style ={{alignItems : "center" ,
             justifyContent :"center",
             flexDirection : "row",
             flex: 1 
            }}>
                <Text style={{marginRight : 10 }}>Loading</Text>
                <ActivityIndicator size= "large" color={"red"} />
            </View>
        ):(
            <KeyboardAvoidingView>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 100,
              }}
            >
              <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}>
                Sign In{" "}
              </Text>
              <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
                Sign In to your Account
              </Text>
            </View>
            <View style={{ marginTop: 50 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={24}
                  color="black"
                />
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholderTextColor="gray"
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "gray",
                    width: 300,
                    marginVertical: 10,
                    marginLeft: 13,
                    fontSize: email ? 18 : 18,
                  }}
                />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="md-key-outline" size={24} color="black" />
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  placeholderTextColor="gray"
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "gray",
                    width: 300,
                    marginVertical: 20,
                    marginLeft: 13,
                    fontSize: password ? 18 : 18,
                  }}
                />
              </View>
    
              <TouchableOpacity
                onPress={login}
                style={{
                  width: 200,
                  backgroundColor: "#318CE7",
                  padding: 15,
                  borderRadius: 8,
                  marginTop: 50,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
                  Login
                </Text>
              </TouchableOpacity>
    
              <TouchableOpacity 
             onPress={() => navigation.navigate("Register")}
              style={{ marginTop: 20 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 17,
                    color: "gray",
                    fontWeight: "500",
                  }}
                >
                  Don't Have an Account ?
                  <Text style={{ color: "#318CE7" }}>Sign Up</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        )}

    </SafeAreaView >
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
