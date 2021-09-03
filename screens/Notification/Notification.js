import React,{useState,useEffect} from 'react';
import { View,Text,Image,Dimensions,SafeAreaView,StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from "react-native-vector-icons/Ionicons";
const Notifications=()=>{
    return(
        <SafeAreaView style={styles.safe}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
          <Image style={{alignSelf:'center'}} resizeMode="cover" source={require("../../assets/images/Careerkick.png")}/>
          <View style={{flexDirection:'row'}}>
            <Ionicons name="ios-notifications-outline" style={{marginRight:20}} size={hp(3.5)}/>
          </View>
        </View>
        <Text style={{alignSelf:'center',marginTop:20,fontWeight:'600'}}>No Notifications</Text>
        </SafeAreaView>
    )
};





const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
})

export default Notifications;