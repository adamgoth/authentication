import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';
import Parse from 'parse/react-native';
import SignIn from './components/authentication/signin';
import SignUp from './components/authentication/signup';

var ROUTES = {
  signin: SignIn,
  signup: SignUp
};

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize("AppId", "JSKey");
    Parse.serverURL = 'http://localhost:1337/parse';
  },
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {
    return (
      <Navigator
      style={styles.container}
      initialRoute={{name: 'signin'}}
      renderScene={this.renderScene}
      configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
