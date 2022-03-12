/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, useMemo} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {MatchCard} from './match-card/match-card';
import {styles} from './home.styles';

const ItemSeparatorComponent = () => (
  <View style={styles.itemSeparatorComponent} />
);

const ITEM_HEIGHT = 128;
const ITEM_SEPARATOR_HEIGHT = 12;

const keyExtractor = (data: number) => data.toString();
const getItemLayout = (_: unknown, index: number) => ({
  length: ITEM_HEIGHT,
  offset: (ITEM_HEIGHT + ITEM_SEPARATOR_HEIGHT) * index,
  index,
});

export const Home = () => {
  const data = useMemo(() => [...Array(1000).keys()], []);

  const renderITem = useCallback(() => <MatchCard />, []);

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={keyExtractor}
        data={data}
        renderItem={renderITem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        getItemLayout={getItemLayout}
        maxToRenderPerBatch={50}
      />
    </SafeAreaView>
  );
};
