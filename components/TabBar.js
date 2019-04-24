import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');


export default class TabBar extends Component {
    
    
    componentWillMount() {
    }

    isLoginFunc() {

        if(this.props.isLogin) {
           return <Text>Profil</Text> 
        }
        return null
    }

    render() {
        return(
        <View style={{ width, backgroundColor: 'pink', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>

            <Text>Anaasyfa</Text>
            <Text>Keşfet</Text>
            <Text>Ara</Text>

            {this.isLoginFunc()}
            

        </View>
        );
    }
    
}