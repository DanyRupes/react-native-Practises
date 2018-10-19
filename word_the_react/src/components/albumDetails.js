import React from 'react';
import { Text,View,Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button'
import { WebBrowser } from 'expo';


// const {width, height} = React.
const AlbumDetails = ({album}) =>{

    const { title, artist, image,thumbnail_image,url } = album;
    const { 
        header,
        headerContentStyle,
        headerTitleStyle,
        thumbnailContainer,
        thumbnailImage, 
        bodyImageStyle,
        button
         } = styles;
    return(

            <Card>
                <CardSection style={header}>
                    <View style={thumbnailContainer}>
                        <Image
                        style={thumbnailImage}
                        source={{uri : thumbnail_image}} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTitleStyle}>{title}</Text>    
                        <Text>{artist}</Text>    
                    </View>
                </CardSection>
                
                <CardSection>
                    <Image
                    style={bodyImageStyle} 
                    source={{uri: image}}/>
                </CardSection>

                <CardSection>
                    <Button 
                    onPress={()=>WebBrowser.openBrowserAsync(url)} //another technique
                    style={button} 
                    
                    >Buy Now</Button>
                </CardSection>

                </Card>

   
    )
}

const styles = {
    header:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
      
    },
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        
        // fontStyle: 'bold'

    },
    headerTitleStyle:{
    fontSize: 16,
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: 10,
        marginLeft:10
    },
    thumbnailImage :{
        height: 50,
        width: 50,
        marginRight:5
    },
    bodyImageStyle:{
        height: 300,
        flex:1,
        width: null
    },
    button: {
        padding:10,
        borderColor: '#ddd',
        backgroundcolor: '#2980b9',
        marginTop: 2,
        marginBottom: 2,
        justifyContent: 'center',
        alignContent: 'center'

    }
}

export default AlbumDetails;