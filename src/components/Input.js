import React from 'react';
import { View, Text, TextInput, Picker, CheckBox, TouchableOpacity, StyleSheet } from 'react-native';
import MaskInput from 'react-native-mask-input';

const Input = ({ label, type, values, mask, ...props }) => {
  const renderInput = () => {
    switch (type) {
      case 'text':
        return <TextInput style={styles.input} {...props} />;
      case 'mask':
        return <MaskInput style={styles.input} mask={mask} {...props} />;
      case 'radio':
        return (
          <View>
            {Object.entries(values).map(([key, value]) => (
              <View key={key} style={styles.radioContainer}>
                <TouchableOpacity
                  style={[styles.radio, props.value === key && styles.radioSelected]}
                  onPress={() => props.onChange(key)}
                />
                <Text>{value}</Text>
              </View>
            ))}
          </View>
        );
      case 'select':
        return (
          <Picker selectedValue={props.value} onValueChange={props.onChange} style={styles.input}>
            {Object.entries(values).map(([key, value]) => (
              <Picker.Item key={key} label={value} value={key} />
            ))}
          </Picker>
        );
      case 'checkbox':
        return (
          <View style={styles.checkboxContainer}>
            {Object.entries(values).map(([key, value]) => (
              <View key={key} style={styles.checkboxItem}>
                <CheckBox value={props.value.includes(key)} onValueChange={() => props.onChange(key)} />
                <Text> {value}</Text>
              </View>
            ))}
          </View>
        );
      default:
        return <TextInput style={styles.input} {...props} />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {renderInput()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
  },
  radioSelected: {
    backgroundColor: '#000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default Input;
