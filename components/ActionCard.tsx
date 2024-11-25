import {StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openMyLink(link: string) {
    Linking.openURL(link);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={(styles.card, styles.elevatedCard)}>
        <View style={styles.headerContainer}>
          <Text style={styles.headingTitle}>Blogs : React Native Dev</Text>
          <Text style={styles.headingDetail}>
            Linking gives you a general interface to interact with both incoming
            and outgoing app links. Every Link (URL) has a URL Scheme, some
            websites are prefixed with https:// or http:// and the http is the
            URL Scheme. Let's call it scheme for short. In addition to https,
            you're likely also familiar with the mailto scheme. When you open a
            link with the mailto scheme, your operating system will open an
            installed mail application. Similarly, there are schemes for making
            phone calls and sending SMS. Read more about built-in URL schemes
            below. Like using the mailto scheme, it's possible to link to other
            applications by using custom url schemes. For example, when you get
            a Magic Link email from Slack, the Launch Slack button is an anchor
            tag with an href that looks something like:
            slack://secret/magic-login/other-secret. Like with Slack, you can
            tell the operating system that you want to handle a custom scheme.
            When the Slack app opens, it receives the URL that was used to open
            it. This is often referred to as deep linking. Read more about how
            to get the deep link into your app. Custom URL scheme isn't the only
            way to open your application on mobile. You don't want to use a
            custom URL scheme in links in the email because then the links would
            be broken on desktop. Instead, you want to use a regular https links
            such as https://www.myapp.io/records/1234546. and on mobile you want
            that link open your app. Android calls it Deep Links (Universal
            Links - iOS).
          </Text>
          <TouchableOpacity
            onPress={() => {
              openMyLink('https://reactnative.dev/');
            }}>
            <Text style={styles.textReadMore}>Read more...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 16,
    paddingLeft: 16,
  },
  card: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  elevatedCard: {
    elevation: 4,
  },
  headerContainer: {
    margin: 16,
  },
  headingTitle: {
    fontSize: 16,
    fontWeight: 600,
  },
  headingDetail: {
    fontSize: 12,
  },
  textReadMore: {
    paddingTop: 10,
    fontSize: 14,
    paddingBottom: 12,
  },
});
