import React,{Component} from "react";
import {Image,View,Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity,} from "react-native";
export default class Detail extends Component{
  constructor(props){
    super(props)
    this.state={
      Email:'',
      Verification:''
    
    }
  }
  Verify() {
    if (this.state.Email == "") {
      alert("Please enter your Email")
    }
    else if(this.state.Verification == ""){
      alert("please enter your Verification Code")
    }
    else{
      alert("Verified successfully")
    }
  }
  render(){
    return(
      <SafeAreaView style={{width:'100%',height:'100%',backgroundColor:'white'}}>
      <ScrollView>
        <View>
            <Image style={{height:90,width:"90%",alignSelf:'center',marginTop:100}} source={require('../Images/logo.jpeg')}/>
            <TextInput onChangeText={(text) => this.setState({ Email: text })}  style={{borderBottomWidth:1,width:'90%',backgroundColor:'white',borderRadius:10,marginTop:80,alignSelf:"center"}} placeholder="Enter Your Email"></TextInput>
            <TextInput onChangeText={(text) => this.setState({ Verification: text })}  style={{borderBottomWidth:1,width:'90%',backgroundColor:'white',borderRadius:10,marginTop:40,alignSelf:"center"}}placeholder="Verification Code"></TextInput>
           <TouchableOpacity onPress={() => { this.Verify(); }} style={{width:'50%',height:40,backgroundColor:'#2DB3FB',borderRadius:20,marginTop:100,alignSelf:"center",alignItems:'center',alignContent:'center'}}>
              <Text style={{alignSelf:'center',color:'white',marginTop:8,fontWeight:'bold'}}>Verify</Text></TouchableOpacity>
         </View> 
      </ScrollView>
      </SafeAreaView>
    );
  }
}