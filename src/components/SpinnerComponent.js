import React from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';
import Text from './TextComponent';
import * as colors from '../utilities/styles/colors';

const SpinnerComponent = props => {

    const spinnerStyle = !props.fixedStyle ? styles.spinner : props.fixedStyle;
    const spinnerSize = !props.size ? 'large' : props.size;
    const spinnerColor = !props.color ? colors.ORANGE : props.color;
    const spinnerText = !props.text ? 'Cargando...' : props.text;
    const spinnerFontAlign = !props.fontAlign ? 'center' : props.fontAlign;

    return (
        <View style={styles.container}>
            <ActivityIndicator
                style={spinnerStyle}
                size={spinnerSize}
                color={spinnerColor}
            />
            <Text
                text={spinnerText}
                align={spinnerFontAlign}
                type={props.textType}
                size={props.textSize}
                color={props.textColor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        height: '100%'
    },
    spinner: {
        paddingVertical: 30,
    }
})

export default SpinnerComponent