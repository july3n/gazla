import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3 style={styles.header}>
        Account
      </Text>
      <Spacer>
        <Button
          buttonStyle={styles.button}
          title="Sign Out"
          onPress={signout}
        />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default AccountScreen;
