import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';

const NavLink = ({ text, routeName, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'black',
    alignSelf: 'center',
    marginRight: 5,
  },
});

export default withNavigation(NavLink);
