import React,{useState,useEffect} from 'react';
import {ToastAndroid, View,Text,Image,Dimensions, KeyboardAvoidingView,Platform,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from '../OtpScreen/styles/styles';
import auth from '@react-native-firebase/auth';

const otp=({navigation,route})=>{
    const number  = route.params.number;
    const [otp,setOtp]=useState('');

    useEffect(() => {
        signInWithPhoneNumber();
    }, []);

    async function signInWithPhoneNumber() {
        try {
            const confirmation = await auth().signInWithPhoneNumber(number);
            setConfirm(confirmation);
        } catch (e) {
            alert(JSON.stringify(e));
            console.log(e);
        }
    }

    async function confirmCode() {
        try {
            const pass = otp;
            const response = await confirm.confirm(pass);
            if (response) {
                console.log(response);
                //connection code===================================
                const data = { phone: response.user._user.phoneNumber };
                console.log(JSON.stringify(data));
                //try {
                //    const resp = await connectionApi.post('/signup',  data );
                //    console.log(resp.data);
                //} catch (err) {
                //    console.log(err);
                //}
                //===================================================
                navigation.navigate('Thank',{'phone':response.user._user.phoneNumber });
            }
        } catch (e) {
            alert(JSON.stringify(e));
            console.log(e)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Code has been sent to {number}</Text>
            <OTPInputView
                style={{width: '88%', height:120}}
                keyboardType="number-pad"
                pinCount={6}
                code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                onCodeChanged = {code => { setOtp(code)}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code) => {setOtp(code)}}
            />
            <Text style={[styles.text,{opacity:0.4}]}>Didn’t receive code? Resend again</Text>
            <TouchableOpacity onPress={()=>confirmCode()} style={{marginTop:hp(5)}}>
                <View style={styles.item}>
                    <Text style={styles.btn}>Verify</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default otp;