import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';

class AddCountry extends React.Component {
  state = { name: '', currency: '' };

  onChangeText = (key, value) => { this.setState({ [key]: value }); };

  submit = () => {
    const { name, currency } = this.state;
    if (name === '' || currency === '') { alert('Please complete form'); return; }
    const newCountry = { id: uuid.v4(), name, currency };
    this.props.addCountry(newCountry);
    this.setState({ name: '', currency: '' }, () => this.props.navigation.navigate('Countries'));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Countries</Text>
        <TextInput placeholder="Country Name" value={this.state.name} onChangeText={(val) => this.onChangeText('name', val)} style={styles.input} />
        <TextInput placeholder="Currency" value={this.state.currency} onChangeText={(val) => this.onChangeText('currency', val)} style={styles.input} />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}><Text style={styles.buttonText}>Add Country</Text></View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: colors.primary },
  heading: { fontSize: 36, color: 'white', alignSelf: 'center', marginBottom: 20 },
  input: { height: 50, backgroundColor: 'white', margin: 10, paddingHorizontal: 8 },
  button: { height: 50, backgroundColor: '#666', justifyContent: 'center', alignItems: 'center', margin: 10 },
  buttonText: { fontSize: 18, color: 'white' },
});

export default AddCountry;