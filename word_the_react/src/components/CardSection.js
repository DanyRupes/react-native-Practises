import React from 'react';
import { View } from 'react-native';

const cardSection = (props)=>{
    return(
        <View style={style.sectionContainer}>
            {props.children}
        </View>
    )
}

const style = {
    sectionContainer: {
        borderBottomWidth: 1,
        padding:5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }

}

export default cardSection;