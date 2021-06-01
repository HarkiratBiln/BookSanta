import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class NameOfComponent extends Component{
  render(){
  return (
    <View>
    <Text>Enter your text</Text>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
