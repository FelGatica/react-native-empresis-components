/* -------------- Libraries - React ------------- */  
import React, { useState, useRef, useEffect } from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native'; 
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
/* -------------- Global Components ------------- */ 
import * as colors from '../utilities/styles/colors';

const inputTheme = {
    colors: {
        text: colors.GRAY,
        primary: colors.LIGHT_BLUE,
        background: colors.WHITE,
        placeholder: colors.GRAY_MAGNESIUM,
        error: colors.RED,
    },
    fonts: {
        regular: props.font.medium,
        medium: props.font.medium,
        light: props.font.medium,
        thin: props.font.medium
    },
    roundness: 8
};

const TextInput = props => {

    const [showSecureText, setShowSecureText] = useState(props.secureTextEntry);
    const inputPassword = useRef(null);

    useEffect(() =>{
        inputPassword.current.setNativeProps({
            style: {fontFamily: 'GothamRounded-Medium'}
        });
    }, [showSecureText]);

    const eyeImage = (
        <Icon
            name="eye"
            size={28} 
            color={colors.GRAY_MAGNESIUM}
            style={styles.icon}
        />
    );

    const eyeBlockedImage = (
        <Icon
            name="eye-off"
            size={28} 
            color={colors.GRAY_MAGNESIUM}
            style={styles.icon}
        />
    );

    return (
        <View>
            <TextInput
                ref={inputPassword}
                testID={props.testID}
                accessibilityLabel={props.accessibilityLabel}
                mode="outlined"
                label={props.placeholder}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                returnKeyType="done"
                dense
                style={{height: 48}}
                theme={inputTheme}
                selectionColor={colors.LIGHT_BLUE}
                value={props.value}
                onChangeText={props.onChangeText}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                maxLength={props.maxLength}
                editable={props.editable}
                error={props.error}
                secureTextEntry={props.secureTextEntry && showSecureText}
            />

            {props.secureTextEntry && (
                <TouchableOpacity
                    onPress={() => setShowSecureText(prevState => !prevState)}
                    value={showSecureText}
                    style={styles.button}
                    testID="togglePassword"
                    accessibilityLabel="togglePassword">
                    {showSecureText ? eyeImage : eyeBlockedImage}
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 50,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    icon: {
        width: 30,
        height: 30,
    },
});


export default TextInput;