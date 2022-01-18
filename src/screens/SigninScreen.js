import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Go back to Sign up"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return { headerShown: false };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'red',
    marginBottom: 200,
  },
});

export default SigninScreen;
