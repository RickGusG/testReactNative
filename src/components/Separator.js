import React from 'react'
import { Dimensions, View } from 'react-native';
import Styled from '../assets/Styled';

const Separator = (props) => {
    const {full} = props
    const {width} = Dimensions.get('window')
    if (full) return <View style={Styled.separator}></View>
    return <View style={Styled.separator}{...{alignSelf: 'center', width: width - 40}}></View>
}

export default Separator