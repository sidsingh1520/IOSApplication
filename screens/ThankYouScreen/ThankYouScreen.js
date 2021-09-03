import React from 'react';
import {View,Text,Image,Dimensions, KeyboardAvoidingView,Platform,TextInput,ScrollView,TouchableOpacity,SafeAreaView} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styles from '../ThankYouScreen/styles/styles';

const ThankYouScreen=({navigation,route})=>{
    const phone=route.params.phone;
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topcontainer}>
                <Image style={styles.logo} source={require("../../assets/images/ty.png")} resizeMode="contain"/>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.txt}>Your account has been verified successfully !</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Select",{'phone':phone })} style={{marginTop:hp(5)}}>
                    <View style={styles.item}>
                        <Text style={styles.btn}>Done</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.third}>
                    <Text style={styles.txt}>By continuing you agree to the </Text>
                    <Text style={[styles.txt,{color:"#56CB01"}]}>Terms of services {<Text style={{color:"#000000"}}>and</Text>} Privacy policy</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ThankYouScreen;