import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const ProfileCard = ({ image, name, occupation, description, onPress, showThumbnail }) => {

  // Conditionally apply the shrinking effect by adding the cardThumbnail style
  let containerStyles = [styles.cardContainer];
  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail); // Apply shrinking
  }

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <Text style={styles.cardName}>{name}</Text>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired, // New prop to control shrinking
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: 'dodgerblue',
    width: 300,
    height: 400,
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardName: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 2,
    width: 'auto',
    alignItems: 'center',
  },
  cardOccupation: {
    marginTop: 5,
    marginBottom: 2,
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginTop: 10,
    marginRight: 20,
    marginLeft: 30,
    marginBottom: 10,
  },

  // The cardThumbnail style reduces the component’s size
  cardThumbnail: {
    transform: [{ scale: 0.4 }], // Shrinks the card by 60
  },
});

export default ProfileCard;