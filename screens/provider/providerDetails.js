import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, Text } from "react-native";
//Pure component call without brackets

//phone dimensions
const dime = Dimensions.get("screen");


const Details = ({route, navigation}) => {

  //const {name, path, summary, title} = route.params;
  
    const name = route.params.name,
          profile = route.params.profile,
          summary = route.params.summary,
          title = route.params.title;
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

                    <Image
                        style={styles.sectionImage}
                        source={{uri:profile}}
                    />
                    <View style={styles.alignChilds}>
                        {/*Provider name*/}
                        <Text style={styles.sectionName}>{name}</Text>
                        
                        {/*Provider titles*/}
                        <View>
                            <Text style={styles.sectionTitle}>{title}</Text>
                        </View>

                        {/*Provider summary*/}
                        <View>
                            <Text style={styles.sectionSummary}>{summary}</Text>
                        </View>
                        {/*Provider service center*/}
                        {/*Provider education*/}
                        
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
    section:{
        padding: 10,
    },
    alignChilds:{
        alignItems: "center"
    },
    sectionImage:{
        height: dime.height/3,
        width: dime.width,
        resizeMode: 'contain',
    },
    sectionName:{
        fontSize: 30,
        color:"white",
        fontWeight:"bold",
        padding: 10
    },
    sectionTitle:{
        fontSize: 20,
        color:"white",
    },
    sectionSummary:{
        padding:10,
        fontSize: 17,
        color:"white",
        textAlign: "justify"
    }
    
});

export default Details;
 