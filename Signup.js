  import React,{Component} from "react";
  import {Image,View,Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity} from "react-native";
  export default class Signup extends Component{
    constructor(props){
      super(props)
      this.state={
        checkBox:false,
        checkBox1:false,
      }
    }
    render(){
      return(
        <SafeAreaView style={{width:'100%',height:'100%',backgroundColor:'white'}}>
        <ScrollView>
          <View>
              <Image style={{height:80,width:"80%",alignSelf:'center',marginTop:30}} source={require('../Images/logo.jpeg')}/>
              <TextInput  style={{borderBottomWidth:1,width:'90%',backgroundColor:'white',borderRadius:10,marginTop:30,alignSelf:"center",borderBottomColor:'grey'}} placeholder="Username"></TextInput>
              <TextInput  style={{borderBottomWidth:1,width:'90%',backgroundColor:'white',borderRadius:10,marginTop:30,alignSelf:"center",borderBottomColor:'grey'}}placeholder="Email"></TextInput>
              <TextInput  style={{borderBottomWidth:1,width:'90%',backgroundColor:'white',borderRadius:10,marginTop:30,alignSelf:"center",borderBottomColor:'grey'}}placeholder="Phone Number"></TextInput>
              <TextInput  style={{borderBottomWidth:1,width:'90%',backgroundColor:'white',borderRadius:10,marginTop:30,alignSelf:"center",borderBottomColor:'grey'}}placeholder="Password"></TextInput>
              <Text style={{fontSize:15,fontWeight:'normal',margin:20}}>I am a</Text>
              <View style={{flexDirection:"row",alignSelf:'center',marginTop:10}}>
                        <TouchableOpacity 
                        style={{borderWidth:1,height:25,width:25, borderColor:"#51c5ff",borderRadius:15}}
                        onPress={()=>this.setState({checkBox: !this.state.checkBox})}>
                        {this.state.checkBox?<Image source={require('../Images/tick.png')} 
                            style={{height:15,width:15,tintColor:'cyan',alignSelf:'center',marginTop:5}}/>:null}
                            </TouchableOpacity>
                        <Text style={{color:"#000",fontWeight:"bold",fontSize:15}}>    Media Reporter     </Text>
                        <TouchableOpacity 
                        style={{ borderWidth:1,height:25,width:25, borderColor:"#51c5ff",borderRadius:15}}
                        onPress={()=>this.setState({checkBox1: !this.state.checkBox1})}>
                          {
                            this.state.checkBox1?<Image source={require('../Images/tick.png')}                     
                            style={{height:15,width:15,tintColor:'cyan',alignSelf:'center',marginTop:5}}/>:null}
                        </TouchableOpacity>
                        <Text style={{color:"#000",fontWeight:"bold",fontSize:15}}>    Visitor </Text>
            </View>
         
              <TouchableOpacity style={{width:'40%',height:40,backgroundColor:'#2DB3FB',borderRadius:20,marginTop:25,alignSelf:"center",alignItems:'center',alignContent:'center'}}>
                <Text style={{alignSelf:'center',color:'white',marginTop:8,fontWeight:'bold'}}>Sign Up</Text></TouchableOpacity>

            <View style={{marginTop:19,flexDirection:"row",alignItems:'center',justifyContent:"space-between",marginTop:25}}>
            <View style={{width:'30%',borderWidth:0.5,height:0}}/>
            <Text style={{fontWeight:"bold",color:"#000"}}>Or sign in with</Text>
            <View style={{width:'30%',borderWidth:0.5,height:0}} /></View>


            <View style={{flexDirection:'row',justifyContent:'space-between',width:"90%",alignSelf:'center',marginTop:25}}>
            <TouchableOpacity style={{height:50,width:50,borderWidth:2,borderColor:'black',borderRadius:10}}><Image style={{height:35,width:35,margin:5 }} source={require('../Images/email.png')}/></TouchableOpacity>
          <TouchableOpacity style={{height:50,width:50,borderWidth:2,borderColor:'black',borderRadius:10}}><Image style={{height:30,width:30,margin:10 }} source={require('../Images/google.png')}/></TouchableOpacity>
          <TouchableOpacity style={{height:50,width:50,borderWidth:2,borderColor:'black',borderRadius:10}}><Image style={{height:30,width:30,margin:10 }} source={require('../Images/facebook.png')}/></TouchableOpacity>
          <TouchableOpacity style={{height:50,width:50,borderWidth:2,borderColor:'black',borderRadius:10}}><Image style={{height:30,width:30,margin:10 }} source={require('../Images/twitter.png')}/></TouchableOpacity>
          <TouchableOpacity style={{height:50,width:50,borderWidth:2,borderColor:'black',borderRadius:10}}><Image style={{height:30,width:30,margin:5 }} source={require('../Images/apple2.png')}/></TouchableOpacity>
      </View>
        <Text style={{alignSelf:'center',marginTop:10}}>By Signing uo to News24 you are accepting Our</Text>
        <View style={{flexDirection:'row',alignSelf:'center',marginBottom:10}}>
          <TouchableOpacity><Text style={{fontWeight:'bold'}}>Terms</Text></TouchableOpacity>
          <Text> & </Text>
          <TouchableOpacity><Text style={{fontWeight:'bold'}}>Conditions</Text></TouchableOpacity>
        </View>
        </View>
        </ScrollView>
        </SafeAreaView>
      );
    }
  }