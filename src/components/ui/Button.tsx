import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Colors } from '../../lib/constants/colors';

interface Props extends PressableProps {
  children: React.ReactNode;
  style?: ViewStyle | TextStyle;
}

export default function Button({ children, style, ...props }: Props) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        {...props}
        style={({ pressed }) =>
          pressed ? styles.pressable : styles.buttonOuter
        }
        // android_ripple={{ color: '#123fea' }}
      >
        <View style={styles.container}>
          <Text style={[styles.text, style]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop: 5,
  },
  container: {
    paddingVertical: 8,
    elevation: 2,
    paddingHorizontal: 16,
    backgroundColor: Colors.accent,
    borderRadius: 28,
  },
  buttonOuter: {},
  text: {
    textAlign: 'center',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
  pressable: {
    opacity: 0.75,
  },
});
