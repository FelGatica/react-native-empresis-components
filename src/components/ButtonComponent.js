import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import * as colors from '../utilities/styles/colors';

const Button = props => {
    let backgroundColorStyle;
    let textColorStyle;
    let borderStyle;
    let fontWeightStyle;

    switch (props.type) {
        case 'primary':
            backgroundColorStyle = styles.primaryBackground;
            textColorStyle = styles.primaryTextColor;
            borderStyle = styles.primaryBorder;
            break;
        case 'secondary':
            backgroundColorStyle = styles.secondaryBackground;
            textColorStyle = styles.secondaryTextColor;
            borderStyle = styles.secondaryBorder;
            break;
        case 'tertiary':
            backgroundColorStyle = styles.secondaryBackground;
            textColorStyle = styles.secondaryTextColor;
            break;
        case 'cuartary':
            backgroundColorStyle = styles.cuartaryBackground;
            textColorStyle = styles.cuartaryTextColor;
            borderStyle = styles.cuartaryBorder;
            break;
        default:
            backgroundColorStyle = styles.primaryBackground;
            textColorStyle = styles.primaryTextColor;
            borderStyle = styles.borderNone;
            break;
    }
    switch (props.weight) {
        case 'normal':
            fontWeightStyle = props.font.book;
            break;
        case 'bold':
            fontWeightStyle = props.font.bold;
            break;
        default:
            fontWeightStyle = props.font.medium;
    }

    const hasFontSize = props.fontSize && props.fontSize > 0;
    const hasTitle = props.title && props.title.length > 0;
    const theTitle = hasTitle ? (
        <Text
            style={[
                styles.title,
                fontWeightStyle,
                textColorStyle,
                hasFontSize ? {fontSize: props.fontSize} : null,
                props.titleStyle,
            ]}>
            {props.title}
        </Text>
    ) : (
        props.children
    );

    return (
        <TouchableOpacity
            testID={props.testID}
            accessibilityLabel={props.accessibilityLabel}
            style={[
                styles.button,
                borderStyle,
                props.containerStyle,
                props.disabled ? styles.disabledStyle : backgroundColorStyle,
                props.smallButton ? styles.smallButton : styles.normalButton,
            ]}
            onPress={props.onPress}
            disabled={props.disabled || props.disabledWithColorActive}>
            {theTitle}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        justifyContent: 'center',
    },
    primaryBackground: {
        backgroundColor: colors.ORANGE,
    },
    primaryBorder: {
        borderColor: colors.ORANGE,
        borderWidth: 1,
    },
    borderNone: {
        borderWidth: 0,
    },
    primaryTextColor: {
        color: colors.WHITE,
    },
    secondaryBackground: {
        backgroundColor: colors.WHITE,
    },
    secondaryBorder: {
        borderColor: colors.ORANGE,
        borderWidth: 1,
    },
    secondaryTextColor: {
        color: colors.ORANGE,
    },
    cuartaryBackground: {
        backgroundColor: colors.VIOLET,
    },
    cuartaryTextColor: {
        color: colors.WHITE,
    },
    cuartaryBorder: {
        borderRadius: 31,
        borderWidth: 0,
    },
    title: {
        color: colors.WHITE,
        fontSize: 18,
        textAlign: 'center',
        alignSelf: 'stretch',
    }, 
    disabledStyle : {
        backgroundColor : colors.GRAY_MEDIUM,
        borderColor : colors.GRAY_MEDIUM,
    },
    smallButton: {
        padding: 12,
        paddingBottom: Platform.OS === 'ios' ? 6 : null,
    },
    normalButton: {
        padding: 16,
        paddingBottom: Platform.OS === 'ios' ? 10 : null,
    }
});

export default Button;
