import React,{useState} from "react";
import {View,Text,Image,Switch} from "react-native";

export default function ProfileScreen(){

  const [dark,setDark] = useState(false);

  return(
    <View style={{flex:1,alignItems:"center",padding:20}}>

      <Image
        source={{uri:"https://i.pravatar.cc/150"}}
        style={{width:100,height:100,borderRadius:50}}
      />

      <Text style={{fontSize:20,marginTop:10}}>
        John Doe
      </Text>

      <Text>Contact: 9876543210</Text>

      <View style={{flexDirection:"row",marginTop:20}}>
        <Text>Dark Mode</Text>
        <Switch
          value={dark}
          onValueChange={setDark}
        />
      </View>

    </View>
  )
}