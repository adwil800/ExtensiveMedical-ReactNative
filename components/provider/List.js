
import React from 'react'
import { View, FlatList } from "react-native";
import Card from './Card';
import PropTypes from "prop-types";
//<></>


const propTypes = {
    content: PropTypes.array
}
class List extends React.PureComponent {


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


List.propTypes = propTypes;
export default List;






