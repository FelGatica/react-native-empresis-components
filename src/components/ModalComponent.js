import React from 'react'
import Modal from 'react-native-modal';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import * as colors from '../utilities/styles/colors';
import Text from "./TextComponent"; 


const Modal = props => {   
    return ( 
        <Modal
            testID={props.testID}
            accessibilityLabel={props.accessibilityLabel}
            isVisible={props.isVisible}
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
            onBackButtonPress={props.onBackButtonPress}
        >
            <View style={[styles.container]}>
                <View style={[styles.textContainer, props.textContainerStyles]}>
                    {
                        props.showImage ? (
                            <Image style={styles.image}
                                source={props.imageURL} resizeMode="contain" />
                        ) : null
                    } 
                    {
                        props.title ? (
                            <Text text={props.title} type={props.titleBold ? 'bold' : null} size={16} align={props.titleAlign} color={colors.BLACK} otherStyles={props.textTitleOtherStyle} />
                        ) : null 
                    }
                    {
                        props.textOne ? (
                            <Text text={props.textOne} type={props.textOneBold ? 'bold' : null} size={16} align={props.textOneAlign} color={colors.BLACK} otherStyles={props.textOneOtherStyle} />
                        ) : null 
                    }
                    {
                        props.textTwo ? (
                            <Text text={props.textTwo} type={props.textTwoBold ? 'bold' : null} size={16} align={props.textTwoAlign} color={colors.BLACK} otherStyles={props.textTwoOtherStyle} />
                        ) : null 
                    } 
                    {props.children}
                </View> 
                <View style={[props.textButtonTwo ? styles.containerWithTwoButtons : styles.containerWithOneButtons, props.textButtonOne ? styles.lineTop : null]}>
                    {
                        props.textButtonOne ? (
                            <TouchableOpacity
                                onPress={props.buttonOneModalOnPress}
                                style={[props.textButtonTwo ? [styles.buttonMedium, styles.separator] : styles.buttonFull]}> 
                                <Text text={props.textButtonOne} color={colors.LIGHT_BLUE} size={16} />
                            </TouchableOpacity>
                        ) : null 
                    }
                    {
                        props.textButtonTwo ? (
                            <TouchableOpacity
                                onPress={props.buttonTwoModalOnPress}
                                style={styles.buttonMedium}>
                                <Text text={props.textButtonTwo} color={colors.LIGHT_BLUE} size={16} />
                            </TouchableOpacity>
                        ) : null
                    }
                </View>
            </View>
        </Modal>   
    );
};

const styles = StyleSheet.create({
    container:{  
        backgroundColor: colors.WHITE,
        borderRadius: 16, 
        margin: '5%'
    },
    image: {
        marginVertical: 30,
        resizeMode:'contain'
    },
    textContainer: { 
        alignItems: 'center',
        marginBottom: 20
    },
    lineTop: {
        borderTopColor: colors.GRAY_LIGHT,
        borderTopWidth: 1
    },
    containerWithOneButtons: {
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%'
    },
    containerWithTwoButtons: { 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopColor: colors.GRAY_LIGHT,
        borderTopWidth: 1,
        width: '100%'
    },
    separator: {
        borderRightColor: colors.GRAY_LIGHT,
        borderRightWidth: 1
    },
    buttonMedium: {
        width: '50%', 
        alignItems: 'center',  
        paddingVertical: 17
    }, 
    buttonFull:{
        width: '100%', 
        alignItems: 'center',  
        paddingVertical: 17
    }
});


export default Modal;