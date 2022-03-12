/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useMemo} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {MatchCard} from './match-card/match-card';

const ItemSeparatorComponent = () => <View style={{height: 12}} />;

const ITEM_HEIGHT = 128;
const ITEM_SEPARATOR_HEIGHT = 12;

export const Home = () => {
  const data = useMemo(() => new Array(1000).fill(0), []);

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 36,
        }}
        data={data}
        renderItem={MatchCard}
        ItemSeparatorComponent={ItemSeparatorComponent}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: (ITEM_HEIGHT + ITEM_SEPARATOR_HEIGHT) * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};
