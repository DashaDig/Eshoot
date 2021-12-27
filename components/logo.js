import React from 'react';
import { StyleSheet, View } from 'react-native';
import LogoImg from '../assets/logo.svg'; //react-native-svg-transformer
import { Shadow } from 'react-native-shadow-2';


export default function Logo(props) {
    return (
        <View style={[props.type === "onGlass" ? styles.logo : styles.logoB]}>
            <Shadow distance={9} radius={25} startColor={'rgba(255, 255, 255, 0.1)'} >
                <LogoImg width={props.resolution.width} height={props.resolution.height} />
            </Shadow>
        </View>

    );
}

var styles = StyleSheet.create({
    logo: {
        position: 'absolute',
        top: -49,
    },
    logoB: {
    },
})