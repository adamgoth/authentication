import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Parse from 'parse/react-native';
import Button from '../common/button';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  render: function() {
    return <View style={styles.container}>
      <Text>Sign In</Text>

      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={this.state.username}
        onChangeText={(text) => this.setState({username: text})}
        />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={this.state.password}
        onChangeText={(text) => this.setState({password: text})}
        />

      <Text style={styles.label}>{this.state.errorMessage}</Text>
      <Button text={'Sign In'} onPress={this.onPress} />
      <Button text={'I need an account...'} onPress={this.onSignupPress} />
    </View>
  },
  onSignupPress: function() {
    // nav to signup
    this.props.navigator.push({name: 'signup'});
  },
  onPress: function() {
    Parse.User.logIn(this.state.username, this.state.password, {
      success: (user) => { console.log(user); },
      error: (user) => { this.setState( {errorMessage: error.message}); }
    });
    console.log("meh");
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
