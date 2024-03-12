import * as React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function TriangleAreaScreen({ navigation }) {
  const [base, setBase] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [area, setArea] = React.useState('');

  const calculateArea = () => {
    const triangleArea = 0.5 * parseFloat(base) * parseFloat(height);
    setArea(triangleArea.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calculadora de Área de Triângulo</Text>
      <TextInput
        placeholder="Base do triângulo"
        style={styles.input}
        value={base}
        onChangeText={(text) => setBase(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Altura do triângulo"
        style={styles.input}
        value={height}
        onChangeText={(text) => setHeight(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={calculateArea}>
        <Text style={styles.buttonText}>Calcular Área</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>Área: {area}</Text>
      <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('SquareArea')}>
        <Text style={styles.navigationButtonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

function SquareAreaScreen({ navigation }) {
  const [side, setSide] = React.useState('');
  const [area, setArea] = React.useState('');

  const calculateArea = () => {
    const squareArea = parseFloat(side) * parseFloat(side);
    setArea(squareArea.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calculadora de Área de Quadrado</Text>
      <TextInput
        placeholder="Lado do quadrado"
        style={styles.input}
        value={side}
        onChangeText={(text) => setSide(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={calculateArea}>
        <Text style={styles.buttonText}>Calcular Área</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>Área: {area}</Text>
      <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.goBack()}>
        <Text style={styles.navigationButtonText}>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('AgeIdentifier')}>
        <Text style={styles.navigationButtonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

function AgeIdentifierScreen({ navigation }) {
  const [age, setAge] = React.useState('');
  const [category, setCategory] = React.useState('');

  const identifyAge = () => {
    const ageNum = parseInt(age);
    if (ageNum >= 0 && ageNum <= 12) {
      setCategory('Criança');
    } else if (ageNum >= 13 && ageNum <= 19) {
      setCategory('Adolescente');
    } else if (ageNum >= 20 && ageNum <= 59) {
      setCategory('Adulto');
    } else if (ageNum >= 60) {
      setCategory('Idoso');
    } else {
      setCategory('Idade inválida');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Identificador de Faixa Etária</Text>
      <TextInput
        placeholder="Idade"
        style={styles.input}
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={identifyAge}>
        <Text style={styles.buttonText}>Identificar Faixa Etária</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>Faixa Etária: {category}</Text>
      <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.goBack()}>
        <Text style={styles.navigationButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TriangleArea">
        <Stack.Screen name="TriangleArea" component={TriangleAreaScreen} />
        <Stack.Screen name="SquareArea" component={SquareAreaScreen} />
        <Stack.Screen name="AgeIdentifier" component={AgeIdentifierScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
  },
  navigationButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  navigationButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
