import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert } from 'react-native';

const MyHeader = props => {
    return (
        <Header
            leftComponent={<Icon name = "bars" type = "font-awesome" color = "grey" 
            onPress={()=>
               props.navigation.toggleDrawer()
            } />}
            centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize: 20, fontWeight: "bold", } }}
            rightComponent={<Icon name = "bell" type = "font-awesome" color = "grey" size = {25}
            onPress={()=>
            props.navigation.navigate("Notifications")} />}
            backgroundColor="#eaf8fe"
        />
    );
};

export default MyHeader;