import React,{useState} from "react";
import { View,Text, SafeAreaView ,Image,TouchableOpacity} from "react-native";
import styles from "./styles/styles";
import { Input } from 'react-native-elements';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen';


const LoginScreen=({navigation})=>{
    const [number,setNumber]=useState("");
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topcontainer}>
                <Image style={styles.logo} source={require('../../assets/images/careeerkicklogo.png')} resizeMode="contain"/>
                <Text style={styles.titletext}>CAREERKICK</Text>
            </View>
            <View style={styles.bottomcontainer}>
                    <Input
                        value={number}
                        onChangeText={(text)=>setNumber(text)}
                        maxLength={10}
                        placeholder="Enter Your Mobile Number"
                        leftIcon={<MaterialIcon name="smartphone" size={hp(3)} color="#000000"/>}
                        inputContainerStyle={{
                            height:hp(6),
                            width:wp(90),
                            borderRadius:hp(2),
                            marginTop:hp(1),
                            paddingLeft:wp(3),
                            borderBottomWidth:0,
                        }}
                        containerStyle={{
                            alignSelf:'center',
                            alignItems:'center',
                            shadowColor:"#AEAEC0",
                            shadowOpacity:0.9,
                            shadowRadius:wp(1),
                            shadowOffset:{
                                height:hp(0.2),
                                width:wp(0.5)
                            },
                            backgroundColor:"#f0f0f3",
                            width:wp(85),
                            height:hp(8),
                            borderRadius:hp(1)
                        }}
                        inputStyle={{
                            color:"#000000",
                            fontSize:wp(3.5),
                        }}
                    />
                <TouchableOpacity onPress={()=>navigation.navigate("otp",{'number':number})}>
                    <View style={styles.item}>
                        <Text style={styles.btn}>CONTINUE</Text>
                    </View>
                </TouchableOpacity>
                <View style={{alignItems:'center' ,flexDirection:'row',justifyContent:'center'}}>
                    <Text style={[styles.bottomtext]}>Already have account ?</Text>
                    <Text style={{color:"#56CB01",fontSize:hp(2)}}> Login</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;