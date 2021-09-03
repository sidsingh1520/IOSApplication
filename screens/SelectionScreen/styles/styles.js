import react from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen';


const {height,width} =Dimensions.get("screen");
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f0f0f3",
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around'
    },
    first:{
        flex:0.5,
        justifyContent:'center'
    },
    img:{
        height:hp(30),
        width:wp(80)
    },
    second:{
        flexDirection:'row',
        alignItems:'center'
    },
    divider:{
        height:hp(0.3),
        backgroundColor:"#54BF06",
        width:wp(30)
    },
    txt:{
        fontWeight:"700",
        fontSize:hp(2.2),
        
    },
    third:{
        flex:0.5,
        justifyContent:'center'
    },
    row:{
        flexDirection:'row',
    },
    bg:{
        height:hp(35),
        width:hp(22),
        justifyContent:'flex-end',
        alignItems:'center',
        alignContent:'center'
    },
    shadow:{
        shadowColor:'#000000',
        shadowOpacity:0.7,
        shadowOffset:{
            height:1,
            width:1
        },
        shadowRadius:hp(0.3),
    }
});

export default styles;