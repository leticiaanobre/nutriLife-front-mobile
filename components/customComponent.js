import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CustomComponent = ({ title, text, buttonText, onPress, imageSource }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
        <Image source={imageSource} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
    backgroundColor: "#F2F4F7"
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 140,
    resizeMode: 'contain',
    marginLeft: 20,
  },
});

export default CustomComponent;
