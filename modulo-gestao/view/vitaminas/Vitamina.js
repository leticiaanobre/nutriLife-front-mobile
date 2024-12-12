import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Vitamina = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Tela da Vitamina</Text>
      <Button
        title="Voltar"
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
  },
});

export default Vitamina;
