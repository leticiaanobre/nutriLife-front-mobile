import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const recipes = {
  Cafe: [
    {
      image: require('../../../img/cafe_panqueca.jpg'),
      title: "Panquecas de Aveia",
      description: "Panquecas saudáveis feitas com aveia e banana.",
      ingredients: [
        "- 1 xícara de aveia",
        "- 1 banana madura",
        "- 1 ovo",
        "- 1/2 xícara de leite",
        "- 1 colher de chá de fermento em pó",
        "Mel a gosto"
      ],
      steps: [
        "Bata todos os ingredientes no liquidificador até obter uma massa homogênea.",
        "Aqueça uma frigideira antiaderente e despeje pequenas porções da massa.",
        "Cozinhe até dourar dos dois lados.",
        "Sirva com mel ou frutas de sua preferência."
      ]
    },
    {
      image: require('../../../img/cafe_smoothie.jpg'),
      title: "Acrescente um Smoothie Verde",
      description: "Smoothie nutritivo com espinafre, maçã e gengibre.",
      ingredients: [
        "- 1 xícara de espinafre",
        "- 1 maçã",
        "- 1 pedaço pequeno de gengibre",
        "- 1/2 xícara de água",
        "- 1 colher de sopa de suco de limão"
      ],
      steps: [
        "Coloque todos os ingredientes no liquidificador.",
        "Bata até ficar homogêneo.",
        "Sirva imediatamente."
      ]
    }
  ],
  Lanche: [
    {
      image: require('../../../img/lanche_iogurte.jpg'),
      title: "Iogurte com Granola",
      description: "Iogurte natural com granola e mel.",
      ingredients: [
        "- 1 pote de iogurte natural",
        "- 1/2 xícara de granola",
        "- 1 colher de sopa de mel",
        "- Acrescente uma fruta de sua preferência"
      ],
      steps: [
        "Coloque o iogurte em uma tigela.",
        "Adicione a granola por cima.",
        "Regue com mel e sirva."
      ]
    },
{
  "image": require('../../../img/lanche_cuscuz.jpg'),
  "title": "Ou, se preferir, faça um cuscuz com Frango",
  "description": "Cuscuz marroquino com frango desfiado e legumes.",
  "ingredients": [
    "- 1 xícara de cuscuz marroquino",
    "- 1 xícara de água fervente",
    "- 1 peito de frango cozido e desfiado",
    "- 1 cenoura ralada",
    "- 1 abobrinha picada",
    "- 1/2 pimentão vermelho picado",
    "- 1/2 cebola picada",
    "- 2 dentes de alho picados",
    "- 2 colheres de sopa de azeite de oliva",
    "- Sal e pimenta a gosto",
    "- Salsinha picada para decorar"
  ],
  "steps": [
    "Em uma tigela, coloque o cuscuz e cubra com a água fervente. Tampe e deixe descansar por 5 minutos.",
    "Enquanto isso, aqueça o azeite em uma panela e refogue a cebola e o alho até ficarem dourados.",
    "Adicione o peito de frango desfiado, a cenoura, a abobrinha e o pimentão. Tempere com sal e pimenta e refogue por cerca de 5 minutos.",
    "Solte o cuscuz com um garfo e adicione à mistura de frango e legumes. Misture bem.",
    "Decore com salsinha picada e sirva quente."
  ]
}
  ],
  Almoco: [
    {
      image: require('../../../img/almoco_salada.jpg'),
      title: "Salada de Quinoa",
      description: "Salada fresca com quinoa, tomates e pepino.",
      ingredients: [
        "- 1 xícara de quinoa",
        "- 2 tomates picados",
        "- 1 pepino picado",
        "- 1/4 xícara de azeite de oliva",
        "- Suco de 1 limão",
        "- Sal e pimenta a gosto"
      ],
      steps: [
        "Cozinhe a quinoa conforme as instruções da embalagem.",
        "Deixe esfriar e misture com os tomates e pepino.",
        "Tempere com azeite, suco de limão, sal e pimenta.",
        "Sirva fresca."
      ]
    },
    {
      image: require('../../../img/almoco_frango.jpg'),
      title: "Acrescente um peito de Frango Grelhado",
      description: "Peito de frango grelhado com legumes.",
      ingredients: [
        "- 2 peitos de frango",
        "- 1 colher de sopa de azeite de oliva",
        "- Sal e pimenta a gosto",
        "- Legumes de sua escolha (cenoura, brócolis, etc.)"
      ],
      steps: [
        "Tempere os peitos de frango com azeite, sal e pimenta.",
        "Grelhe em uma frigideira ou grelha até cozinhar completamente.",
        "Cozinhe os legumes no vapor ou grelhe-os.",
        "Sirva o frango com os legumes."
      ]
    }
  ]
};

const Manha = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState('Cafe');

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
      <Text style={styles.title}>Início do dia</Text>
      <Text style={styles.description}>
        Receitas incríveis para o seu café da manhã, lanche intermediário (entre café da manhã e almoço), e sua refeição principal.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, selectedFilter === 'Cafe' && styles.buttonActive]} onPress={() => handleFilterPress('Cafe')}>
          <Text style={[styles.buttonText, selectedFilter === 'Cafe' && styles.buttonTextActive]}>Café</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, selectedFilter === 'Lanche' && styles.buttonActive]} onPress={() => handleFilterPress('Lanche')}>
          <Text style={[styles.buttonText, selectedFilter === 'Lanche' && styles.buttonTextActive]}>Lanche</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, selectedFilter === 'Almoco' && styles.buttonActive]} onPress={() => handleFilterPress('Almoco')}>
          <Text style={[styles.buttonText, selectedFilter === 'Almoco' && styles.buttonTextActive]}>Almoço</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {selectedFilter === 'Cafe' && (
          <>
            {recipes.Cafe.map((recipe, index) => (
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
        {selectedFilter === 'Lanche' && (
          <>
            {recipes.Lanche.map((recipe, index) => (
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
        {selectedFilter === 'Almoco' && (
          <>
            {recipes.Almoco.map((recipe, index) => (
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

export default Manha;
