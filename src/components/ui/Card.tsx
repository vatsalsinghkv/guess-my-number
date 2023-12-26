import { StyleSheet, View } from 'react-native';

import { Colors } from '../../lib/constants/colors';

type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return <View style={styles.card}>{children}</View>;
}
const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    padding: 16,
    alignItems: 'center',
    // flex: 1,
    borderRadius: 8,
    backgroundColor: Colors.primary[500],
    elevation: 4, // Android Shadow
    // IOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
export default Card;
