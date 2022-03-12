import React, {memo} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './match-card.styles';

export const MatchCard = memo(() => {
  return (
    <View style={styles.container}>
      {/* ------------------------------------ header ------------------------------------ */}
      <View style={styles.hContainer}>
        <Text style={styles.hTitle}>Bundasliga</Text>
        <Image
          source={require('../assets/icon-add-notification.png')}
          style={styles.hLineUpsIcon}
        />
        <Text style={styles.hLineUps}>Lineups Out</Text>
        <Image
          source={require('../assets/icon-add-notification.png')}
          style={styles.hIcon}
        />
        <View style={styles.divider} />
      </View>
      {/* ------------------------------------ Title ------------------------------------*/}
      <View style={styles.tContainer}>
        <Text style={styles.tText}>Dortmund</Text>
        <Text style={styles.tText}>Bayren</Text>
      </View>
      {/* ------------------------------------ Main ------------------------------------*/}
      <View style={styles.mContainer}>
        <View style={[styles.mLeftGradient, {backgroundColor: '#afafff'}]} />
        <View style={[styles.mRightGradient, {backgroundColor: '#b6d639'}]} />
        <View style={styles.mLeft}>
          <Image
            source={{
              uri: 'https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/TW-CR1@2x-BIG.png',
            }}
            style={styles.mFlagIcon}
          />
          <Text style={styles.mFlagSHortName}>DOR</Text>
        </View>
        <Text style={styles.mCenter}>1h 22m</Text>
        <View style={styles.mRight}>
          <Text style={styles.mFlagSHortName}>BAY</Text>
          <Image
            source={{
              uri: 'https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/GS-CR1@2x-BIG.png',
            }}
            style={styles.mFlagIcon}
          />
        </View>
      </View>
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
            source={require('../assets/icon-add-notification.png')}
            style={styles.fLineUpsIcon}
          />
          <Image
            source={require('../assets/icon-add-notification.png')}
            style={styles.fLineUpsIcon}
          />
        </View>
      </View>
    </View>
  );
});
