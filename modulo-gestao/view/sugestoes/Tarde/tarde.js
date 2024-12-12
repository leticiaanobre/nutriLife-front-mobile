import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const recipes = {
  LancheDaTarde: [
    {
      image: require('../../../img/tarde_sanduiche.jpg'),
      title: "Sanduíche Natural",
      description: "Sanduíche saudável com pão integral, peito de peru e vegetais.",
      ingredients: [
        "- 2 fatias de pão integral",
        "- Frango desfiado",
        "- Folhas de alface",
        "- Rodelas de tomate",
        "- 1 colher de sopa de maionese light"
      ],
      steps: [
        "Passe a maionese nas fatias de pão.",
        "Monte o sanduíche com peito de peru, alface e tomate.",
        "Feche o sanduíche e sirva."
      ]
    },
    {
      image: require('../../../img/tarde_iogurte.jpg'),
      title: "Iogurte com Frutas",
      description: "Iogurte natural com pedaços de frutas frescas.",
      ingredients: [
        "- 1 pote de iogurte natural",
        "- 1 banana em rodelas",
        "- 1/2 xícara de morangos picados",
        "- 1 colher de sopa de mel"
      ],
      steps: [
        "Coloque o iogurte em uma tigela.",
        "Adicione as frutas por cima.",
        "Regue com mel e sirva."
      ]
    }
  ],
  Jantar: [
    {
      image: require('../../../img/jantar_sopa.jpg'),
      title: "Sopa de Legumes",
      description: "Sopa nutritiva feita com diversos legumes.",
      ingredients: [
        "- 2 cenouras picadas",
        "- 2 batatas picadas",
        "- 1 abobrinha picada",
        "- 1 cebola picada",
        "- 1 litro de caldo de legumes",
        "- Sal e pimenta a gosto"
      ],
      steps: [
        "Refogue a cebola em um pouco de azeite.",
        "Adicione os legumes e o caldo de legumes.",
        "Cozinhe até os legumes ficarem macios.",
        "Tempere com sal e pimenta e sirva."
      ]
    },
    {
      image: require('../../../img/jantar_omelete.jpg'),
      title: "Ou, se preferir, opte por um omelete de Espinafre",
      description: "Omelete saudável com espinafre e queijo.",
      ingredients: [
        "- 2 ovos",
        "- 1/2 xícara de espinafre picado",
        "- 1/4 xícara de queijo ralado",
        "- Sal e pimenta a gosto"
      ],
      steps: [
        "Bata os ovos com sal e pimenta.",
        "Adicione o espinafre e o queijo.",
        "Despeje a mistura em uma frigideira antiaderente e cozinhe até firmar.",
        "Dobre ao meio e sirva."
      ]
    }
  ],
  Ceia: [
    {
      image: require('../../../img/ceia_cha.jpg'),
      title: "Chá de Camomila",
      description: "Chá calmante para ajudar a relaxar antes de dormir.",
      ingredients: [
        "- 1 sachê de chá de camomila",
        "- 1 xícara de água quente",
        "- Mel a gosto"
      ],
      steps: [
        "Coloque o sachê de chá na xícara.",
        "Despeje a água quente e deixe em infusão por 5 minutos.",
        "Adicione mel a gosto e sirva."
      ]
    },
    {
      image: require('../../../img/ceia_maca.jpg'),
      title: "Maçã Assada",
      description: "Maçã assada com canela e mel.",
      ingredients: [
        "- 1 maçã",
        "- 1 colher de sopa de mel",
        "- 1 colher de chá de canela em pó"
      ],
      steps: [
        "Corte a maçã ao meio e retire as sementes.",
        "Coloque as metades em uma assadeira.",
        "Regue com mel e polvilhe com canela.",
        "Asse a 180°C por 20 minutos.",
        "Sirva quente."
      ]
    }
  ]
};

const Tarde = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState('LancheDaTarde');

  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Sugestoes')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Comidas para a Tarde</Text>
      <Text style={styles.description}>
        Selecione um horário para ver dicas de comidas.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, selectedFilter === 'LancheDaTarde' && styles.buttonActive]} onPress={() => handleFilterPress('LancheDaTarde')}>
          <Text style={[styles.buttonText, selectedFilter === 'LancheDaTarde' && styles.buttonTextActive]}>Lanche da Tarde</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, selectedFilter === 'Jantar' && styles.buttonActive]} onPress={() => handleFilterPress('Jantar')}>
          <Text style={[styles.buttonText, selectedFilter === 'Jantar' && styles.buttonTextActive]}>Jantar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, selectedFilter === 'Ceia' && styles.buttonActive]} onPress={() => handleFilterPress('Ceia')}>
          <Text style={[styles.buttonText, selectedFilter === 'Ceia' && styles.buttonTextActive]}>Ceia</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {selectedFilter === 'LancheDaTarde' && (
          <>
            {recipes.LancheDaTarde.map((recipe, index) => (
              <View key={index} style={styles.recipeContainer}>
                <Image source={recipe.image} style={styles.image} />
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                <Text style={styles.recipeDescription}>{recipe.description}</Text>
                <Text style={styles.sectionTitle}>Ingredientes:</Text>
                {recipe.ingredients.map((ingredient, i) => (
                  <Text key={i} style={styles.recipeDetail}>{ingredient}</Text>
                ))}
                <Text style={styles.sectionTitle}>Passos:</Text>
                {recipe.steps.map((step, i) => (
                  <Text key={i} style={styles.recipeDetail}>{step}</Text>
                ))}
              </View>
            ))}
          </>
        )}
        {selectedFilter === 'Jantar' && (
          <>
            {recipes.Jantar.map((recipe, index) => (
              <View key={index} style={styles.recipeContainer}>
                <Image source={recipe.image} style={styles.image} />
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                <Text style={styles.recipeDescription}>{recipe.description}</Text>
                <Text style={styles.sectionTitle}>Ingredientes:</Text>
                {recipe.ingredients.map((ingredient, i) => (
                  <Text key={i} style={styles.recipeDetail}>{ingredient}</Text>
                ))}
                <Text style={styles.sectionTitle}>Passos:</Text>
                {recipe.steps.map((step, i) => (
                  <Text key={i} style={styles.recipeDetail}>{step}</Text>
                ))}
              </View>
            ))}
          </>
        )}
        {selectedFilter === 'Ceia' && (
          <>
            {recipes.Ceia.map((recipe, index) => (
              <View key={index} style={styles.recipeContainer}>
                <Image source={recipe.image} style={styles.image} />
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                <Text style={styles.recipeDescription}>{recipe.description}</Text>
                <Text style={styles.sectionTitle}>Ingredientes:</Text>
                {recipe.ingredients.map((ingredient, i) => (
                  <Text key={i} style={styles.recipeDetail}>{ingredient}</Text>
                ))}
                <Text style={styles.sectionTitle}>Passos:</Text>
                {recipe.steps.map((step, i) => (
                  <Text key={i} style={styles.recipeDetail}>{step}</Text>
                ))}
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 20
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonActive: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  buttonTextActive: {
    color: '#fff',
  },
  content: {
    paddingBottom: 20,
  },
  recipeContainer: {
    marginBottom: 20,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  recipeDetail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    paddingLeft: 10,
  },
});

export default Tarde;
