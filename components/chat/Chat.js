
import React from 'react'
import { View, FlatList, Dimensions } from "react-native";
import Card from './Card';
import PropTypes from "prop-types";

const dime = Dimensions.get("screen");

const propTypes = {
    content: PropTypes.array
}
class Chat extends React.PureComponent {


    render() {
        //render content
        const {navigation, content, navigateTo} = this.props;
        return (

                <View>
                    <FlatList 
                        data={content} 
                        renderItem={({item}) => 
                            
                            <Card 
                                navigateTo={navigateTo}
                                navigation={navigation} 
                                item={item}
                            />

                        }
                    ></FlatList>
                </View>

        );
    }


}


Chat.propTypes = propTypes;
export default Chat;






