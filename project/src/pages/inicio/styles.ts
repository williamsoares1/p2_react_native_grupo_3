import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fundo: {
    width: '100%',
    height: '100%'
  },
  textoinicio: {
    color: '#fff',
    fontSize: 15, 
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay'

  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 110,
    borderRadius: 50,
    backgroundColor: 'transparent',
  },
  buttonPressed: {
    backgroundColor: 'rgba(255, 102, 196, 3.0)',
  },
  botaologin: {
    textAlign: 'center',
    fontFamily: 'BebasNeue',
    color: '#fff',
    fontSize: 25,
  },
  containercadastro: {
    marginTop: '10%',
  },
  cadastroTexto: {
    marginTop: 65,
    textAlign: 'center',
    color: '#DCDCDC',
    paddingRight: 5,
    fontSize: 15,
    fontFamily: 'BebasNeue',
  },
  cadastroTexto2: {
    textAlign: 'center',
    color: '#DCDCDC',
    paddingRight: 5,
    fontSize: 15,
    fontFamily: 'BebasNeue',
  },
  cliqueaqui: {
    textAlign: 'center',
    color: '#ff66c4',
    fontSize: 15,
    fontFamily: 'BebasNeue',
  },
  textoContainer: {
    marginBottom: 150,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
});