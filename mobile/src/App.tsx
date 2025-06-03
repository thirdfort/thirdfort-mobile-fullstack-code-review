
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ConsumerServiceClientProvider } from './contexts/ConsumerServiceContext';
import { TaskStepScreen } from './screens/TaskStepScreen';
import { UserContextProvider } from './contexts/UserContext';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="TaskStep">
      <Stack.Screen
        name="TaskStep"
        component={TaskStepScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <UserContextProvider>
        <ConsumerServiceClientProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </ConsumerServiceClientProvider>
      </UserContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ECEDE9',
  },
});