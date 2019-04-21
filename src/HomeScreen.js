import React from 'react';
import { Button, Image, View, Text } from 'react-native';
//import { createStackNavigator, createAppContainer,createTabNavigator,createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./myPic.jpg')}
        style={{ width: 30,height:30,borderRadius:15,marginLeft:15 }}
      />
    );
  }
}


class HomeScreen extends React.Component {
    static navigationOptions = {
      headerTitle: <LogoTitle />,
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Muhammad Ghufran Khalil</Text>
          <Button
            title="Go to My CV"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'Muhammad Ghufran Khalil',
              });
            }}
          />
          <Button
              title="Drawer Navigation"
              onPress={() => this.props.navigation.toggleDrawer()}
            />
        </View>
      );
    }
  }