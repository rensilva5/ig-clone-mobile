import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import PhotoCard from "./PhotoCard";

const bsPhotos = [

    { id: 1, description: 'Selfie w/ Mom'},
    { id: 2, description: 'Photo w/ Breakfast'},
    { id: 3, description: 'Airplane wing in Ske'},
    { id: 4, description: 'My nails done'},
    { id: 5, description: 'Abandoned Dog'},
    { id: 6, description: 'French Bulldog puppy'},
    { id: 7, description: 'Wynwood wall grafitti'},
    { id: 8, description: 'Black and white skyle'},
    { id: 9, description: 'My legs at beach'},
    { id: 10, description: 'My legs at pool'},
    { id: 11, description: 'Latte art with biscuit'},
]

function PhotoList() {
    return (
        <ScrollView style={styles.photoList}>
            {bsPhotos.map(photo => (
                <PhotoCard key={photo.id} photo={photo}/>
            ))}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    photoList: {
        flex: 1,
        backgroundColor: '#e8e8e8',

    }
})

export default PhotoList;
