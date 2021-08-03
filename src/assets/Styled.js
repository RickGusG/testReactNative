import { Dimensions, StyleSheet } from 'react-native';
const {height, width} = Dimensions.get('window')
const Styled = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F7FF',
    },
  
    welcomeBar: {
      backgroundColor: '#213283',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: width,
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

    separator: {
        width: width, 
        borderBottomWidth: 1,
        borderColor: '#DCE2E9'
    },

    timeListItemView: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 65,
      width: 65,
      borderWidth: 1,
      borderColor: '#B5BDC4',
      borderRadius: 5
    },

    timeListItemViewSelected: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 65,
      width: 65,
      borderWidth: 1,
      borderColor: '#56BF12',
      backgroundColor: '#EDF3F1',
      borderRadius: 5
    },

    timeListItemTextSelected: {
      fontSize: 20,
      color: '#333F3B'
    },

    timeListItemText: {
      fontSize: 20,
      color: '#B5BDC4'
    },

    timeListView: {
      alignSelf: 'center',
      width: width - 41,
      justifyContent: 'space-between',
      marginTop: 20
    },

    viewRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width - 40,
      marginVertical: 30
    },

    contentParagraph: {
      fontSize: 15,
      color: '#333F3B'
    },

    contentTitle: {
      fontSize: 20,
      color: '#333F3B'
    },

    pressable: {
      height: 55,
      width: 55, 
      justifyContent: 'center', 
      alignItems: 'center'
    },

    nothingToSync: {
      justifyContent: 'center', 
      alignItems: 'center', 
      flex: 1, 
      backgroundColor: '#F9F7FF'
    },
  }
);

export default Styled