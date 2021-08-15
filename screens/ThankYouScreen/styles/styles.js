import react from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen';
const {height,width} =Dimensions.get("screen");
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f0f0f3",
        justifyContent:'center'
    },
    topcontainer:{
        flex:0.4,
        alignItems:'center',
        justifyContent:'center'
    },
    bottom:{
        flex:0.5,
        alignItems:'center'
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
    third:{
        flex:0.7,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        height:hp(25),
        width:hp(25)
    },
    txt:{
        fontSize:hp(1.7)
    }
});

export default styles;