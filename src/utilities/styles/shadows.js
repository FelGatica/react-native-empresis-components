import {StyleSheet, Dimensions} from 'react-native';
import * as colors from './colors'; 

const widthScreen = Dimensions.get('window').width * 0.8

const shadows = StyleSheet.create({
    ios: {
        shadowColor: colors.BLACK12,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 13,
    }, 
    android: {
        width: widthScreen,
        height: widthScreen * 0.6334405,
        justifyContent: 'flex-end',
        borderRadius: 8,
        elevation: 13
    },
    boxShadow: {
        shadowColor: colors.BLACK12,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 13,
    },
    twoSideCardShadow: {
        shadowColor: colors.BLACK12,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 4,
        elevation: 7,
    },
    textCardShadow: { 
        shadowColor: colors.BLACK12,
        shadowOffset: {
            width: -2,
            height: 2,
        },
        shadowOpacity: 10,
        shadowRadius: 3
    }
});

export default shadows;