/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {MatchCard} from './match-card/match-card';

export const Home = () => {
  return (
    <SafeAreaView>
      <View style={{marginTop: 100, padding: 16}}>
        <MatchCard />
      </View>
    </SafeAreaView>
  );
};
