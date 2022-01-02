import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Button(props) {
    const navigation = useNavigation(); 
    return (
        <TouchableOpacity onPress={() => navigation.navigate(props.ssr)} style={[props.type === "main" ? styles.button : styles.secondButton]}>
            <Text style={styles.text}>{props.text === "" ? "Пусто" : props.text}</Text>
        </TouchableOpacity>
    );
}

var styles = StyleSheet.create({
    button: {
        backgroundColor: "#7D94DF",
        height: 52,
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 16,
    },
    secondButton: {
        borderWidth: 2,
        borderColor: "#7D94DF",
        height: 52,
        alignItems: "center",
        borderRadius: 10,
    },
    text: {
        color: "#fff",
        fontStyle: 'normal',
        fontFamily: 'Roboto_500Medium',
        padding: 10,
        fontSize: 22,
        paddingVertical: 9,
    }
});