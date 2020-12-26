import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as colors from '../utilities/styles/colors';

const Blur = () => {
    return (
        <View style={styles.blur}>
            {
                props.logo 
            }
            {
                props.image
            }
        </View>
    )
}

const styles = StyleSheet.create({
    blur: {
        backgroundColor: colors.WHITE,
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Blur;