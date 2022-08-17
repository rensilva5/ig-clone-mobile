//import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native'
import { photoCardStyles } from '../assets/styles'

import {Avatar, Card, Icon } from 'react-native-elements'


function PhotoCard ({photo}) {

    const BASE_URL = 'https://source.unsplash.com/random?italy='
    return (
        <>
       <View>
        <View style={photoCardStyles.cardContainer}>
        <View style={photoCardStyles.cardHeader}>
            <Avatar rounded source={{uri:`https://randomuser.me/api/portraits/men/${photo.id}.jpg`}}/>
            <View style={photoCardStyles.cardHeaderText}>
                <Text h5>Charly</Text>
                <Text style={photoCardStyles.Location}>Italy</Text>
            </View>
            </View>
            <Icon name='more-vert'/>
        </View>
        
        <Image source={{uri: BASE_URL + 1}} style={photoCardStyles.cardImage}/>
        <Text style={photoCardStyles.cardText}>Multiple images from my Bella Italy</Text>
        <Card.Divider/>
       </View> 
       </>
    )

}

export default PhotoCard