
import React from "react";
import { NavigationContainer } from '@react-navigation/native'; 
import DrawerNavigator from "./components/navigation/drawerNavigator";


function App() { 
  return ( 
   
    <NavigationContainer>
        <DrawerNavigator/> 
    </NavigationContainer>

  );
}

export default App;
