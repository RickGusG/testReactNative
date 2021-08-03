import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import Styled from '../assets/Styled'
import PointsStatus from '../data/PointsStatus.json'
import EmptyComponent from './EmptyComponent'

export default function NavigationBar(props) {
  const {isHome, text, buttonText} = props
  const navigation = useNavigation()
  const [statusArray, setStatusArray] = useState(PointsStatus)

  const clearStatusArray = () => {
    PointsStatus.splice(0, PointsStatus.length)
    navigation.goBack()
  }

  if(isHome) return (
    <View style={Styled.welcomeBar}>
        <Text style={{color: '#C9C9FE', fontSize: 20}}>{text}</Text>
        <Pressable style={Styled.pressable} onPress={() => navigation.navigate(buttonText)}>
            <Text style={{color: '#FEFEFF', fontSize: 20}}>{buttonText}</Text>
        </Pressable>
      </View>
  ) 
  return (
      <View style={Styled.welcomeBar}>
        <Pressable style={Styled.pressable} onPress={() => navigation.navigate('Home')}>
            <Text style={{color: '#FEFEFF', fontSize: 20}}>{buttonText}</Text>
        </Pressable>
        <Text style={{color: '#C9C9FE', fontSize: 20}}>{text}</Text>
        {JSON.stringify(PointsStatus) === '[]' || PointsStatus.some(point => point.status === false) ? <EmptyComponent /> :
        (<Pressable style={Styled.pressable} onPress={clearStatusArray}>
            <Text style={{color: '#FEFEFF', fontSize: 20}}>Limpar</Text>
        </Pressable>)}
      </View>
  )
}
