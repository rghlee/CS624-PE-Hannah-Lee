import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProfileCard from '../../components/ProfileCard';  // Import ProfileCard component

export default class App extends Component {
  constructor(props) {
    super(props);
    // Initial profiles data with showThumbnail state for each card
    this.state = {
      profiles: [
        {
          image: require('../../assets/images/user.png'),
          name: 'John Doe',
          occupation: 'React Native Developer',
          description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
          showThumbnail: false,  // Initially not shrunk
        },
        {
          image: require('../../assets/images/user.png'),
          name: 'John Doe',
          occupation: 'React Native Developer',
          description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
          showThumbnail: false,  // Initially not shrunk
        },
        {
          image: require('../../assets/images/user.png'),
          name: 'John Doe',
          occupation: 'React Native Developer',
          description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
          showThumbnail: false,  // Initially not shrunk
        },
        {
          image: require('../../assets/images/user.png'),
          name: 'John Doe',
          occupation: 'React Native Developer',
          description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
          showThumbnail: false,  // Initially not shrunk
        },
        {
          image: require('../../assets/images/user.png'),
          name: 'John Doe',
          occupation: 'React Native Developer',
          description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
          showThumbnail: false,  // Initially not shrunk
        },
        {
          image: require('../../assets/images/user.png'),
          name: 'John Doe',
          occupation: 'React Native Developer',
          description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
          showThumbnail: false,  // Initially not shrunk
        },
      ],
    };
  }

  // Handle profile card press to toggle expansion/collapse
  handleProfileCardPress = (index) => {
    const updatedProfiles = [...this.state.profiles];
    updatedProfiles[index].showThumbnail = !updatedProfiles[index].showThumbnail;  // Toggle the showThumbnail state
    this.setState({ profiles: updatedProfiles });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.profiles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ProfileCard
              image={item.image}
              name={item.name}
              occupation={item.occupation}
              description={item.description}
              onPress={() => this.handleProfileCardPress(index)}  // Handle click to expand/collapse
              showThumbnail={item.showThumbnail}  // Pass the showThumbnail state
            />
          )}
          numColumns={2}  // Display the profile cards in 2 columns
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
    paddingTop: 20,
  },
});