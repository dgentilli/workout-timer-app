import { StyleSheet, Text, View } from 'react-native';

const createStyles = () => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      textAlign: 'center',
      color: 'orange',
      fontSize: 24,
    },
  });
};

const WorkoutsUI = () => {
  const styles = createStyles();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.titleText}>Workouts Screen</Text>
    </View>
  );
};

export default WorkoutsUI;
