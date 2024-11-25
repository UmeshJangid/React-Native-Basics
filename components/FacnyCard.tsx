import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const FacnyCard = () => {
  function openLink(link: string) {
    Linking.openURL(link);
  }

  return (
    <View>
      <Text style={styles.headingText}> Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <TouchableOpacity
          onPress={() => {
            openLink('https://www.tourism.rajasthan.gov.in/jal-mahal.html');
          }}>
          <Image
            source={{
              uri: 'https://media.tacdn.com/media/attractions-content--1x-1/10/65/bd/ac.jpg',
            }}
            style={styles.imageCard}></Image>
        </TouchableOpacity>

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}> Jal Mahal</Text>
          <Text style={styles.cardDetail}>
            Jal Mahal is a palace in the middle of the Man Sagar Lake in Jaipur
            city, the capital of the state of Rajasthan, India. The palace was
            originally constructed around 1699; the building and the lake around
            it were later renovated and enlarged in the early 18th century by
            Maharaja Jai Singh II of Amber.
          </Text>
          <Text style={styles.cardDetail}> Jaipur, Rajasthan 302001 </Text>

          <Text style={styles.cardFooter}> 12 KM Away from Jaipur Center </Text>
        </View>
      </View>
    </View>
  );
};

export default FacnyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  imageCard: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    height: 200,
  },
  card: {
    flex: 1,
    padding: 8,
    margin: 12,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    padding: 4,
  },
  cardElevated: {
    borderRadius: 15,
    elevation: 4,
  },
  cardTitle: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardDetail: {
    fontSize: 16,
    fontWeight: 'thin',
    marginBottom: 12,
  },
  cardFooter: {
    fontSize: 12,
    marginBottom: 10,
    fontWeight: '400',
  },
});
