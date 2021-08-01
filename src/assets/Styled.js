import { StyleSheet } from 'react-native';

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

    separator: {
        width: '100%', 
        borderBottomWidth: 1,
        borderColor: '#DCE2E9'
    },
  }
);

export default Styled