import React from 'react';
import {Text} from 'react-native';
import * as colors from '../utilities/styles/colors';

const Text = props => {
    const hasFontSize = props.size;
    const hasFontColor = props.color;
    const hasFontAlign = props.align;
    const hasOtherStyles = props.otherStyles;
    let fontWeightStyle;

    switch (props.type) {
        case 'light':
            fontWeightStyle = props.font.light;
            break;
        case 'medium':
            fontWeightStyle = props.font.medium;
            break;
        case 'bold':
            fontWeightStyle = props.font.bold;
            break;
        default:
            fontWeightStyle = props.font.book;
            break;
    }


    return (
        <Text
            style={[
                fontWeightStyle,
                hasFontSize ? {fontSize: props.size} : {fontSize: 14},
                hasFontColor ? {color: props.color} : {color: colors.GRAY},
                hasFontAlign ? {textAlign: props.align} : null,
                hasOtherStyles ? props.otherStyles : null,
                props.style
            ]}
            onPress={props.onPress}
            testID={props.testID}
            numberOfLines={props.numberOfLines}
            ellipsizeMode={props.ellipsizeMode}
            accessibilityLabel={props.accessibilityLabel}>{props.text}</Text>
    );
};

export default Text;