import { StyleSheet } from "react-native";

export const s = StyleSheet.create({ 
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameCity: {
        fontSize: 13,
        color: '#000',
        fontFamily: 'Roboto',
    },
    airportCity: {
        fontSize: 28,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    groupIcon: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hours: {
        fontSize: 13,
        color: '#000',
        fontFamily: 'Arial',
    },
})