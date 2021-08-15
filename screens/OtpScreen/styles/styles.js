import react from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen';


const {height,width} =Dimensions.get("screen");
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f3',
        justifyContent:'center',
        alignItems:'center',
    },
    underlineStyleBase:{
        width: hp(6),
        height: hp(6),
        borderWidth: 1,
        borderRadius:hp(1),
        backgroundColor:'#f0f0f3',
        shadowColor:"#AEAEC0",
        shadowOpacity:0.9,
        shadowOffset:{
            height:2,
            width:1
        },
        color:'#000000',
    },
    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    text:{
        fontSize:hp(2),
        color:"#000000",
    },
    item:{
        alignItems:'center',
        justifyContent:'center',
        shadowColor:"#AEAEC0",
        shadowOpacity:0.9,
        shadowRadius:wp(1),
        shadowOffset:{
            height:hp(0.2),
            width:wp(0.5)
        },
        backgroundColor:"#f0f0f3",
        width:wp(55),
        height:hp(6.5),
        borderRadius:hp(1)
    },
    btn:{
        fontSize:hp(2.5),
        color:'#56CB01',
        fontWeight:"700",
    },
});


export default styles;
