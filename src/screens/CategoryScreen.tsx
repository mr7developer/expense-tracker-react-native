import React,{useState} from "react";
import {View,Text,TextInput,Button,FlatList} from "react-native";

export default function CategoryScreen(){

  const [category,setCategory] = useState("");
  const [categories,setCategories] = useState<any[]>([]);

  const addCategory = ()=>{
    if(!category) return;

    setCategories([...categories,{name:category}]);
    setCategory("");
  }

  return(
    <View style={{flex:1,padding:20}}>

      <Text>Add Category</Text>

      <TextInput
        style={{borderWidth:1,padding:10}}
        value={category}
        onChangeText={setCategory}
      />

      <Button title="Add" onPress={addCategory} />

      <FlatList
        data={categories}
        renderItem={({item})=>(
          <Text style={{padding:10}}>
            {item.name}
          </Text>
        )}
      />

    </View>
  )
}