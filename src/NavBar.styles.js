import {StyleSheet} from 'react-native';

const navBarStyles = {
  navBar: {
    backgroundColor: '#ffffff',
    opacity: 0.9,
    shadowColor: '#888',
    shadowOpacity: 0.6,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  navBarTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
    color: '#444444',
    fontFamily: 'System'
  },
  navBarRightButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'System',
      marginBottom: 3,
      color: '#444444'
  },
  navBarButton: {
      borderRadius: 100,
      backgroundColor: '#f5f5f5',
      marginLeft: 15,
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 40,
      borderStyle: 'solid',
      borderColor: '#eeeeee',
      borderWidth: 1
  } 
};

export default StyleSheet.create(navBarStyles);
