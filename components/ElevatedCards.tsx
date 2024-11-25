import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap1</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap2</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap3</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap4</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap5</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap6</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap7</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap8</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap9</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap10</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap11</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap12</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap13</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap14</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingHorizontal: 8,
  },

  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    flex: 1,
    margin: 8,
  },
  container: {
    flexDirection: 'row',
    padding: 4,
  },
  cardElevated: {
    backgroundColor: '#e5e5e5',
    borderRadius: 6,
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#ff0000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
