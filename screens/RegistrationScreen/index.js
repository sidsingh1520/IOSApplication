import React,{useState} from "react";
import { View,Text, SafeAreaView ,Image,TouchableOpacity} from "react-native";
import { Input } from 'react-native-elements';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from '../RegistrationScreen/styles/styles';
import RadioButton from "../../components/RadioButtons/RadioButton";
import instance from "../../api/connection";
import axios from "axios";

const RegistrationScreen=({navigation,route})=>{
    const phone=route.params.phone;

    data = [
        {
            label: 'Male',
            value: 'Male'
        },
        {
            label: 'Female',
            value: 'Female'
        },
        {
            label: 'Others',
            value: 'Others'
        }
    ]
    const [radio,setRadio]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    handleRadioButton = (value) => {
        setRadio(value)
    }
    const Signup = async () => {
        const data={
            phone: phone,
            name: name,
            email: email,
            gender:radio,
        };
        console.log(JSON.stringify(data));
        try {
            const resp = await instance.post('/student',  data )
            .then(()=>navigation.navigate("Thank",{"phone":phone}))
        } catch (err) {
            console.log(err);
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topcontainer}>
                <Image style={styles.logo} source={require('../../assets/images/careeerkicklogo.png')} resizeMode="contain"/>
            </View>
            <View style={styles.bottomcontainer}>
                    <Input
                        label="Full Name"
                        labelStyle={{color:"#000000",marginBottom:hp(1),fontWeight:"400",fontSize:hp(2)}}
                        value={name}
                        autoCorrect={false}
                        onChangeText={(text)=>setName(text)}
                        placeholder="Enter Your Full Name"
                        inputContainerStyle={{
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
                            height:hp(7),
                            borderRadius:hp(1),
                            paddingLeft:hp(2)
                        }}
                        containerStyle={{width:wp(85),alignSelf:'center'}}
                        inputStyle={{
                            color:"#000000",
                            fontSize:wp(3.5),
                        }}
                    />
                    <Input
                        label="Email"
                        labelStyle={{color:"#000000",marginBottom:hp(1),fontWeight:"400",fontSize:hp(2)}}
                        value={email}
                        autoCorrect={false}
                        onChangeText={(text)=>setEmail(text)}
                        placeholder="Enter Your Email"
                        inputContainerStyle={{
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
                            height:hp(7),
                            borderRadius:hp(1),
                            paddingLeft:hp(2)
                        }}
                        containerStyle={{width:wp(85),alignSelf:'center'}}
                        inputStyle={{
                            color:"#000000",
                            fontSize:wp(3.5),
                        }}
                    />
                    <View style={{alignItems:'center'}}>
                        <RadioButton data={data} onSelect={handleRadioButton} styling={{ color: '#56CB01', size: hp(3.2) }}/>
                    </View>
                <TouchableOpacity
                    onPress={()=>{
                        Signup()
                    }}
                >
                    <View style={styles.item}>
                        <Text style={styles.btn}>CONTINUE</Text>
                    </View>
                </TouchableOpacity>
                {/* <View style={{alignItems:'center' ,flexDirection:'row',justifyContent:'center'}}>
                    <Text style={[styles.bottomtext]}>Already have account ?</Text>
                    <Text style={{color:"#56CB01",fontSize:hp(2)}}> Login</Text>
                </View> */}
            </View>
        </SafeAreaView>
    )
}

export default RegistrationScreen;