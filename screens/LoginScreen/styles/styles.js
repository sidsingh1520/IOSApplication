import react from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen';


const {height,width} =Dimensions.get("screen");
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f0f0f3",
    },
    topcontainer:{
        marginTop:hp(10),
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        flex:0.4,
        width
    },
    bottomcontainer:{
        flex:0.6,
        justifyContent:'space-evenly'
    },
    titletext:{
        fontSize:hp(4),
    },
    logo:{
        width:hp(20),
        height:hp(20),
    },
    item:{
        alignSelf:'center',
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
        width:wp(85),
        height:hp(6.5),
        borderRadius:hp(1)
    },
    btn:{
        fontSize:hp(3),
        color:'#56CB01',
    },
    bottomtext:{
        color:"#000",
        opacity:0.4,
        fontSize:hp(2)
    }
});

export default styles;