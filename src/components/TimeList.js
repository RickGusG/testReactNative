import React, { useState } from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import Styled from '../assets/Styled'

const TimeList = ({selectedInterval}) => {

  const [data, setData] = useState([{value: 10, selected: true}, {value: 5, selected: false}, {value: 3, selected: false}, {value: 1, selected: false}])

  const ItemComponent = ({item}) => {

    const changeNumberSelected = (dataParam, item) => {
      const newData = dataParam.map(dataItem => dataItem.value === item.value ? {value: dataItem.value, selected: true} : {value: dataItem.value, selected: false})
      setData(newData)
    }

    return (
      <Pressable onPress={() => {changeNumberSelected(data, item); selectedInterval(item)}}>
        <View style={item.selected ? Styled.timeListItemViewSelected : Styled.timeListItemView}>
          <Text style={item.selected ? Styled.timeListItemTextSelected : Styled.timeListItemText}>{item.value}s</Text>
        </View>
      </Pressable>
    )
  }

  return (
    <View>
      <FlatList 
          contentContainerStyle={Styled.timeListView}
          horizontal={true} 
          data={data} 
          renderItem={({item}) => <ItemComponent item={item} />} 
      />
    </View>
  )
}

export default TimeList