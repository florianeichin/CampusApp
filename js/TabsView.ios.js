'use strict';

import React, { Component } from 'react';
import {
  TabBarIOS,
  Text,
  View,
} from 'react-native';

import Colors from './util/Colors';

export default class TabsView extends Component {
  constructor() {
    super();
    this.state = {selectedTab: 'news'};
  }

  _renderTabContent(pageText){
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{pageText}</Text>
      </View>
    );
  };

  render() {
    return (
      <TabBarIOS tintColor={Colors.dhbwRed}>
        <TabBarIOS.Item
          title="News"
          selected={this.state.selectedTab === 'news'}
          onPress={() => this.setState({selectedTab: 'news'})}
          icon={require('./tabs/news/img/news-icon.png')}>
          {this._renderTabContent('News Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Vorlesungsplan"
          selected={this.state.selectedTab === 'schedule'}
          onPress={() => this.setState({selectedTab: 'schedule'})}
          icon={require('./tabs/schedule/img/schedule-icon.png')}>
          {this._renderTabContent('Schedule Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Mensa"
          selected={this.state.selectedTab === 'canteen'}
          onPress={() => this.setState({selectedTab: 'canteen'})}
          icon={require('./tabs/canteen/img/canteen-icon.png')}>
          {this._renderTabContent('Canteen Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Service"
          selected={this.state.selectedTab === 'service'}
          onPress={() => this.setState({selectedTab: 'service'})}
          icon={require('./tabs/service/img/service-icon.png')}>
          {this._renderTabContent('Service Tab')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
