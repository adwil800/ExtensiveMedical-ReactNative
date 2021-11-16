
import React from 'react'
import {StyleSheet, TouchableOpacity, Image, View, Text} from "react-native";
import PropTypes from "prop-types";

const propTypes = {
    item: PropTypes.object
};
const defaultProps ={
    navigateTo: "Home",
};

//<></>
class Card extends React.PureComponent {


    render() {
        //render content, basically a constructor sent from element window as a property
        const {navigation, item, navigateTo} = this.props;
        //For chat window and provider details
        return (

            <React.Fragment>
                {navigateTo === "chatWindow" ?
                    (
                         
                        <TouchableOpacity
                            onPress={()=>navigation.navigate(navigateTo,
                                        {
                                            params: item
                                        }
                                )}
                            style={styles.sectionMenu}
                        > 
                            <View>
                                
                            {/*Chat name and image*/}
                                <View  style={styles.flexRow}>
                                    
                                    <Image 
                                        style={styles.sectionImg}
                                        source={{uri:item.profile}}
                                    />
                                    <Text style={styles.sectionTitle}>
                                        {item.name}  
                                    </Text>
                                   
                                </View>

                            {/*Display last message and time */} 
                                <View  style={styles.chatInfo}>
                                    <Text 
                                    numberOfLines={1} 
                                    style={styles.chatInfoText}
                                    >
                                        {item.lastMessage}

                                    </Text>
                                    <Text style={styles.chatInfoDate}>{item.lastMessageDate}  
                                    </Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )
                    
                    :
                    
                    (
                            <TouchableOpacity
                                onPress={()=>navigation.navigate(
                                            {
                                                name: navigateTo,
                                                params: item,
                                            } 
                                    )}
                                style={styles.sectionMenu}
                            >
                                 <View  style={styles.flexRowProv}>
                                    
                                    <Image 
                                        style={styles.sectionImgProv}
                                        source={{uri:item.profile}}
                                    />
        
                                    <Text style={styles.sectionTitleProv}>
                                        {item.name}  
                                    </Text>
                                   
                                </View>
                            </TouchableOpacity>
                    )
                 } 
            </React.Fragment>

        );
    }


}

const styles = StyleSheet.create({

    //Blue container
    sectionMenu:{
        backgroundColor: "#3056d3",
        borderRadius: 10,
        padding: 5,
        marginTop: 15,
    },
    //Image and name unique container
    flexRow:{
        flexDirection: "row", 
        
    },
    //Image
    sectionImg:{
        height: 65,
        width: 65,
        backgroundColor: "#1e1e1e", 
        borderRadius: 65,
    },
    //Name
    sectionTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 60,
    }, 
  



    
    //Chat last message and date container
    chatInfo:{
        flexDirection: "row",
        position:"absolute",
        bottom:5,
        left: 50,
    },
    //Texts
    chatInfoDate:{
        color:"white",
        paddingLeft:50,
        paddingRight:30
    },

    //Texts
    chatInfoText:{
        color:"white",
        paddingLeft:40,
        maxWidth:200,
        minWidth: 200
        },






    //Providers
    flexRowProv:{
        flexDirection: "row",
        justifyContent:"center"
        
    },
       //Image
    sectionImgProv:{
        height: 65,
        width: 65,
        backgroundColor: "#1e1e1e", 
        borderRadius: 65,
    },
    //Name
    sectionTitleProv: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 60,
        paddingTop: 15
    }, 


});

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
