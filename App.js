  import React, { useState } from 'react';
  import { ScrollView, View, Button, StyleSheet } from 'react-native';
  import Input from './src/components/Input';

  const App = () => {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [sexo, setSexo] = useState('');
    const [uf, setUf] = useState('');
    const [linguagens, setLinguagens] = useState([]);

    const toggleLinguagem = (value) => {
      setLinguagens((prev) => {
        if (prev.includes(value)) {
          return prev.filter((item) => item !== value);
        } else {
          return [prev, value];
        }
      });
    };

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Input
          label="Nome"
          type="text"
          value={nome}
          onChangeText={setNome}
        />
        <Input
          label="Data de Nascimento"
          type="mask"
          mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />
        <Input
          label="Sexo"
          type="radio"
          values={{ 'm': "Masculino", 'f': "Feminino" }}
          value={sexo}
          onChange={setSexo}
        />
        <Input
          label="UF"
          type="select"
          values={{ '': "Selecione uma opção", 'SP': "São Paulo", 'RJ': "Rio de Janeiro", 'MG': "Minas Gerais" }}
          value={uf}
          onChange={setUf}
        />
        <Input
          label="Linguagens"
          type="checkbox"
          values={{ 'js': "JavaScript", 'py': "Python", 'rb': "Ruby", 'c++': "C++" }}
          value={linguagens}
          onChange={toggleLinguagem}
        />
        <Button title="Submit" onPress={() => console.log({ nome, dataNascimento, sexo, uf, linguagens })} />
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
  });

  export default App;
