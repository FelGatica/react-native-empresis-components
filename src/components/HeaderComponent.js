import React from 'react';
import { View, Platform, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import * as colors from '../utilities/styles/colors';

const Header = props => {

    const renderContent = () => {
        return (
            <View style={styles.content}>
                <View style={styles.left}>{props.left}</View>
                <View style={styles.center}>{props.center}</View>
                <View style={styles.right}>{props.right}</View>
            </View>
        )
    };

    const renderHeaderWithImage = () => {
        return (
            <ImageBackground style={styles.container} resizeMode='stretch' source={props.imageSource}>
                {renderContent()}
            </ImageBackground>
        )
    };

    const renderHeaderWithoutImage = () => {
        return (
            <View style={[{ backgroundColor: colors.WHITE }, styles.container]}>
                {renderContent()}
            </View>
        )
    };

    return (
        props.image ? renderHeaderWithImage() : renderHeaderWithoutImage()
    );
};

const styles = StyleSheet.create({
    container: {
        top: 0,
        width: Dimensions.get('window').width
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Platform.OS === 'ios' ? 8.4 : 17,
        marginTop: Dimensions.get('window').height * 0.06,
        height: Dimensions.get('window').height * 0.03
    },
    left: {
        width: Dimensions.get('window').width * 0.15,
    },
    center: {
        width: Dimensions.get('window').width * 0.70,
        alignItems: 'center'
    },
    right: {
        width: Dimensions.get('window').width * 0.15,
    }
});

export default Header;