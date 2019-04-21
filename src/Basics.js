import React from 'react';
import { Button, Image, View, Text } from 'react-native';
// import HomeScreen from './HomeScreen';
import { createStackNavigator, createAppContainer,createTabNavigator,createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';

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

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>My ID: {JSON.stringify(itemId)}</Text>
        <Text>Name: {JSON.stringify(otherParam)}</Text>
        {/* <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: 'Updated!' })}
        /> */}
        <Button
          title="Education"
          onPress={() => this.props.navigation.navigate('Education',{
            otherParam: 'Education',
              
          })}
        />
        <Button
          title="Experience"
          onPress={() => this.props.navigation.navigate('Experience',{
            otherParam: 'Experience',
              
          })}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class Education extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
      return {
        title: params ? params.otherParam : 'A Nested Details Screen',
        /* These values are used instead of the shared configuration! */
        headerStyle: {
          backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor,
      };
    };
  
    render() {
      /* 2. Read the params from the navigation state */
      const { params } = this.props.navigation.state;
      const itemId = params ? params.itemId : null;
      const otherParam = params ? params.otherParam : null;
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{fontSize:16}}>Education</Text>
          <Text>- Muhammad Ali Jinnah Univeristy</Text>
          <Text>MCS - 2019 - 2020</Text>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

  class Experience extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
      return {
        title: params ? params.otherParam : 'A Nested Details Screen',
        /* These values are used instead of the shared configuration! */
        headerStyle: {
          backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor,
      };
    };
  
    render() {
      /* 2. Read the params from the navigation state */
      const { params } = this.props.navigation.state;
      const itemId = params ? params.itemId : null;
      const otherParam = params ? params.otherParam : null;
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{fontSize:16}}>Experience</Text>
          <Text>- Software Engineer</Text>
          <Text>Octraves Technology</Text>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }
  const TabNavigator = createBottomTabNavigator(
    {
        Home: {
          screen: HomeScreen,
        },
        Details: {
          screen: DetailsScreen,
        },
        Education:{
            screen: Education,
        },
        Experience:{
            screen: Experience,
        },
      },
      {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: '#3398FF',
             
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
    });
  
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Education:{
        screen: Education,
    },
    Experience:{
        screen: Experience,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3398FF',
         
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Education:{
        screen: Education,
    },
    Experience:{
        screen: Experience,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3398FF',
         
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });
  
const Drawer = createAppContainer(MyDrawerNavigator);
const Tab   = createAppContainer(TabNavigator);
const MyApp = createAppContainer(RootStack);

const AppContainer = createAppContainer(Tab);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
