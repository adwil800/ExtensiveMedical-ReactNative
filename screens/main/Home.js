import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from "react-native";
import { SliderBox } from  "react-native-image-slider-box";

//Pure component call without brackets

//phone dimensions
const dime = Dimensions.get("screen");

const Home = ({navigation}) => {

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  //runs only once
  useEffect(() => {
        setLoaded(true);

    //Update data every certain timeout, empty array to only call once
  }, []);;
  

    return (
        <React.Fragment> 

            {loaded && !error && (
            <ScrollView style={styles.body}> 

                {/*Carousel*/}
                <View >
                    <SliderBox
                    images={[
                        require('../../assets/images/slider/1.jpg'),
                        require('../../assets/images/slider/2.jpg'),
                        require('../../assets/images/slider/3.jpg'),
                    ]} 
                    sliderBoxHeight={250} 
                    autoplay={true} 
                    circleLoop={true}
                    dotStyle={{height: 0}}
                    />
                    {error && <Text style = {{color: "red"}}> error: </Text>}
                </View>
                    
                {/*Section*/}
                <View style={styles.section}>
                    {/*Section menu*/}
                    {/*Results*/}
                    <TouchableOpacity  style={styles.sectionMenu}>
                        <View>
                            <Text style={styles.sectionText}>{"Resultados"}  
                            </Text>
                            <Image
                                style={styles.sectionImage}
                                source={require('../../assets/images/flask.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    {/*Prescriptions*/}
                    <TouchableOpacity style={styles.sectionMenu}>
                        <View>
                            <Text style={styles.sectionText}>{"Prescripciones"}  
                            </Text>
                            <Image
                                style={styles.sectionImage}
                                source={require('../../assets/images/prescription.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    {/*Referrals*/}
                    <TouchableOpacity style={styles.sectionMenu}>
                        <View>
                            <Text style={styles.sectionText}>{"Referidos"}  
                            </Text>
                            <Image
                                style={styles.sectionImage}
                                source={require('../../assets/images/research.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    {/*Chat*/}
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Chat")}
                        style={styles.sectionMenu}
                    >
                        <View>
                            <Text style={styles.sectionText}>{"Chat"}  
                            </Text>
                            <Image
                                style={styles.sectionImage}
                                source={require('../../assets/images/chat.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    {/*Providers*/}
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Providers")}
                        style={styles.sectionMenu}
                    >
                        <View>
                            <Text style={styles.sectionText}>{"Proveedores"}  
                            </Text>
                            <Image
                                style={styles.sectionImage}
                                source={require('../../assets/images/Logo.png')}
                            />
                        </View>
                    </TouchableOpacity>





                </View>
                {/*Section*/}

            </ScrollView> 
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
    section:{
        padding: 10,
    },
    sectionTitle:{
        fontSize: 22,
        color: "white",
        alignItems: "center",
        fontWeight: "bold"
    },
    sectionMenu:{
        height: 80,
        backgroundColor: "#3056d3",
        width: "100%",
        borderRadius: 10,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
    },
    sectionText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    sectionImage:{
        height: 50,
        width: 50,
        position: "absolute",
        top: "-50%",
        right: "-20%"
    }


});

export default Home;

