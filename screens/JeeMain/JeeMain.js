import React , { useState,useEffect }from 'react';
import {SafeAreaView, StyleSheet, View, Text,ScrollView,Dimensions } from 'react-native';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput , TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown-v2'
import data from "../../assets/data/table_2.json";
import { FlatList } from 'react-native';
const JeeMain = ({navigation}) => {
  const [type,setType]=useState([]);
  const [name,setName]=useState();
  const [branch,setBranch]=useState([]);
  const [itype,setItype]=useState([]);
  //const [rank,setRank]=useState(null);
  const [category,setCategory]=useState([]);
  const [year,setYear]=useState();
  const [selectedBranch,setSelectedBranch]=useState();
  const [selectedCategory,setSelectedCategory]=useState();
  const [selectedType,setSelectedType]=useState();
  const [selectedGender,setSelectedGender]=useState();
  const [gender,setGender]=useState([]);
  const [final,setFinal]=useState([]);


  console.log(year,name,selectedType,selectedCategory,selectedBranch);


  const institute=(type)=>{ 
    data.map((item)=>{
      if(item.Year==type){
        // console.log(type);
        //console.log(item.Institute_Name);
        setType(type=>[...type,item.Institute_Type]);
      }
    })
  }

  const instituteType=(type)=>{ 
    setItype([]);
    data.map((item)=>{
      if(item.Institute_Type==type){
        // console.log(type);
        //console.log(item.Institute_Name);
        setItype(itype=>[...itype,item.Institute_Name]);
      }
    })
  }
  const BranchType=(type)=>{ 
    setBranch([]);
    data.map((item)=>{
      if(item.Institute_Name==type && item.Year==year){
        // console.log(type);
        //console.log(item.Institute_Name);
        setBranch(branch=>[...branch,item.Academic_Program]);
      }
    })
  }
  const GenderAndSeatType=(type)=>{ 
    setCategory([]);
    setGender([]);
    data.map((item)=>{
      if(item.Institute_Name==name && item.Year==year && item.Academic_Program==type ){
        // console.log(type);
        //console.log(item.Institute_Name);
        setCategory(category=>[...category,item.Seat_Type]);
        setGender(gender=>[...gender,item.Gender]);

      }
    })
  }
  const result=(type)=>{ 
    setFinal((final)=>[]);
    data.map((item)=>{
      if(item.Year==year && item.Institute_Name==name && item.Institute_Type==selectedType && item.Seat_Type==selectedCategory && item.Academic_Program==selectedBranch && item.Gender==selectedGender){
        setFinal([...final,item]);
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
          <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: hp(4) ,fontWeight: 'bold' , color: '#56CB01',marginTop:50, marginBottom:15, }}>JOSSA</Text>
        </View>
        <View>
          <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: hp(4),marginTop:10, marginBottom:15, }}>Cutoff Ranks</Text>
        </View>
        {/* <View>
          <TextInput style = {styles.input}
            value={rank}
            placeholder = "Enter Rank"
            placeholderTextColor = "#000000"
            onChangeText = {(text)=>setRank(text)}
          />
        </View> */}
        <View>
          <ModalDropdown style = {styles.drop} 
          isFullWidth = {true} 
          textStyle={styles.textStyle} 
          defaultTextStyle={styles.deftext}
          defaultValue ='Select Year'
          renderButtonText={(value)=>setYear(value)}
          dropdownTextStyle={{fontSize:hp(2)}}
          onSelect={(indx, value) =>{
            institute(value);
          }}
          options={["2017","2018","2019","2020"]}></ModalDropdown>
          <View style={{ position: "absolute", right: 20, top:20 }}><Text>▼</Text></View>
        </View>
        <View>
          <ModalDropdown style = {styles.drop} 
          isFullWidth = {true} textStyle={styles.textStyle} defaultTextStyle={styles.deftext}
          defaultValue ='College Type' 
          renderButtonText={(value)=>setSelectedType(value)}
          dropdownTextStyle={{fontSize:hp(2)}}
          onSelect={(indx, value) =>{
            instituteType(value);
          }}
          options={type.filter(onlyUnique)}></ModalDropdown>
          <View style={{ position: "absolute", right: 20, top:20 }}><Text>▼</Text></View>
        </View>
        <View>
          <ModalDropdown style = {styles.drop} 
          isFullWidth = {true} textStyle={styles.textStyle} defaultTextStyle={styles.deftext}
          defaultValue ='Select Institute Name'
          renderButtonText={(value)=>setName(value)}
          dropdownTextStyle={{fontSize:hp(2)}}
          onSelect={(indx, value) =>{
            BranchType(value);
          }}
          options={itype.filter(onlyUnique)}></ModalDropdown>
          <View style={{ position: "absolute", right: 20, top:20 }}><Text>▼</Text></View>
        </View>
        <View>
          <ModalDropdown style = {styles.drop} 
          isFullWidth = {true} 
          textStyle={styles.textStyle} 
          defaultTextStyle={styles.deftext}
          renderButtonText={(value)=>setSelectedBranch(value)}
          dropdownTextStyle={{fontSize:hp(2)}}
          onSelect={(indx, value) =>{
            GenderAndSeatType(value);
          }}
          defaultValue ='Select Branch' 
          options={branch.filter(onlyUnique)}></ModalDropdown>
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
          keyExtractor={(item) => item.Opening_Rank}
          renderItem={({ item }) => (
            <View style={styles.result}>
              <Text>Institute Name : {item.Institute_Name}</Text>
              <Text>Opening Rank : {item.Opening_Rank}</Text>
              <Text>Closing Rank : {item.Closing_Rank}</Text>
              <Text>Category : {item.Seat_Type}</Text>
              <Text>Gender : {item.Gender}</Text>
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

export default JeeMain;