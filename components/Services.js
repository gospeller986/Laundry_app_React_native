import { StyleSheet, Text, View , ScrollView, Pressable , Image } from 'react-native'
import React from 'react'

const Services = () => {
    const services = [
        {
          id: "0",
          image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
          name: "Washing",
        },
        {
          id: "11",
          image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
          name: "Laundry",
        },
        {
          id: "12",
          image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
          name: "Wash & Iron",
        },
        {
          id: "13",
          image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
          name: "Cleaning",
        },
      ];
  return (
    <View style = {{ padding : 10 }}>
       <Text style = {{ fontWeight : "bold" , fontSize : 18 , marginBottom: 7}}>Services Available</Text>
       <ScrollView horizontal showsHorizontalScrollIndicator = {false } >
           {services.map((service , index ) => (
             <Pressable key = {index} style = {{margin : 10 , backgroundColor : "white", padding : 30 , borderRadius : 7 ,shadowColor : '#171717' ,shadowOpacity: 0.8, shadowOffset: {width: -2, height: 4}  }}>
                <Image source={{ uri : service.image }} style = {{width : 70 , height :70 }} />
                <Text style = {{textAlign : "center" , marginTop : 12 , fontWeight : "600"}}>{service.name}</Text>
             </Pressable>
           ))}
       </ScrollView>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({})