import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image
          source={require('./assets/gojek.png')}
          style={styles.logo}
          resizeMode="cover"
        />
        <Text style={styles.welcomeText}>Welcome di Gojek</Text>
        <Text style={styles.descriptionText}>
          Gojek adalah antar jemput yang cepat dan ontime
        </Text>
        <Text style={styles.descriptionText}>
          Jangan lupa pesan di Gojek kami
        </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Text style={[styles.button, styles.loginButton]}>Login</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Text style={[styles.button, styles.registerButton]}>Register</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 15,
    opacity: 0.4,
    zIndex: -1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 190,
    marginTop: 50,
    opacity: 1,
    zIndex: 1,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 40,
  },
  descriptionText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  buttonWrapper: {
    marginHorizontal: 10,
  },
  button: {
    width: 100,
    height: 50,
    color: 'white',
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 20,
    borderRadius: 10,
    marginTop: 80,
  },
  loginButton: {
    backgroundColor: 'blue',
  },
  registerButton: {
    backgroundColor: 'green',
  },
});

export default App;
