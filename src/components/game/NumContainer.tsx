import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../lib/constants/colors';

type Props = {
  children: React.ReactNode;
};

const NumContainer = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colors.accent,
    padding: 24,
    // width: 150,
    marginTop: 24,
  },
  numText: {
    textAlign: 'center',
    color: Colors.accent,
    fontWeight: 'bold',
    fontSize: 36,
  },
});

export default NumContainer;
