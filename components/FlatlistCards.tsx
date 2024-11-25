import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatlistCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flatlist Cards</Text>

      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
          </View>

          <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
          </View>

          <View style={[styles.card, styles.cardThree]}>
            <Text>Purple</Text>
          </View>

          <View style={[styles.card, styles.cardFour]}>
            <Text>Blue</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default FlatlistCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#39bc78',
  },
  cardThree: {
    backgroundColor: '#653265',
  },
  cardFour: {
    backgroundColor: '#5ca3fb',
  },
});
