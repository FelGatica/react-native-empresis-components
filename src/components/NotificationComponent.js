import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import * as colors  from "../utilities/styles/colors" 

const Notification = props => {  

    const font = props.font;
    let titleStyle = {};
    let messageStyle = {};

    switch (props.type) {
        case 'warn' :
            titleStyle = styles.titleWarn;
            messageStyle = styles.messageWarn;
            break;
        default: 
            titleStyle = styles.titleInfo;
            messageStyle = styles.messageInfo;
            break;
    }

    return (
        <DropdownAlert
            ref={props.onRef}
            imageStyle={styles.iconNotif}
            messageStyle={messageStyle}
            onCancel={props.onCancel}
            onTap={props.onTap}
            titleStyle={titleStyle}
            infoColor={colors.BLUE}
            infoImageSrc={props.iconInfo} 
            warnColor={colors.LIGHT_ORANGE}
            warnImageSrc={props.iconWarning}
            closeInterval={0}
            showCancel={true}
            cancelBtnImageStyle={styles.iconClose}
            messageNumOfLines={5}
            updateStatusBar={false}
            contentContainerStyle={{...styles.contentContainerStyle, marginTop: props.marginTop}}
        />
    )
}


const styles = StyleSheet.create({
    contentContainerStyle: { 
        flex: 1, 
        flexDirection: 'row'
    },
    iconClose: { 
        padding: 8, 
        width: 26, 
        height: 26, 
        alignSelf: 'center' 
    },
    iconNotif: {
        padding: 8, 
        width: 28, 
        height: 28, 
        alignSelf: "auto",
        marginTop: 4
    },
    titleInfo:{ 
        ...font.bold,
        fontSize: 18, 
        textAlign: 'left', 
        color: 'white', 
        backgroundColor: 'transparent' 
    },
    titleWarn:{ 
        ...font.bold,
        fontSize: 18, 
        textAlign: 'left', 
        color: 'black', 
        backgroundColor: 'transparent' 
    },
    messageInfo:{
        ...font.book,
        fontSize: 14, 
        lineHeight: Platform.OS === 'android' ? 16:18,
        textAlign: 'left', 
        color: 'white', 
        backgroundColor: 'transparent',
        marginTop:Platform.OS === 'android' ? 2:5,
    },
    messageWarn:{
        ...font.book,
        fontSize: 14, 
        lineHeight: Platform.OS === 'android' ? 16:18,
        textAlign: 'left', 
        color: 'black', 
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'android' ? 2:5,
    }
});

export default Notification;