import { StyleSheet } from "react-native";

export const LoginStyles = StyleSheet.create({
    appBarTitle: {
        fontSize: 22,
        fontWeight: '900',
        textAlign: 'center',
        paddingVertical: 18,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 40,
        height: '100%',
        backgroundColor: 'white',
    },
    button: {
        fontSize: 22,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '900',
        textAlign: 'center',
    
    }
    
})
export const photoCardStyles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 15,
    },
    cardHeader: {
        marginLeft: 1,
        flexDirection: 'row',
    },
    cardHeaderText: {
        marginLeft: 15,
    },
    location: {
        color: 'gray',
        fontSize: 12,
    },
    image: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    },
    cardText: {
        margin: 20,
    },
    cardImage: {
        width: '100%',
        aspectRatio: 1,
        flex: 1,
    }
})


export const photoListStyles = StyleSheet.create({
    photList: {
        flex: 1,
        backgroundColor: 'white'
    }  
})