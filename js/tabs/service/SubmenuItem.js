// @flow
'use strict';

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Colors from '../../util/Colors';
import IconTouchable from '../../util/IconTouchable';

export default class SubmenuItem extends Component {
  render() {
    return(
      <IconTouchable onPress={()=>alert('Go to submenu')}>
        <View style={styles.container}>
          <Image source={this.props.icon} />
          <Text style={styles.label}>
            {this.props.label}
          </Text>
        </View>
      </IconTouchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 110,
    height: 70,
    marginBottom: 20,
  },
  label: {
    color: Colors.lightText,
    marginTop: 5
  }
});
