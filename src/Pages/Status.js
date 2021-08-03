import axios from 'axios'
import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import Styled from '../assets/Styled'
import NavigationBar from '../components/NavigationBar'
import Separator from '../components/Separator'
import PointsStatus from '../data/PointsStatus.json'

const Status = () => {

  const ItemComponent = ({item}) => {
    return (
      <View style={{marginVertical: 30}}>
        <View style={Styled.viewRow}{...{marginVertical: 0}}>
          <Text style={Styled.contentTitle} >Pacote ID: {item.id}</Text>
          <Text style={{color: '#B5BDC4'}}>{item.time.substring(item.time.length - 8, item.time.length - 3)}</Text>
        </View>
        {item.status ? <Text>Sincronizado</Text> : <Text>Pendente sincronizar</Text>}
      </View>
    )
  }

  if (JSON.stringify(PointsStatus) === '[]') return (
  <View style={Styled.container}>
    <NavigationBar text={'Status'} buttonText={'Voltar'} />
    <View style={Styled.nothingToSync}>
      <Text style={Styled.contentTitle}>Não há pontos na fila. =D</Text>
    </View>
  </View>
)
  return (
    <View style={Styled.container}>
      <NavigationBar text={'Status'} buttonText={'Voltar'} />
      <View style={Styled.content}>
        <FlatList ItemSeparatorComponent={() => <Separator />} data={PointsStatus} renderItem={({item}) => <ItemComponent item={item} />} />
      </View>
    </View>
  )
}

export default Status