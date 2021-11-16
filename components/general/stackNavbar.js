import React from 'react'
import { SafeAreaView, TouchableOpacity, View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const dime = Dimensions.get("screen");

const propTypes ={
    main: PropTypes.bool,

}  

const defaultProps ={
    main: false,
    navTitle: "",
    chat: false,
    name: "",
    profile: "",

}

class Navbar extends React.PureComponent {

    render() {
        const { navigation, main, navTitle, chat, route } = this.props;
      
        return (
            
            <SafeAreaView>
                {main ? 
                 
                 (<View style={styles.mainNav}>

                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/images/Logo.png')}
                    />
                    
                 </View>)


                    :
                 
                    ( chat ? (

                        <View style={styles.chatNav}>
                            <TouchableOpacity onPress={()=>{navigation.goBack()}}> 
                                <Icon name={'chevron-back'} size={40} color={"white"}/> 
                               
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.touchProvider}    
                                onPress={()=>navigation.navigate(
                                    {
                                        name: "providerDetails",
                                        params: route.params
                                    } 
                                    )}
                            > 
                                
                                <Image 
                                        style={styles.sectionImg}
                                        source={{uri:route.params.profile}}
                                    />
                                    
                            <Text style={styles.navTitle}>{route.params.name}</Text>
                            </TouchableOpacity>

                        </View>

                        )
                        
                        :
                            
                            
                        (
                        
                        <View style={styles.mainNav}>
                            <TouchableOpacity onPress={()=>{navigation.goBack()}}> 
                                <Icon name={'chevron-back'} size={40} color={"white"}/>
                            </TouchableOpacity>
                            <Text style={styles.navTitle}>{navTitle}</Text>

                        </View>
                        
                        )
                
                )
                }
                
            </SafeAreaView>

        );
    }
} 

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

const styles = StyleSheet.create({
    mainNav:{
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        backgroundColor: "#3056d3",
    },
    tinyLogo:{
        width: 50,
        height: 50,
    }, 
    logout:{
        fontWeight: "bold",
        color:"#ffffff"
    },


    
    navTitle:{
        fontSize: 22,
        color: "white",
        fontWeight: "bold",
    },









    //Image
    sectionImg:{
        height: 45,
        width: 45,
        backgroundColor: "#1e1e1e", 
        borderRadius: 65,
        margin:30,
        marginTop:2,
        marginBottom:2,
        
    },

    chatNav:{
        justifyContent:"space-between",
        flexDirection: "row",
        paddingRight: dime.width/5,
        alignItems: "center",
        backgroundColor: "#3056d3",
    },
    touchProvider:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#3056d3",
    }




});

export default Navbar;