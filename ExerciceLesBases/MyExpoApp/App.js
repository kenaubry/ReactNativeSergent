// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

/**
 * Composant enfant : Greeting
 * Affiche un message de bienvenue personnalisé.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.name - Le nom de l'utilisateur.
 */
const Greeting = ({ name }) => {
  return (
    <Text style={styles.greetingText}>Bienvenue, {name} !</Text>
  );
};

/**
 * Composant principal : UserProfile
 * Affiche une carte de profil avec le nom, l'âge, un message de bienvenue,
 * un compteur de likes et deux boutons pour incrémenter ou réinitialiser le compteur.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.name - Le nom de l'utilisateur.
 * @param {string|number} props.age - L'âge de l'utilisateur.
 */
const UserProfile = ({ name, age }) => {
  // Déclaration d'un état "likes" initialisé à 0
  const [likes, setLikes] = useState(0);

  /**
   * useEffect s'exécute à chaque fois que "likes" change.
   * Il affiche la nouvelle valeur dans la console.
   * Si le nombre de likes est un multiple de 5 (et non nul), il affiche un message de félicitations.
   */
  useEffect(() => {
    console.log(`Nouveau nombre de likes : ${likes}`);
    if (likes !== 0 && likes % 5 === 0) {
      console.log(`Bravo, vous avez atteint ${likes} likes !`);
    }
  }, [likes]);

  // Fonction pour incrémenter le compteur de likes
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Fonction pour réinitialiser le compteur de likes
  const handleReset = () => {
    setLikes(0);
  };

  return (
    <View style={styles.card}>
      {/* Affichage du nom et de l'âge */}
      <Text style={styles.title}>Profil de {name}</Text>
      <Text style={styles.subtitle}>Âge : {age}</Text>

      {/* Utilisation du composant Greeting */}
      <Greeting name={name} />

      {/* Affichage du nombre de likes */}
      <Text style={styles.likesText}>Likes : {likes}</Text>

      {/* Boutons pour incrémenter et réinitialiser le compteur */}
      <View style={styles.buttonContainer}>
        <Button title="Like" onPress={handleLike} />
        <Button title="Reset" onPress={handleReset} color="#d9534f" />
      </View>
    </View>
  );
};

/**
 * Composant racine de l'application.
 * Affiche le composant UserProfile avec des données de test.
 */
const App = () => {
  return (
    <View style={styles.container}>
      <UserProfile name="Alice" age={25} />
    </View>
  );
};

/**
 * Définition des styles utilisés dans l'application.
 */
const styles = StyleSheet.create({
  // Style pour le conteneur principal
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  // Style pour la carte de profil
  card: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    // Ombre pour iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    // Ombre pour Android
    elevation: 3,
    width: '80%',
    alignItems: 'center',
  },
  // Style pour le titre (nom de l'utilisateur)
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  // Style pour le sous-titre (âge de l'utilisateur)
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  // Style pour le message de bienvenue du composant Greeting
  greetingText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 15,
  },
  // Style pour afficher le nombre de likes
  likesText: {
    fontSize: 18,
    marginBottom: 10,
  },
  // Style pour le conteneur des boutons
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
});

export default App;
