import React from 'react';
import {View, StyleSheet} from 'react-native';
import shadows from '../utilities/styles/shadows';
import * as colors from '../utilities/styles/colors';

const Card = props => {

    const containerStyle = StyleSheet.flatten([
        props.withShadow ? shadows.boxShadow : null,
        props.style,
    ]);
    
    const contentStyle = StyleSheet.flatten([
        styles.content,
        props.contentStyle
    ]);

    return (
        <View style={containerStyle}>
            <View style={styles.card}>
                <View style={styles.gradient}>
                    {props.gradientImage}
                </View>
                <View style={contentStyle}>
                    {props.children}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
    },
    gradient: {
        backgroundColor: colors.ORANGE,
        width: 10,
    },
    gradientImage: {
        zIndex: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        minHeight: 120,
        height: '100%',
        bottom: 0,
        width: '100%'
    },
    content: {
        flex: 1,
        padding: 15,
        paddingRight: 25,
        backgroundColor: colors.GRAY_LIGHT,
    },
});

export default Card;