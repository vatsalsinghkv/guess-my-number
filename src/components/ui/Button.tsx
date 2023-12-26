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
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function Button({
  children,
  style,
  fullWidth = false,
  variant = 'accent',
  ...props
}: Props) {
  return (
    <View style={[styles.outerContainer, fullWidth && styles.full]}>
      <Pressable
        {...props}
        style={({ pressed }) =>
          pressed ? styles.pressable : styles.buttonOuter
        }
        // android_ripple={{ color: '#123fea' }}
      >
        <View style={[styles.container, styles[variant]]}>
          <Text
            style={[
              styles.text,
              variant !== 'accent' && styles.textWhite,
              style,
            ]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 5,
  },
  full: { flex: 1 },
  container: {
    paddingVertical: 8,
    elevation: 2,
    paddingHorizontal: 16,
    borderRadius: 28,
  },
  // Variants
  accent: {
    backgroundColor: Colors.accent,
  },
  primary: {
    backgroundColor: Colors.primary[400],
  },
  secondary: {
    backgroundColor: Colors.primary[400],
  },
  buttonOuter: {},
  text: {
    textAlign: 'center',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
  textWhite: { color: '#fff' },
  pressable: {
    opacity: 0.75,
  },
});
