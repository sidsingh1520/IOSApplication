import React,{useState,useEffect} from 'react';
import { ImageBackground } from 'react-native';
import { View,Text,Image,Dimensions, KeyboardAvoidingView,Platform,TextInput,ScrollView,TouchableOpacity,SafeAreaView,BackHandler} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styles from "./styles/styles";

BackHandler.addEventListener('hardwareBackPress', function() {
    Alert.alert(
      'Do you want to Exit the APP?',
      'Are You Sure?', [{
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
      }, {
          text: 'OK',
          onPress: () => BackHandler.exitApp()
      }, ], {
          cancelable: false
      }
   )
   return true;
  })
const selection=({navigation})=>{
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.first}>
                <Image style={styles.img} source={require('../../assets/images/panaselection.png')} />
            </View>
            <View style={styles.second}>
                <View style={styles.divider}></View>
                <Text style={styles.txt}>SELECT YOUR STREAM</Text>
                <View style={[styles.divider,{width:wp(50)}]}></View>
            </View>
            <View style={styles.third}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                        <View style={styles.shadow}>
                            <ImageBackground style={styles.bg} resizeMode="cover" source={require('../../assets/images/Engineering.png')}>
                                <Text style={[styles.txt,styles.shadow,{color:"#ffffff",marginBottom:hp(5)}]}>ENGINEERING</Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>alert("Coming Soon")}>
                        <View style={styles.shadow} >
                            <ImageBackground style={styles.bg} resizeMode="cover" source={require('../../assets/images/Medical.png')}>
                                <Text style={[styles.txt,styles.shadow,{color:"#ffffff",marginBottom:hp(5)}]}>MEDICAL</Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default selection;