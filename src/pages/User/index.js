import React, { Component } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

import { Container } from './styles';

export default class User extends Component {
  static options = ({ route, navigation }) => ({
    title: route.params.user.name,
  });

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Text>Usuário</Text>
      </Container>
    );
  }
}
