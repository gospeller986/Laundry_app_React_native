import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../Firebase'
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => { 
    const user = auth.currentUser ;
    const navigation = useNavigation() ;
    const signOutUser =() => {
        signOut(auth).then(()=> {
            navigation.replace("Login");
        }).catch( err => {
            console.log(err);
        })
    }
  return (
    <View style={{flex :1 , justifyContent :"center" , alignItems : "center" }}>
      <TouchableOpacity style={{marginVertical:10}}>
        <Text>Welcome {"   "} {user.email} </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signOutUser} >
        <Text>
            Sign Out 
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})