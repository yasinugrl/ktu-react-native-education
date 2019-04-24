import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';


const {height, width} = Dimensions.get('window');

export default class Header extends Component {

  render() {
    return (
        <View style={{ width, backgroundColor: '#fff', flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderColor: 'black' }}>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}
