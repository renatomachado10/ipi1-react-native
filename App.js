import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation'; 

class Index extends React.Component {
    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Olá, Bem-Vindo a AV1!</Text>
        <Text style={styles.paragraph}>Clique no botão abaixo para mais detalhes.</Text>
        <Button
          title="INFORMAÇÕES"
          onPress={() => this.props.navigation.navigate('Info')}
        />
      </View>
    );
  }
}

class Info extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Nome: Renato Machado Neves</Text>
<Text style={styles.paragraph}>Matricula: 0050012586</Text>
<Text style={styles.paragraph}>
https://github.com/renatomachado10/ipi1-react-native/
</Text>
        <Button
          title="VOLTAR"
          onPress={() => this.props.navigation.navigate('Index')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#990000',
  },
});

const RootStack = createStackNavigator(
  {
    Index: Index,
    Info: Info,
  },
  
);

export default class App extends React.Component {
   
  render() {
    return <RootStack />;
  }
}
