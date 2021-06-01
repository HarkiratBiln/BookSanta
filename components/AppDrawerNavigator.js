import React, { Component } from 'react';
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenu";
import SettingsScreen from "../screens/SettingsScreen";
import MyDonationScreen from "../screens/MyDonationScreen";
import NotificationsScreen from "../screens/NotificationsScreen";


export const AppDrawerNavigator = createDrawerNavigator({
    Home: { screen: AppTabNavigator },
    MyDonations: {
        screen: MyDonationScreen
    },
    Notifications: {screen: NotificationsScreen},
    
    Settings: { screen: SettingsScreen },
},

    {
        contentComponent: CustomSideBarMenu,
    },
    {
        initialRouteName: "Home"
    }

)

