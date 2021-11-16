import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, View, TextInput, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from "react-native";
//phone dimensions
const dime = Dimensions.get("screen");

const Login = ({navigation}) => {
  //Returns promise
  //Get username and password 
  const [user, setUsername] = useState("");
  const [password, setPassword] = useState("");

    return (
      <React.Fragment> 

            <ScrollView style={styles.body}> 

                    {/*Validates if the content exists, else doesnt showT */}
                  
                <View style={styles.mainContainer}>


                <Text style={styles.loginTitle}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/images/Logo.png')}
                    />
                    {"Extensive medical"} 
                </Text>

                    {/*User and Password */}
                    <TextInput
                        style={styles.input}
                        placeholder={"Usuario"}
                        onChangeText={(setUsername)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={"Contraseña"}
                        onChangeText={setPassword}
                    />


                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{navigation.navigate("home")}}
                    >   
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                        
        
                </View>

            </ScrollView> 

      </React.Fragment> 

    );
}

const styles = StyleSheet.create({
    
    input: {
        height: 40,
        width: dime.width/1.5,
        margin: 12,
        padding: 5,
        borderRadius: 4,
        borderBottomColor: "#3056d3",
        borderBottomWidth: 1,
        backgroundColor:"#f6f6f6",
        fontSize: 16.5
    },
    button: {
        width: "35%",
        borderRadius: 5,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3056d3",
    },
    buttonText:{
        color:"white",
        fontWeight: "bold",
        fontSize: 16
    },
    mainContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }, 
    loginTitle:{
        fontSize:30,
        fontWeight:"bold",
        marginTop:"20%",
        marginBottom: "10%",
        height: 100,
        color: "white"
    },
    tinyLogo: {
        width: 70,
        height: 70,
    },
    body:{
        backgroundColor: "#1e1e1e"
    }

  });

export default Login;