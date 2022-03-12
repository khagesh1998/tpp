/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
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

const MatchListFlatList = memo(() => {
  const startTime = new Date().getTime();
  useEffect(() => {
    console.log(
      'time taken by flatlist to load 50 items',
      new Date().getTime() - startTime,
    );
  }, [startTime]);

  const data = useMemo(() => [...Array(50).keys()], []);

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
});

const MatchListScrollView = memo(() => {
  const startTime = new Date().getTime();
  useEffect(() => {
    console.log(
      'time taken by scrollview to load 50 items',
      new Date().getTime() - startTime,
    );
  }, [startTime]);

  const data = useMemo(() => [...Array(50).keys()], []);

  const renderITem = useCallback((item, index) => {
    return (
      <Fragment key={item}>
        {index !== 0 && <ItemSeparatorComponent />}
        <MatchCard />
      </Fragment>
    );
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {data.map(renderITem)}
      </ScrollView>
    </SafeAreaView>
  );
});

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
  }, [setIsLoading]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#797979" />
      </View>
    );
  }

  return <MatchListFlatList />;
};
