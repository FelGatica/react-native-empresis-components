import React from 'react'
import {StyleSheet, View} from "react-native";
import * as colors from "../utilities/styles/colors";
import shadows from "../utilities/styles/shadows";

const Box = props => {
    return (
        <View style={[styles.container, shadows.ios, props.style]}>
            <View style={styles.formContainer}>
                {props.children}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.WHITE,
        borderRadius: 16,
        marginBottom: 10
    },
    formContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20
    },
});

export default Box;