import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Props extends PressableProps {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: Props) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => (pressed ? styles.pressable : styles.buttonOuter)}
      // android_ripple={{ color: '#123fea' }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    elevation: 2,
    paddingHorizontal: 16,
    backgroundColor: '#ddb52f',
    borderRadius: 28,
  },
  buttonOuter: {},
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  pressable: {
    opacity: 0.75,
  },
});
