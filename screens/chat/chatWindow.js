import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Dimensions, TouchableOpacity, TextInput} from "react-native";
//Pure component call without brackets
import Icon from 'react-native-vector-icons/Ionicons';
import Chat from '../../components/chat/Chat';
//Moves input to virtual keyboard position
import CustomInput from '../../components/textInput/textInput';

//phone dimensions
const dime = Dimensions.get("screen");

const chatData = [

    {
        from: "1",//Them
        to: "2",//Me
        time: "4:05PM",
        date: "05/12/21",
        message: "Hello!",
    },
    {
        from: "1",
        to: "2",
        time: "4:06PM",
        date: "05/12/21",
        message: "How are you?",
    },
    {
        from: "1",
        to: "2",
        time: "4:06PM",
        date: "05/12/21",
        message: "How are you?",
    },
    {
        from: "1",
        to: "2",
        time: "4:06PM",
        date: "05/12/21",
        message: "How are you?",
    },
    {
        from: "1",
        to: "2",
        time: "4:06PM",
        date: "05/12/21",
        message: "How are you?",
    },
    {
        from: "1",
        to: "2",
        time: "4:06PM",
        date: "05/12/21",
        message: "How are you?",
    },
    {
        from: "2",
        to: "1",
        time: "4:08PM",
        date: "05/12/21",
        message: "Hey!, doing good, how about you?",
    },
    {
        from: "1",
        to: "2",
        time: "4:10PM",
        date: "05/12/21",
        message: "Great, thanks!",
    },
    {
        from: "2",
        to: "1",
        time: "4:11PM",
        date: "05/12/21",
        message: "Fantastic",
    },





]




const chatWindow = ({route, navigation}) => {

    //Route contains provider id, grab user id and find their conversation
    //the set it on use effect based on the request, has to be a json array
    //with chatData style

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);




  //runs only once
  useEffect(() => {
        setLoaded(true);
    //Update data every certain timeout, empty array to only call once
  }, []);

    return (
        <React.Fragment> 

            {loaded && !error && (
            <View style={styles.body}> 

                {/*Section*/}
                <View style={styles.section}>

                    {/*ChatLoaded*/}
                    <View style={styles.section}>
                        <Chat 
                            navigation={navigation}
                            content={chatData} 
                            navigateTo={"Home"}
                        />
                    </View>
                    {/*ChatLoaded*/}

                    {/*Send input*/}
                    <View style={styles.sendMessage}>


                        <TouchableOpacity style={styles.sendButton}onPress={()=>{navigation.goBack()}}> 
                            <Icon name={'send'} size={25} color={"black"}/>
                        </TouchableOpacity>

                        <TextInput
                            style={styles.input}
                            placeholder={"Buscar un proveedor"}
                        />
                            


                    </View> 


                </View>
                {/*Section*/}

            </View> 
            )} 
                

        {!loaded && <ActivityIndicator size="large"/>} 
        {error && <Error/>}
        </React.Fragment>

    );
}

const styles = StyleSheet.create({

    body:{
        //backgroundColor: "#1e1e1e",
        backgroundColor: "#1e1e1e",
        height: dime.height,

    },
    input: {
        width: dime.width,
        padding: 5,
        borderRadius: 4,
        borderBottomColor: "#3056d3",
        borderBottomWidth: 1,
        backgroundColor:"#f6f6f6",
        fontSize: 16.5
      },




    section:{ 
        height: dime.height/1.29
    },

    sendMessage:{
        marginTop:5,
        flexDirection:"column",
        justifyContent:"flex-end",
        backgroundColor: "red"
    },
    sendButton:{
        position:"absolute",
        zIndex:100,
        right:5,
        bottom: 5
    }


});

export default chatWindow;
 