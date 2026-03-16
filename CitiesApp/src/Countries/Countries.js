import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

class Countries extends React.Component {
  state = {
    currencyName: '',
    currencyInfo: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { countries, navigation } = this.props;
    const { currencyName, currencyInfo } = this.state;

    return (
      <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { flex: 1, justifyContent: 'center' }]}>
          {!countries.length && <CenterMessage message="No saved countries!" />}

          {countries.map((item) => (
            <View key={item.id} style={styles.countryContainer}>
              <Text style={styles.countryName}>{item.name}</Text>
              <Text style={styles.currency}>{item.currency}</Text>
            </View>
          ))}

          {/* Input bar above bottom tab */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Currency Name"
              placeholderTextColor="white"
              style={styles.input}
              value={currencyName}
              onChangeText={(val) => this.onChangeText('currencyName', val)}
            />
            <TextInput
              placeholder="Currency Info"
              placeholderTextColor="white"
              style={[styles.input, styles.input2]}
              value={currencyInfo}
              onChangeText={(val) => this.onChangeText('currencyInfo', val)}
            />

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('AddCountry')}
            >
              <Text style={styles.addButtonText}>Add Currency</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  countryName: { fontSize: 20 },
  currency: { color: 'rgba(0,0,0,0.5)' },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    marginBottom: 10,
    borderRadius: 6,
  },
  input2: {},
  addButton: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  addButtonText: { color: 'white', fontSize: 18 },
});

export default Countries;