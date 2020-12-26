import React, { useMemo } from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
/* -------------- Global Components ------------- */
import Text from './TextComponent';
import Separator from './SeparatorComponent';
/* ------------------ Utilities ----------------- */ 
import * as colors from '../utilities/styles/colors';

const SnackbarComponent = props => {
    const hasFontSize = props.size;

    const snackStyles = useMemo(() => {
        switch(props.type) {
            case 'success':
                return {
                    color: colors.GREEN,
                    backgroundColor: colors.GREEN_10,
                }
            case 'error':
                return {
                    color: colors.RED,
                    backgroundColor: colors.RED_10,
                }
            default:
                return {
                    color: colors.BLUE,
                    backgroundColor: colors.LIGHT_BLUE_218,
                }
        }
    }, [props.type]);

    let snackIcon;
    switch(props.type) {
        case 'success':
            snackIcon = (
                <FontAwesome5
                    name={'check-circle'}
                    size={20}
                    solid
                    color={snackStyles.color} />
            );
            break;
        case 'error':
            snackIcon = (
                <Ionicons
                    name={'md-close-circle'}
                    size={20}
                    color={snackStyles.color} />
            );
            break;
        default:
            snackIcon = (
                <Icon
                    name={'info-with-circle'}
                    size={20}
                    color={snackStyles.color} />
            );
    };

    return (
        <View style={[styles.container, {backgroundColor: snackStyles.backgroundColor}]}>
            <View style={styles.containerText}>
                {snackIcon}
                <Separator width={10} />
                {props.text ? (<Text text={props.text} size={hasFontSize ? props.size : 14} color={snackStyles.color} /> ) : 
                (props.otherElement) 
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : { 
        borderRadius: 8,
        padding: 15,
        minHeight: 50,
        width: '100%',
        justifyContent: 'center'
    }, 
    containerText: {
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '100%'
    }
}); 

export default SnackbarComponent;