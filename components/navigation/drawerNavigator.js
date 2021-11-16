import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {MainStackNavigator, LoginScreen} from "./stackNavigator";

import DrawerContent from "./drawerContent";

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {


  return (
 
    <Drawer.Navigator
     screenOptions={{ headerShown: false }}
     initialRouteName={"Login"}
     initialRoute={true}
     drawerContent={props => <DrawerContent {...props}/>}
     >
                <Drawer.Screen 
                    name="home"  
                    component={MainStackNavigator}
                    options={{drawerLabel: ()=>{}}}
                />
                <Drawer.Screen 
                    name="Login"
                    component={LoginScreen}
                    options={{ swipeEnabled: false, title: "Cerrar sesión" }}
                />

    </Drawer.Navigator>
  );
};


export default DrawerNavigator;

