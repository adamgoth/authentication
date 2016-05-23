import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import Button from '../common/button';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      passwordConfirmation: ''
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
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

        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={this.state.passwordConfirmation}
          onChangeText={(text) => this.setState({passwordConfirmation: text})}
          />

          <Button text={'I have an account...'} onPress={this.onSigninPress} />
      </View>
    );
  },
  onSigninPress: function() {
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  label: {
    fontSize: 18
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
  }
})
