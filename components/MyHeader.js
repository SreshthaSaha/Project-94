import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View} from 'react-native';
import db from '../config'


export default class MyHeader extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: "",
    }
  }

  render(){
  return(
    <Header
      centerComponent={{ text: this.props.title, style: { color: '#000000', fontSize:20,fontWeight:"bold",marginTop:20} }} 
      backgroundColor = "#0cfcf4"
    />
  );
}
}