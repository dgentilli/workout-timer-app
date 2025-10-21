import { MaterialIcons } from '@expo/vector-icons';
import StatusDisplay from '@/components/ui/status-display';
import { Workout } from '../workouts/WorkoutsLogic';
import Button from '@/components/ui/button';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Theme, themes } from '@/themes/main';
import { BUILD_VARIANT } from '@/config/buildVariant';
import ScreenWrapper from '@/components/ui/screen-wrapper-basic';
import ListItem from '@/components/ui/ListItem';
import Spacer from '@/components/ui/Spacer';

interface WorkoutDetailsUIProps {
  workoutDetails: Workout;
  isLoading?: boolean;
  error?: { code: string; message: string };
}

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    listFooterStyle: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
    },
    buttonRowWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: theme.spacing.sm,
    },
  });
};

const WorkoutDetailsUI = ({
  workoutDetails,
  isLoading,
  error,
}: WorkoutDetailsUIProps) => {
  const { exercises } = workoutDetails;
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { colorScheme } = useColorScheme();
  const { colors, spacing } = theme;
  const styles = createStyles(theme);

  const renderEmptyList = () => {
    return (
      <StatusDisplay
        title='Nothing to Display'
        subtitle='Something went wrong'
        button={
          <Button title='Go Back' onPress={() => console.log('pressed')} />
        }
        icon={
          <MaterialIcons
            name='directions-run'
            size={76}
            color={colors[colorScheme]['accent']}
          />
        }
      />
    );
  };

  const renderListFooter = () => {
    return (
      <View style={styles.listFooterStyle}>
        <Spacer />
        <Button
          title='Start Workout'
          onPress={() => console.log('Start workout pressed')}
        />
        <Spacer height={spacing.xxl} />
        <View style={styles.buttonRowWrapper}>
          <Button
            title='Edit'
            variant='secondary'
            onPress={() => console.log('Edit workout pressed')}
            style={{ flex: 1 }}
          />
          <Button
            title='Delete'
            variant='destructive'
            onPress={() => console.log('Delete workout pressed')}
            style={{ flex: 1 }}
          />
          <Spacer />
        </View>
      </View>
    );
  };

  const renderError = () => {
    return (
      <StatusDisplay
        title='There was a problem'
        subtitle={error?.message}
        button={
          <Button title='Try Again' onPress={() => console.log('pressed')} />
        }
      />
    );
  };

  const renderLoading = () => {
    return <Text style={{ textAlign: 'center' }}>Loading ....</Text>;
  };

  const renderWorkoutDetailsContent = () => {
    return (
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <ListItem title={item.name} {...item} />}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  const renderController = () => {
    if (isLoading) {
      return renderLoading();
    }
    if (error && Object.keys(error).length > 0) {
      return renderError();
    }
    if (exercises.length === 0) {
      return renderEmptyList();
    }

    return (
      <ScreenWrapper title={'Details'}>
        {renderWorkoutDetailsContent()}
        {renderListFooter()}
      </ScreenWrapper>
    );
  };

  return renderController();
};

export default WorkoutDetailsUI;
