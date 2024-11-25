import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 1,
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
    {
      albumId: 1,
      id: 3,
      title: 'officia porro iure quia iusto qui ipsa ut modi',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      albumId: 1,
      id: 4,
      title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
      url: 'https://via.placeholder.com/600/d32776',
      thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    },
    {
      albumId: 1,
      id: 5,
      title: 'natus nisi omnis corporis facere molestiae rerum in',
      url: 'https://via.placeholder.com/600/f66b97',
      thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
    },
    {
      albumId: 1,
      id: 6,
      title: 'accusamus ea aliquid et amet sequi nemo',
      url: 'https://via.placeholder.com/600/56a8c2',
      thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
    },
    {
      albumId: 1,
      id: 7,
      title: 'officia delectus consequatur vero aut veniam explicabo molestias',
      url: 'https://via.placeholder.com/600/b0f7cc',
      thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
    },
    {
      albumId: 1,
      id: 8,
      title: 'aut porro officiis laborum odit ea laudantium corporis',
      url: 'https://via.placeholder.com/600/54176f',
      thumbnailUrl: 'https://via.placeholder.com/150/54176f',
    },
    {
      albumId: 1,
      id: 9,
      title: 'qui eius qui autem sed',
      url: 'https://via.placeholder.com/600/51aa97',
      thumbnailUrl: 'https://via.placeholder.com/150/51aa97',
    },
    {
      albumId: 1,
      id: 10,
      title: 'beatae et provident et ut vel',
      url: 'https://via.placeholder.com/600/810b14',
      thumbnailUrl: 'https://via.placeholder.com/150/810b14',
    },
    {
      albumId: 1,
      id: 11,
      title: 'nihil at amet non hic quia qui',
      url: 'https://via.placeholder.com/600/1ee8a4',
      thumbnailUrl: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      albumId: 1,
      id: 12,
      title:
        'mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores',
      url: 'https://via.placeholder.com/600/66b7d2',
      thumbnailUrl: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      albumId: 1,
      id: 13,
      title: 'repudiandae iusto deleniti rerum',
      url: 'https://via.placeholder.com/600/197d29',
      thumbnailUrl: 'https://via.placeholder.com/150/197d29',
    },
    {
      albumId: 1,
      id: 14,
      title: 'est necessitatibus architecto ut laborum',
      url: 'https://via.placeholder.com/600/61a65',
      thumbnailUrl: 'https://via.placeholder.com/150/61a65',
    },
    {
      albumId: 1,
      id: 15,
      title: 'harum dicta similique quis dolore earum ex qui',
      url: 'https://via.placeholder.com/600/f9cee5',
      thumbnailUrl: 'https://via.placeholder.com/150/f9cee5',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>My Fav Album List</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({id, title, url}) => (
          <View key={id} style={styles.userCard}>
            <Image
              source={{
                uri: url,
              }}
              style={styles.albumImage}></Image>
            <View>
              <Text style={styles.albumTitle}>{title}</Text>
              <Text numberOfLines={2} style={styles.albumDescription}>
                Abel Makkonen Tesfaye, known professionally as the Weeknd, is a
                Canadian singer-songwriter and actor. He is known for his
                unconventional musical production, artistic reinventions and use
                of the falsetto register. Tesfaye began releasing music
                anonymously in 2009.
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  container: {paddingHorizontal: 10, marginBottom: 1},
  albumTitle: {},
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  albumImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    margin: 14,
  },
  albumDescription: {
    fontSize: 14,
    fontWeight: 400,
  },
});
