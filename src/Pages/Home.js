import React, { useEffect, useState } from 'react';
import { Text, View, Image, Switch } from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";
import Styled from '../assets/Styled'
import Separator from '../components/Separator';
import TimeList from '../components/TimeList';
import Geolocation from 'react-native-geolocation-service';

const Home = () => {
  const netInfo = useNetInfo()
  const [connection, setConnection] = useState({hasConnection: false, label: 'Offline'})
  const [serviceSwitch, setServiceSwitch] = useState(true)
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  const [selectedInterval, setSelectedInterval] = useState(10000)
  const changeServiceSwitch = () => setServiceSwitch(!serviceSwitch)

  const getMyPosition = Geolocation.getCurrentPosition(
    (position) => {
      const {latitude, longitude} = position
      setLatitude(latitude)
      setLongitude(longitude)
    },
    (err) => {
        console.error(err);
    }, 
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  )

  // useEffect(() => {
  //   const interval = setInterval(() => {

  //   }, selectedInterval)
  //   return () => clearInterval(interval)
  // }, [])

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
        <View style={Styled.viewRow}> 
          <View>
            <Text style={Styled.contentTitle}>Status do serviço</Text>
            {serviceSwitch ? <Text style={Styled.contentParagraph}>Serviço ativo</Text> : <Text style={Styled.contentParagraph}>Serviço inativo</Text>}
          </View>
          <Switch 
            trackColor={{false: '#babaca', true: '#E4E2EB'}} 
            thumbColor={serviceSwitch ? '#55BD12' : '#cacaca'} 
            value={serviceSwitch} 
            onChange={changeServiceSwitch}
          />
        </View>
        <View>
          <Text style={Styled.contentTitle}>Intervalo de comunicação</Text>
          <View>
            <TimeList selectedInterval={(data) => setSelectedInterval(data.value * 1000)} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home