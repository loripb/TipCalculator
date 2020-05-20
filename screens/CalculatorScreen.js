import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Slider } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function CalculatorScreen() {

  const [serviceRating, setServiceRating] = useState(undefined)
  const [expRating, setExpRating] = useState(undefined)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.getStartedText}>Fill out this form for find out how much to tip!</Text>
        </View>

        <DevelopmentModeNotice/>

        <View style={styles.getStartedContainer}>

          <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
            <Text style={styles.getStartedText}>Rate the service from 1 - 4</Text>
            <Slider
              value={serviceRating}
              step={1}
              onValueChange={serviceRating => setServiceRating(serviceRating)}
              maximumValue={4}
              minimumValue={1}
            />
            <Text style={styles.getStartedText}>Rating: {serviceRating}</Text>

            <Text style={styles.getStartedText}>Rate the overall experience from 1 - 4</Text>
            <Slider
              value={expRating}
              step={1}
              onValueChange={expRating => setExpRating(expRating)}
              maximumValue={4}
              minimumValue={1}
            />
            <Text style={styles.getStartedText}>Rating: {expRating}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>

      </View>
    </View>
  );
}

CalculatorScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    return (
      <Text style={styles.developmentModeText}>
        debugging text goes here
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  CalculatorScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
