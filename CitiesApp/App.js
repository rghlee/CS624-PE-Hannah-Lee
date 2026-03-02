import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries';
import AddCountry from './src/AddCountry/AddCountry';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  state = {
    cities: [],
    countries: [],
  };

  addCity = (city) => {
    this.setState((prevState) => ({ cities: [...prevState.cities, city] }));
  };

  addLocation = (location, city) => {
    this.setState((prevState) => ({
      cities: prevState.cities.map((c) =>
        c.id === city.id ? { ...c, locations: [...c.locations, location] } : c
      ),
    }));
  };

  addCountry = (country) => {
    this.setState((prevState) => ({ countries: [...prevState.countries, country] }));
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Cities') iconName = 'home-outline';
              else if (route.name === 'AddCity') iconName = 'add-circle-outline';
              else if (route.name === 'Countries') iconName = 'globe-outline';
              else if (route.name === 'AddCountry') iconName = 'add-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Cities">
            {(props) => <Cities {...props} cities={this.state.cities} addLocation={this.addLocation} />}
          </Tab.Screen>

          <Tab.Screen name="AddCity">
            {(props) => <AddCity {...props} addCity={this.addCity} />}
          </Tab.Screen>

          <Tab.Screen name="Countries">
            {(props) => <Countries {...props} countries={this.state.countries} />}
          </Tab.Screen>

          <Tab.Screen name="AddCountry">
            {(props) => <AddCountry {...props} addCountry={this.addCountry} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}