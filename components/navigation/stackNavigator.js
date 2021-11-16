
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navbar from "../general/stackNavbar";

import Login from "../../screens/main/Login";
import Home from "../../screens/main/Home";

import Providers from "../../screens/provider/Providers";
import Details from "../../screens/provider/providerDetails";

import Chat from "../../screens/chat/Chat";
import chatWindow from "../../screens/chat/chatWindow";


const Stack = createNativeStackNavigator(); 

const MainStackNavigator = () => { 
  return ( 
      <Stack.Navigator>
        {/*0 Login screen*/}
      
        {/*1 Home screen*/}
        <Stack.Screen name="Home" component={Home} 
          options={{
            headerTransparent: true,
            header: ({navigation})=> <Navbar navigation={navigation} main={true}/>,
          }}
        
        />


        {/*4 Chat screen*/}
        <Stack.Screen name="Chat" component={Chat} 
          options={{
            header: ({navigation})=> <Navbar navigation={navigation} navTitle={"Chat"}/>,
          }}
        
        />

        {/*4 Chat screen*/}
        <Stack.Screen name="chatWindow" component={chatWindow}
         
          options={{
            header: ({route, navigation})=> 
            <Navbar navigation={navigation}  
              chat={true} 
              navTitle={"Chat window"} route={route.params}
            />,

          }}
        
        />

        {/*5 Providers screen*/}
        <Stack.Screen name="Providers" component={Providers} 
          options={{
            headerTitleAlign: "center",
            header: ({navigation})=> <Navbar navigation={navigation} navTitle={"Proveedores"}/>,
          }}
        
        />
        {/*5 Providers details screen*/}
        <Stack.Screen name="providerDetails" component={Details} 
          options={{
            header: ({navigation})=> 
            <Navbar navigation={navigation} navTitle={"Perfil de proveedor"}/>,
          }}
        
        />
      </Stack.Navigator>
  );
}

const LoginScreen = () => { 
  return ( 
      <Stack.Navigator>
        {/*1 Home screen*/}
        <Stack.Screen name="login" component={Login}
          options={{
            headerShown: false,

          }}
        />   
      </Stack.Navigator>
  );
}



export  {MainStackNavigator, LoginScreen};
