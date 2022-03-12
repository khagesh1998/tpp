import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './match-card.styles';

export const MatchCard = () => {
  return (
    <View style={styles.container}>
      {/* ------------------------------------ header ------------------------------------ */}
      <View style={styles.hContainer}>
        <Text style={styles.hTitle}>Bundasliga</Text>
        <Image
          source={require('../assets/icon-add-notification copy.png')}
          style={styles.hLineUpsIcon}
        />
        <Text style={styles.hLineUps}>Lineups Out</Text>
        <Image
          source={require('../assets/icon-add-notification copy.png')}
          style={styles.hIcon}
        />
      </View>
      <View style={styles.divider} />
      <Text>Match Card</Text>
      {/* ------------------------------------ Footer ------------------------------------ */}
      <View style={styles.fContainer}>
        <View style={styles.fLeft}>
          <View style={styles.fTextWrapper}>
            <Text style={styles.fCount}>20</Text>
            <Text style={styles.fText}>Teams</Text>
          </View>
          <View style={[styles.fTextWrapper, styles.fContestWrapper]}>
            <Text style={styles.fCount}>20</Text>
            <Text style={styles.fText}>Teams</Text>
          </View>
        </View>
        <View style={styles.fRight}>
          <Image
            source={require('../assets/icon-add-notification copy.png')}
            style={styles.fLineUpsIcon}
          />
          <Image
            source={require('../assets/icon-add-notification copy.png')}
            style={styles.fLineUpsIcon}
          />
        </View>
      </View>
    </View>
  );
};
