import React, { useEffect, useState } from 'react';
import { Text, View, Image, Switch } from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";
import Styled from '../assets/Styled'
import Separator from '../components/Separator';
import TimeList from '../components/TimeList';
import Geolocation from 'react-native-geolocation-service';
import NavigationBar from '../components/NavigationBar';
import { format } from 'date-fns';
import axios from 'axios';
import PointsToSync from '../data/PointsToSync.json'
import PointsStatus from '../data/PointsStatus.json'

const Home = () => {
  const netInfo = useNetInfo()
  const [connection, setConnection] = useState({hasConnection: false, label: 'Offline'})
  const [serviceSwitch, setServiceSwitch] = useState(true)
  const [selectedInterval, setSelectedInterval] = useState(10000)
  const changeServiceSwitch = () => setServiceSwitch(!serviceSwitch)

  const api = axios.create({
    baseURL: 'http://localhost:8081/'
  })

  const getMyPosition = () => Geolocation.getCurrentPosition(
    (position) => {
      const {coords, timestamp} = position
      const {latitude, longitude, speed} = coords
      const time = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
      const packageID = format(new Date(), 'yyyyMMddHHmmss')

      const pointToSend = {
        id: timestamp.toString(),
        latitude,
        longitude,
        speed,
        time
      }

      const pointToSendWithStatus = {
        id: timestamp.toString(),
        latitude,
        longitude,
        speed,
        time,
        status: false
      }

      const sendPoint = async () => {
        const res = await api.post(`points/${pointToSend.id}`, [pointToSend])
        const {data} = res
        return data
      }

      const sendPointsInLine = async () => {
        const res = await api.post(`points/${packageID}`, PointsToSync)
        const {data} = res
        return data
      }

      if (connection.hasConnection) {
        if (JSON.stringify(PointsToSync) !== '[]') {
          sendPointsInLine()
          PointsToSync.splice(0, PointsToSync.length)
          PointsStatus.map(point => point.status = true)
        }
        if (serviceSwitch) sendPoint(); 
        return
      }

      if (serviceSwitch && !connection.hasConnection) {
        PointsToSync.push(pointToSend)
        PointsStatus.push(pointToSendWithStatus)
        return
      }

    },
    (err) => {
        console.error(err);
    }, 
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  )

  useEffect(() => {
    const interval = setInterval(() => {
      getMyPosition()
    }, selectedInterval)
    return () => clearInterval(interval)
  }, [selectedInterval, connection, serviceSwitch])

  const checkConnection = () => {
    setConnection({hasConnection: false, label: 'Offline'})
    if (netInfo && netInfo.isConnected) setConnection({hasConnection: true, label: 'Online'})
  }

  useEffect(() => {
      checkConnection()
  }, [netInfo])

  return (
    <View style={Styled.container}>
      <NavigationBar isHome={true} text={'Olá, bem-vindo'} buttonText={'Status'} />
      <View style={Styled.content}>
        <View style={Styled.connection}>
          <Image source={require('../assets/compass-icon-13553.png')} style={Styled.compassIcon} />
          <View>
            <Text style={{color: '#333F3B', fontSize: 30}}>My GPS - Tracking</Text>
            <Text style={connection.hasConnection?{color: '#57C115', fontSize: 20}:{color: 'crimson', fontSize: 20}}>{connection.label}</Text>
          </View> 
        </View>
      </View>
      <Separator full />
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