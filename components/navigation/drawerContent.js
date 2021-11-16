import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props) => {



    return (
        <View style ={{flex:1}}>

            <DrawerContentScrollView {...props}>

                <View style={styles.drawerContent}>

                    <View style={styles.userInfoSection}>

                         <View style={{flexDirection:'row', marginTop:15}}>
                         
                                <Avatar.Image

                                    source={require("../../assets/images/providers/1.png")}
                                    size={50}
                                
                                />

                                <View style={{marginLeft:15, flexDirection:'column'}}>
                                    <Title style={styles.title}>Joana Salas</Title>
                                    <Caption style={styles.caption}>@JoanaMed</Caption>
                                </View>

                         </View>
                    



                        <View style={styles.row}>
                            <View style={styles.section}>

                                <Paragraph style={[styles.paragraph,styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                                
                            </View>
                            <View style={styles.section}>

                                <Paragraph style={[styles.paragraph,styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Follower</Caption>
                                
                            </View>
                        </View>




                    </View>



                    {/*Drawer items */}

                        <Drawer.Section style={styles.drawerSection}>

                            <DrawerItem
                                icon={(color, size, ) =>{
                                    <Icon
                                    
                                    name="home-outline"
                                    color={color}
                                    size={size}

                                    />
                                }}
                                label="Home"
                                onPress={()=>{props.navigation.navigate('Home')}}
                            />

                            <DrawerItem
                                icon={(color, size, ) =>{
                                    <Icon
                                    
                                    name="home-outline"
                                    color={color}
                                    size={size}

                                    />
                                }}
                                label="Settings"
                                onPress={()=>{}}
                            />




                            
                        </Drawer.Section>


                </View>

            </DrawerContentScrollView>




             <Drawer.Section style={styles.bottomDrawerSection}>

                <DrawerItem
                    icon={(color, size, ) =>{
                        <Icon
                        
                        name="exit-to-app"
                        color={color}
                        size={size}

                        />
                    }}
                    label="Sign out"
                    onPress={()=>{props.navigation.navigate('Login')}}
                />

            </Drawer.Section>



        </View>
    );
}



const styles = StyleSheet.create({

    drawerContent:{
        flex:1,
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph:{
        fontWeight:'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor: '#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal:16
    }





  
  
  
  }) 
  

export default DrawerContent;
