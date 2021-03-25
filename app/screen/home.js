import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const home = () => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#fc6a4f', '#1f4185']}
        style={{flex: 1, alignItems: 'center'}}>
        <View style={{width: '100%', minHeight: 747}}></View>
      </LinearGradient>
    </ScrollView>
  );
};

export default home;

const styles = StyleSheet.create({});
