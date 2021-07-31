import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Switch } from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";

export default function App() {

  const netInfo = useNetInfo()
  const [connection, setConnection] = useState({hasConnection: false, label: 'Offline'})
  const [serviceSwitch, setServiceSwitch] = useState({hasConnection: false, label: 'Offline'})
  const changeServiceSwitch = () => setServiceSwitch(!serviceSwitch)

  const checkConnection = () => {
    setConnection({hasConnection: false, label: 'Offline'})
    if (netInfo.isConnected) setConnection({hasConnection: true, label: 'Online'})
  }

  useEffect(() => {
      checkConnection()
  }, [netInfo])

  return (
    <View style={styles.container}>
        <View style={styles.welcomeBar}>
          <Text style={{color: '#C9C9FE', fontSize: 20}}>Olá, bem-vindo</Text>
          <Text style={{color: '#FEFEFF', fontSize: 20}}>Status</Text>
        </View>
      <View style={styles.content}>
        <View style={styles.connection}>
          <Image source={require('./assets/compass-icon-13553.png')} style={styles.compassIcon} />
          <View>
            <Text style={{color: '#333F3B', fontSize: 30}}>My GPS - Tracking</Text>
            <Text style={connection.hasConnection?{color: '#57C115', fontSize: 20}:{color: 'crimson', fontSize: 20}}>{connection.label}</Text>
          </View> 
        </View>
      </View>
      <View style={{width: '100%', borderBottomWidth: 1, borderColor: '#DCE2E9'}}></View>
      <View style={styles.content}>
        <View>
          <View>
            <Text>Status do serviço</Text>
            <Text>Serviço ativo</Text>
          </View>
          <Switch value={serviceSwitch} onChange={changeServiceSwitch} />
        </View>
        <View>
          <Text>Intervalo de comunicação</Text>
          <View>
            <Text>{netInfo.isConnected.toString()}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7FF',
  },

  welcomeBar: {
    backgroundColor: '#213283',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 70,
    paddingHorizontal: 20,
  },

  compassIcon: {
    height: 57,
    width: 57,
    marginRight: 10,
    tintColor: '#213283'
  },

  connection: {
    flexDirection: 'row',
    marginVertical: 50
  },

  content: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 20
  },
});
