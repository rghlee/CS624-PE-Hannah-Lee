import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import ProfileCard from '../../components/ProfileCard';  // Import ProfileCard correctly

const profileCardColor = 'dodgerblue';

export default class App extends Component {
  constructor(props) {
    super(props);
    // Initial state, where the profile card doesn't shrink by default
    this.state = {
      showThumbnail: false, // Set this to true to test shrinking
    };
  }

  // Toggle the showThumbnail state when the card is pressed
  handleProfileCardPress = () => {
    this.setState(prevState => ({
      showThumbnail: !prevState.showThumbnail, // Toggle between true/false
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Pass showThumbnail and onPress to ProfileCard */}
        <ProfileCard
          image={require('../../assets/images/user.png')}
          name="John Doe"
          occupation="React Native Developer"
          description="John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android."
          showThumbnail={this.state.showThumbnail} // Shrink when true
          onPress={this.handleProfileCardPress} // Toggle on press
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Other card styles
});