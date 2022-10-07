import React,{Component} from "react";
import {Image,View,Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity,secureTextEntry} from "react-native";
export default class Signin extends Component{
  constructor(props){
    super(props)
    this.state={
      checkBox:false,
      checkBox1:false,
      visiblepass:true,
      Username:"",
      Email:"",
      Password:"",
    }
  }
  submitsigin() {
    if (this.state.Username == "") {
      alert("Please enter your Username")
    }
    else if(this.state.Email == ""){
      alert("please enter your Email")
    }
    else if(this.state.Password == ""){
      alert("please enter your password")
    }
    else{
      alert("Sign In Successfully")
    }
  }
  render(){
    return(
      <SafeAreaView style={{width:'100%',height:'100%',backgroundColor:'white'}}>
      <ScrollView>
        <View>
            <Image style={{height:90,width:"90%",alignSelf:'center',marginTop:50}} source={require('../Images/logo.jpeg')}/>
            <TextInput onChangeText={(text) => this.setState({ Username: text })}
            style={{borderBottomWidth:1,width:'90%',backgroundColor:'white',borderRadius:10,marginTop:60,alignSelf:"center"}} placeholder="Username"></TextInput>
            <TextInput onChangeText={(text) => this.setState({ Email: text })} style={{borderBottomWidth:1,width:'90%',backgroundColor:'white',borderRadius:10,marginTop:30,alignSelf:"center"}}placeholder="Email"></TextInput>

          <View style={{flexDirection:"row",justifyContent:'space-between',borderBottomWidth:1,marginTop:30,height:50,width:'90%',alignSelf:'center'}}>
          <TextInput onChangeText={(text) => this.setState({ Password: text })} style={{alignSelf:'center'}}
          secureTextEntry={this.state.visiblepass}
          placeholder='Password'></TextInput>
          <TouchableOpacity onPress={()=>this.setState({visiblepass: !this.state.visiblepass})} ><Image style={{width:25,height:25,marginTop:10}} source={require('../Images/eye.png')}/></TouchableOpacity>
           </View>

            <TouchableOpacity><Text style={{alignSelf:'flex-end',marginRight:"7%",marginTop:20,fontWeight:'bold'}}>Forget Password?</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { this.submitsigin(); }}
            style={{width:'50%',height:40,backgroundColor:'#2DB3FB',borderRadius:20,marginTop:50,alignSelf:"center",alignItems:'center',alignContent:'center'}}>
              <Text style={{alignSelf:'center',color:'white',marginTop:8,fontWeight:'bold'}}>Sign In</Text></TouchableOpacity>

              <View style={{marginTop:19,flexDirection:"row",alignItems:'center',justifyContent:"space-between",marginTop:50}}>
            <View style={{width:'30%',borderWidth:0.5,height:0}}/>
            <Text style={{fontWeight:"bold",color:"#000"}}>Or sign in with</Text>
            <View style={{width:'30%',borderWidth:0.5,height:0}} /></View>
         <View style={{flexDirection:'row',justifyContent:'space-between',width:"90%",alignSelf:'center',marginTop:40}}>
          <TouchableOpacity style={{height:50,width:50,borderWidth:2,borderColor:'black',borderRadius:10}}><Image style={{height:40,width:40,margin:5}} source={require('../Images/google.png')}/></TouchableOpacity>
          <TouchableOpacity style={{height:50,width:50,borderWidth:2,borderColor:'black',borderRadius:10}}><Image style={{height:40,width:40,margin:5}} source={require('../Images/facebook.png')}/></TouchableOpacity>
          <TouchableOpacity style={{height:50,width:50,borderWidth:2,borderColor:'black',borderRadius:10}}><Image style={{height:40,width:40,margin:5}} source={require('../Images/twitter.png')}/></TouchableOpacity>
          <TouchableOpacity style={{height:50,width:50,borderWidth:2,borderColor:'black',borderRadius:10}}><Image style={{height:35,width:35,margin:5}} source={require('../Images/apple2.png')}/></TouchableOpacity>
      </View>
    <View style={{flexDirection:"row",alignSelf:'center',marginTop:20}}>
        <Text>Don't Have An Account</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
<Text style={{fontWeight:'bold'}}> Register</Text></TouchableOpacity>
    </View>
    </View> 
      </ScrollView>
      </SafeAreaView>
    );
  }
}