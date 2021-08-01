import React, { useEffect, useState } from 'react';
import { Text, View, Image, Switch } from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";
import Styled from '../assets/Styled'
import Separator from '../components/Separator';

const Home = () => {

  const netInfo = useNetInfo()
  const [connection, setConnection] = useState({hasConnection: false, label: 'Offline'})
  const [serviceSwitch, setServiceSwitch] = useState(false)
  const changeServiceSwitch = () => setServiceSwitch(!serviceSwitch)

  const checkConnection = () => {
    setConnection({hasConnection: false, label: 'Offline'})
    if (netInfo && netInfo.isConnected) setConnection({hasConnection: true, label: 'Online'})
  }

  useEffect(() => {
      checkConnection()
  }, [netInfo])

  return (
    <View style={Styled.container}>
        <View style={Styled.welcomeBar}>
          <Text style={{color: '#C9C9FE', fontSize: 20}}>Olá, bem-vindo</Text>
          <Text style={{color: '#FEFEFF', fontSize: 20}}>Status</Text>
        </View>
      <View style={Styled.content}>
        <View style={Styled.connection}>
          <Image source={require('../assets/compass-icon-13553.png')} style={Styled.compassIcon} />
          <View>
            <Text style={{color: '#333F3B', fontSize: 30}}>My GPS - Tracking</Text>
            <Text style={connection.hasConnection?{color: '#57C115', fontSize: 20}:{color: 'crimson', fontSize: 20}}>{connection.label}</Text>
          </View> 
        </View>
      </View>
      <Separator />
      <View style={Styled.content}>
        <View> 
          <View>
            <Text>Status do serviço</Text>
            <Text>Serviço ativo</Text>
          </View>
          <Switch 
            trackColor={{false: '#babaca', true: '#E4E2EB'}} 
            thumbColor={serviceSwitch ? '#55BD12' : '#cacaca'} 
            value={serviceSwitch} 
            onChange={changeServiceSwitch}
          />
        </View>
        <View>
          <Text>Intervalo de comunicação</Text>
          <View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home