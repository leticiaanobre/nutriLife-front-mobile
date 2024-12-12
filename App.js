import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase from 'firebase';
import firebaseConfig from './modulo-gestao/database/dbConfig';
import Login from './modulo-gestao/view/initial/login';
import TelaCadastro from './modulo-gestao/view/initial/cadastro';
import Home from './modulo-gestao/view/home/home';
import SobreApp from './modulo-gestao/view/SobreApp';
import SobreDesenvolvedores from './modulo-gestao/view/SobreDesenvolvedores';
import VitaminaA from './modulo-gestao/view/vitaminas/A/VitaminaA';
import VitaminaB from './modulo-gestao/view/vitaminas/B/VitaminaB';
import VitaminaC from './modulo-gestao/view/vitaminas/C/VitaminaC';
import VitaminaD from './modulo-gestao/view/vitaminas/D/VitaminaD';
import VitaminaE from './modulo-gestao/view/vitaminas/E/VitaminaE';
import VitaminaK from './modulo-gestao/view/vitaminas/K/VitaminaK';
import NutriDetail from './modulo-gestao/view/NutriDetail';
import Sobre from './modulo-gestao/view/Sobre';
import Rotina from './modulo-gestao/view/carroussel/telas/rotina'
import Exercicios from './modulo-gestao/view/carroussel/telas/exercicios'
import Alimentos from './modulo-gestao/view/carroussel/telas/alimentos'
import Atividades from './modulo-gestao/view/carroussel/telas/atividades'
import Section from './modulo-gestao/view/carroussel/section'
import Sugestoes from './modulo-gestao/view/sugestoes/sugetoes'
import Manha from './modulo-gestao/view/sugestoes/Manha/manha'
import Tarde from './modulo-gestao/view/sugestoes/Tarde/tarde'
import Agua from './modulo-gestao/view/Agua/agua'
import MelhoresHabitos from './modulo-gestao/view/melhoresHabitos/melhoresHabitos'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MelhoresHabitos" component={MelhoresHabitos} options={{ title: 'Entenda mais' }} />
      <Stack.Screen name="VitaminaA" component={VitaminaA} options={{ title: 'Vitamina A' }} />
      <Stack.Screen name="VitaminaB" component={VitaminaB} options={{ title: 'Vitamina B' }} />
      <Stack.Screen name="VitaminaC" component={VitaminaC} options={{ title: 'Vitamina C' }} />
      <Stack.Screen name="VitaminaD" component={VitaminaD} options={{ title: 'Vitamina D' }} />
      <Stack.Screen name="VitaminaE" component={VitaminaE} options={{ title: 'Vitamina E' }} />
      <Stack.Screen name="VitaminaK" component={VitaminaK} options={{ title: 'Vitamina K' }} />
      <Stack.Screen name="Rotina" component={Rotina} options={{ title: 'Rotina' }} />
      <Stack.Screen name="Alimentos" component={Alimentos} options={{ title: 'Alimentos' }} />
      <Stack.Screen name="Exercicios" component={Exercicios} options={{ title: 'Exercícios' }} />
      <Stack.Screen name="Atividades" component={Atividades} options={{ title: 'Atividades' }} />
      <Stack.Screen name="Section" component={Section} options={{ title: 'Tópicos', headerShown: true }} />
      <Stack.Screen name="Manha" component={Manha} options={{ title: 'Indicações', headerShown: false }} />
      <Stack.Screen name="Tarde" component={Tarde} options={{ title: 'Indicações', headerShown: false }} />
      <Stack.Screen name="NutriDetail" component={NutriDetail} options={{ title: 'Nutri Detail' }} />
      <Stack.Screen name="SobreApp" component={SobreApp} options={{ title: 'Sobre App' }} />
      <Stack.Screen name="SobreDesenvolvedores" component={SobreDesenvolvedores} options={{ title: 'Sobre Desenvolvedores' }} />
    </Stack.Navigator>
  );
}

function SobreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>
  );
}

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = 'home';
          } else if (route.name === 'Sugestoes') {
            iconName = 'restaurant';
          } else if (route.name === 'Agua') {
            iconName = 'opacity';
          } else if (route.name === 'SobreStack') {
            iconName = 'info';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
      <Tab.Screen name="Sugestoes" component={Sugestoes} options={{ title: 'Indicações' }}/>
      <Tab.Screen name="Agua" component={Agua} options={{ title: 'Consumo de água' }}/>
      <Tab.Screen name="SobreStack" component={SobreStack} options={{ title: 'Sobre' }}/>
    </Tab.Navigator>
  );
}

function InitialNavigator({ user }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="AppTabs" component={AppTabs} />
      ) : (
        <>
          <Stack.Screen name="TelaLogin" component={Login} />    
          <Stack.Screen name="TelaCadastro" component={TelaCadastro} /> 
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        console.log("User logged in: ", user.displayName);
      } else {
        console.log("No user logged in");
      }
    });
    return () => unsubscribe();  
  }, []);

  return (
    <NavigationContainer>
      <InitialNavigator user={user} />
    </NavigationContainer>
  );
}
