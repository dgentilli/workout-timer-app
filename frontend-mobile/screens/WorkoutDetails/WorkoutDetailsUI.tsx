import { MaterialIcons } from '@expo/vector-icons';
import StatusDisplay from '@/components/ui/status-display';
import { Workout } from '../workouts/WorkoutsLogic';
import Button from '@/components/ui/button';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { themes } from '@/themes/main';
import { BUILD_VARIANT } from '@/config/buildVariant';
import ScreenWrapper from '@/components/ui/screen-wrapper-basic';
import ListItem from '@/components/ui/ListItem';
import Spacer from '@/components/ui/Spacer';

interface WorkoutDetailsUIProps {
  workoutDetails: Workout;
  isLoading?: boolean;
  error?: { code: string; message: string };
}

const createStyles = () => {
  return StyleSheet.create({
    listFooterStyle: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
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
  const { colors } = theme;
  const styles = createStyles();
  const iconColor = theme.colors[colorScheme].text.secondary;

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
          title='Edit'
          onPress={() => console.log('Edit workout pressed')}
        />
        <Spacer />
        <Button
          title='Delete'
          variant='destructive'
          onPress={() => console.log('Delete workout pressed')}
        />
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
