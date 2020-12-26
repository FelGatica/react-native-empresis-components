import React from 'react';
import {View} from 'react-native';
/* ------------------ Utilities ----------------- */ 
import {ORANGE} from '../utilities/styles/colors';


const Separator = props => ( 
  props.isLineSeparator ? 
    <View style={{
      height: props.height,
      width: props.width,
      backgroundColor: props.color || ORANGE,
      marginVertical: props.verticalSpacing || 0,
      marginHorizontal: props.horizontalSpacing || 0
      }} /> :
      <View style={{
        height: props.height|| 0,
        width: props.width || 0
      }} />)

export default Separator;