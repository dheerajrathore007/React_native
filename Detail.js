import React,{Component} from "react";
import {Image,View,Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity,} from "react-native";
export default class Detail extends Component{
  constructor(props){
    super(props)
    this.state={
      Email:'',
      Verification:'',
      Password:'',
      confirmPassword:''
    
    }
  }
  Details() {
    if (this.state.Email == "") {
      alert("Please enter your Email")
    }
    else if(this.state.Verification == ""){
      alert("please enter your Verification Code")
    }
    else if(this.state.Password == ""){
      alert("please enter your New Password")
    }
    else if(this.state.confirmPassword == ""){
      alert("please enter your Confirm Password")
    }
    else{
      alert("Sign In successfully")
    }
  }
  render(){
    return(
      <SafeAreaView style={{width:'100%',height:'100%',backgroundColor:'white'}}>
      <ScrollView>
        <View>
            <Image style={{height:90,width:"90%",alignSelf:'center',marginTop:50}} source={require('../Images/logo.jpeg')}/>
            <TextInput onChangeText={(text) => this.setState({ Email: text })} style={{borderBottomWidth:1,width:'90%',backgroundColor:'white',borderRadius:10,marginTop:60,alignSelf:"center"}} placeholder="Enter Your Email"></TextInput>
            <TextInput onChangeText={(text) => this.setState({ Verification: text })} style={{borderBottomWidth:1,width:'90%',backgroundColor:'white',borderRadius:10,marginTop:40,alignSelf:"center"}}placeholder="Verification Code"></TextInput>
            <TextInput onChangeText={(text) => this.setState({ Password: text })} style={{borderBottomWidth:1,width:'90%',backgroundColor:'white',borderRadius:10,marginTop:40,alignSelf:"center"}}placeholder="Enter New Password"></TextInput>
            <TextInput onChangeText={(text) => this.setState({ confirmPassword: text })} style={{borderBottomWidth:1,width:'90%',backgroundColor:'white',borderRadius:10,marginTop:40,alignSelf:"center"}}placeholder="Re Enter Your Password"></TextInput>
            <TouchableOpacity onPress={() => { this.Details(); }} style={{width:'50%',height:40,backgroundColor:'#2DB3FB',borderRadius:20,marginTop:100,alignSelf:"center",alignItems:'center',alignContent:'center'}}>
              <Text style={{alignSelf:'center',color:'white',marginTop:8,fontWeight:'bold'}}>Sign In</Text></TouchableOpacity>
         </View> 
      </ScrollView>
      </SafeAreaView>
    );
  }
}