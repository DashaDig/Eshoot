import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TextSsr(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(props.ssr)} style={[props.type === 'forgotPass' ? styles.buttonSecond : styles.button]}>
            <Text style={styles.text}>{props.text}<Text style={styles.textBold}>{props.bold}</Text></Text>

        </TouchableOpacity >

    );
}

var styles = StyleSheet.create({
    button: {
        marginTop: 24,
        alignItems: 'center',
    },
    buttonSecond: {
        marginTop: 16,
        alignItems: 'flex-end',
    },
    text: {
        color: "#273C83",
        fontStyle: 'normal',
        fontFamily: 'Roboto_400Regular',
        fontSize: 13,
    },
    textBold: {
        color: "#273C83",
        fontStyle: 'normal',
        fontFamily: 'Roboto_700Bold',
        fontSize: 13,
    }
});