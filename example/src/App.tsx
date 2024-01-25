import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { scheduleAlarm } from 'expo-alarm-module';

export default function App() {
  const criarAlarme = () => {
    var newDate = new Date();
    newDate.setSeconds(newDate.getSeconds() + 10);

    console.log('Setando o alarme1');
    scheduleAlarm({
      uid: 'alarm1',
      enabled: true,
      day: newDate,
      title: 'Title of alarm',
      description: 'Alarm Description',
      snoozeInterval: 5,
      repeating: true,
      active: true,
    } as any).then((result: any) => {
      console.log('Alarm created: ', result);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Empty</Text>
      <Button title="Criar Alarme" onPress={criarAlarme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
