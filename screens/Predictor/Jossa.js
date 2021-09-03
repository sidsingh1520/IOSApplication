import React , { useState }from 'react';
import {SafeAreaView, StyleSheet, View, Text,ScrollView,Dimensions } from 'react-native';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput , TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown-v2'
import data from "../../assets/data/table_2.json";
import { FlatList } from 'react-native';
const JossaPredictor = ({navigation}) => {
  const [rank,setRank]=useState(null);
  const [selectedCategory,setSelectedCategory]=useState();                                    
  const [selectedType,setSelectedType]=useState();
  const [selectedGender,setSelectedGender]=useState();
  const [category,setCategory]=useState([]);
  const [gender,setGender]=useState([]);
  const [final,setFinal]=useState([]);
  const [selectedQuota,setSelectedQuota]=useState();
  const [quota,setQuota]=useState([]);
  const institute=(type)=>{ 
    data.map((item)=>{
      if(item.Institute_Type==type && item.Year=="2020"){
        // console.log(type);
        //console.log(item.Institute_Name);
        setCategory(category=>[...category,item.Seat_Type]);
        setGender(gender=>[...gender,item.Gender]);
        setQuota(quota=>[...quota,item.Quota]);
      }
    })
  }

  const result=(type)=>{ 
    setFinal(final=>[]);
    console.log(rank,selectedGender,selectedQuota,selectedCategory,selectedType);
    data.map((item)=>{
      if(item.Year=="2020" && item.Institute_Type==selectedType && item.Seat_Type==selectedCategory  && item.Gender==selectedGender && item.Quota==selectedQuota &&  rank<=parseInt(item.Closing_Rank)){
        setFinal(final=>[...final,[item.Institute_Name,item.Academic_Program,item.Opening_Rank,item.Closing_Rank]]);
        console.log(item);
      }
    })
  }
  console.log(final);
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  return (
    <ScrollView style={{flex:1}}>
      <SafeAreaView style={styles.safe}>
        <View >
          <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: hp(4) ,fontWeight: 'bold' , color: '#56CB01',marginTop:50, marginBottom:15, }}>JOSSA 2021</Text>
        </View>
        <View>
          <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: hp(4),marginTop:10, marginBottom:15, }}>College Predictor</Text>
        </View>
        <View>
          <TextInput style = {styles.input}
            value={rank}
            placeholder = "Enter Rank"
            placeholderTextColor = "#000000"
            onChangeText = {(text)=>setRank(text)}
          />
        </View>
        <View>
          <ModalDropdown style = {styles.drop} 
          isFullWidth = {true} textStyle={styles.textStyle} defaultTextStyle={styles.deftext}
          defaultValue ='College Type' 
          renderButtonText={(value)=>setSelectedType(value)}
          dropdownTextStyle={{fontSize:hp(2)}}
          onSelect={(indx, value) =>{
            institute(value);
          }}
          options={["NIT","IIIT","GFTI"]}></ModalDropdown>
          <View style={{ position: "absolute", right: 20, top:20 }}><Text>▼</Text></View>
        </View>
        <View>
          <ModalDropdown
            style = {styles.drop} 
            isFullWidth = {true} 
            textStyle={styles.textStyle} 
            defaultTextStyle={styles.deftext}
            renderButtonText={(value)=>setSelectedCategory(value)}
            dropdownTextStyle={{fontSize:hp(2)}}
            defaultValue ='Select Category'
            options={category.filter(onlyUnique)}/>
          <View style={{ position: "absolute", right: 20, top:20 }}><Text>▼</Text></View>
        </View>
        <View>
          <ModalDropdown
            style = {styles.drop} 
            isFullWidth = {true} 
            textStyle={styles.textStyle} 
            defaultTextStyle={styles.deftext}
            renderButtonText={(value)=>setSelectedGender(value)}
            dropdownTextStyle={{fontSize:hp(2)}}
            defaultValue ='Select Gender'
            options={gender.filter(onlyUnique)}/>
          <View style={{ position: "absolute", right: 20, top:20 }}><Text>▼</Text></View>
        </View>
        <View>
          <ModalDropdown
            style = {styles.drop} 
            isFullWidth = {true} 
            textStyle={styles.textStyle} 
            defaultTextStyle={styles.deftext}
            renderButtonText={(value)=>setSelectedQuota(value)}
            dropdownTextStyle={{fontSize:hp(2)}}
            defaultValue ='Select Quota'
            options={quota.filter(onlyUnique)}/>
          <View style={{ position: "absolute", right: 20, top:20 }}><Text>▼</Text></View>
        </View>
        <TouchableOpacity
          onPress={()=>{
            result();
          }}
        >
          <View style={styles.item}>
            <Text style={styles.btn}>PREDICT COLLEGES</Text>
          </View>
        </TouchableOpacity>
        {!final.length ? null:
        <FlatList
          data={final.filter(onlyUnique)}
          keyExtractor={(item) => item[0]+item[1]+item[2]+item[3]}
          renderItem={({ item }) => (
            <View style={styles.result}>
              {/* <Text><Text style={{fontWeight:'700'}}>Your Rank:</Text>{rank}</Text> */}
              <Text><Text style={{fontWeight:'700'}}>Name:</Text>{item[0]}</Text>
              <Text><Text style={{fontWeight:'700'}}>Branch:</Text>{item[1]}</Text>
            </View>
          )}
        />
        }
      </SafeAreaView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#f0f0f3",
    },
    safe:{
      flex:1,
      flexDirection:'column',
    },
    input: {
      margin: 15,
      marginTop:70,
      height: 40,
      fontSize:18,
      borderBottomColor: '#000', 
      borderBottomWidth: 1    
  },
  textStyle:{
    fontSize: hp(2),
    borderBottomColor: '#000', 
    borderBottomWidth: 1   
  },
  drop:{
    margin: 15,
    marginTop:15,
    height: 40, 
    borderBottomColor: '#000', 
    borderBottomWidth: 1    
  },
  submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
  },
  submitButtonText:{
      color: 'white'
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
      borderRadius:hp(1),
      marginTop:50
  },
  btn:{
      fontSize:hp(2.5),
      color:'#56CB01',
      fontWeight:'700'
  },
  result:{
    alignSelf:'center',
    alignItems:'flex-start',
    justifyContent:'center',
    shadowColor:"#AEAEC0",
    shadowOpacity:0.9,
    shadowRadius:wp(1),
    shadowOffset:{
        height:hp(0.2),
        width:wp(0.5)
    },
    backgroundColor:"#f0f0f3",
    width:wp(90),
    borderRadius:hp(1),
    marginTop:hp(2),
    marginBottom:hp(2),
    padding:10,
  }
});

export default JossaPredictor;