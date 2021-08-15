import React,{useState} from 'react';
import {ToastAndroid, View,Text,Image,Dimensions, KeyboardAvoidingView,Platform,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from '../OtpScreen/styles/styles';


const otp=({navigation,route})=>{
    const number  = route.params.number;
    const [otp,setOtp]=useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Code has been sent to +91{number}</Text>
            <OTPInputView
                style={{width: '70%', height:120}}
                keyboardType="number-pad"
                pinCount={4}
                code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                onCodeChanged = {code => { setOtp(code)}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code) => {setOtp(code)}}
            />
            <Text style={[styles.text,{opacity:0.4}]}>Didn’t receive code? Resend again</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Thank")} style={{marginTop:hp(5)}}>
                <View style={styles.item}>
                    <Text style={styles.btn}>Verify</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default otp;