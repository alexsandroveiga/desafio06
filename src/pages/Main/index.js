import React from 'react';
import { SafeAreaView, Text } from 'react-native';

// import { Container } from './styles';

export default function Main() {
  return (
    <SafeAreaView>
      <Text>HELLO</Text>
    </SafeAreaView>
  );
}

Main.navigationOptions = {
  title: 'Olá Mundo',
};
