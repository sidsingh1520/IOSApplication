import React from 'react';
import {SafeAreaView, StyleSheet, View, Text,Image, Dimensions,TouchableOpacity} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const {height,width}=Dimensions.get("screen");
import Ionicons from "react-native-vector-icons/Ionicons";
const images = [
  'https://images.pexels.com/photos/2115695/pexels-photo-2115695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/4159435/pexels-photo-4159435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/5991465/pexels-photo-5991465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];


const mainscreen = ({navigation,route}) => {
  return (
    <SafeAreaView style={styles.safe}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
      <Image style={{alignSelf:'center'}} resizeMode="cover" source={require("../../assets/images/Careerkick.png")}/>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Notifications")}>
        <Ionicons name="ios-notifications-outline" style={{marginRight:20}} size={hp(3.5)}/>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{flexDirection: 'row'}}>
    <View style={styles.line} />
    <Text style={styles.text}>COLLEGE PREDICTOR</Text>
    <View style={styles.line} />
    </View>
    <ScrollView horizontal={true}>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("JossaPredictor")} style={styles.back1}>
          <Image resizeMode="cover" source={require("../../assets/images/Jossa.png")} />
        </TouchableOpacity>
        <View style={styles.heading}>
          <Text style={{fontWeight:'700'}}>JOSAA</Text>
          <Text style={{fontSize:10}}>For NIT|IIIT|GFTI</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("CsabPredictor")} style={styles.back1}>
          <Image source={require("../../assets/images/Csab.png")} />
        </TouchableOpacity>
        <View style={styles.heading}>
          <Text style={{fontWeight:'700'}}>CSAB</Text>
          <Text style={{fontSize:10}}>For NIT|IIIT|GFTI</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("JeeAdvancePredictor")} style={styles.back1}>
          <Image source={require("../../assets/images/Advance.png")} />
        </TouchableOpacity>
        <View style={styles.heading}>
          <Text style={{fontWeight:'700'}}>JEE ADV</Text>
          <Text style={{fontSize:10}}>For IIT</Text>
        </View>
      </View>
    </ScrollView>
      <View style={{flexDirection: 'row'}}>
    <View style={styles.line} />
    <Text style={styles.text}>PREVIOUS YEAR CUTOFF</Text>
    <View style={styles.line} />
    </View>
    <ScrollView horizontal={true}>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("JeeMain")} style={styles.back1}>
          <Image resizeMode="cover" source={require("../../assets/images/Jossa.png")} />
        </TouchableOpacity>
        <View style={styles.heading}>
          <Text style={{fontWeight:'700'}}>JOSAA</Text>
          <Text style={{fontSize:10}}>For NIT|IIIT|GFTI</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("CSAB")} style={styles.back1}>
          <Image source={require("../../assets/images/Csab.png")} />
        </TouchableOpacity>
        <View style={styles.heading}>
          <Text style={{fontWeight:'700'}}>CSAB</Text>
          <Text style={{fontSize:10}}>For NIT|IIIT|GFTI</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("JeeAdvance")} style={styles.back1}>
          <Image source={require("../../assets/images/Advance.png")} />
        </TouchableOpacity>
        <View style={styles.heading}>
          <Text style={{fontWeight:'700'}}>JEE ADV</Text>
          <Text style={{fontSize:10}}>For IIT</Text>
        </View>
      </View>
    </ScrollView>
      <View style={{flexDirection: 'row'}}>
    <View style={styles.line} />
    <Text style={styles.text}>BEST ENGINEERING COLLEGE IN INDIA</Text>
    <View style={styles.line} />
    </View>
    <ScrollView horizontal={true}>
      <View>
        <TouchableOpacity onPress={()=>alert("Coming Soon")} style={styles.back1}>
          <Image resizeMode="cover" source={require("../../assets/images/IIT.png")} />
        </TouchableOpacity>
        <View style={styles.heading}>
          <Text style={{fontWeight:'700'}}>IIT</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={()=>alert("Coming Soon")} style={styles.back1}>
          <Image source={require("../../assets/images/NIT.png")} />
        </TouchableOpacity>
        <View style={styles.heading}>
          <Text style={{fontWeight:'700'}}>NIT</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={()=>alert("Coming Soon")} style={styles.back1}>
          <Image  source={require("../../assets/images/IIIT.png")} />
        </TouchableOpacity>
        <View style={styles.heading}>
          <Text style={{fontWeight:'700'}}>IIIT</Text>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  Text:{
    marginTop:15,
    marginBottom:15,
    alignSelf:'center'
  },
  back:{
    backgroundColor: '#f0f0f3'
  },
  text:{
    alignSelf:'center', 
    paddingHorizontal:5, 
    fontSize:hp(2) , 
    marginTop:15, 
    marginBottom:15,
    fontWeight:'600'
  },
  line:{
    backgroundColor: '#56CB01', 
    height: 2, 
    flex: 1, 
    alignSelf: 'center'
  },
  img:{
    height:height/4,
    width:width/3,
    marginHorizontal:5,
    borderRadius:hp(2)
  },
  back1:{
    backgroundColor:"#f0f0f3",
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    height:height/6,
    width:width/3.5,
    margin:10,
    borderRadius:15,
    shadowColor:"#AEAEC0",
    shadowOffset:{
      height:1,
      width:1
    },
    shadowOpacity:0.8
  },
  heading:{
    width:width/3.5,marginLeft:10,alignContent:'center',alignItems:'center',
  }
});

export default mainscreen;