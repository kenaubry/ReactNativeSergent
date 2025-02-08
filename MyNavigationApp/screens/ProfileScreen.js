// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue sur votre profil !</Text>
      <Button
        title="Retour"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ProfileScreen;
