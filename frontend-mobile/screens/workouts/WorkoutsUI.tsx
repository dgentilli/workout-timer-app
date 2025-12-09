import { MaterialIcons } from '@expo/vector-icons';

import Button from '@/components/ui/button';
import ScreenWrapper from '@/components/ui/screen-wrapper-basic';
import StatusDisplay from '@/components/ui/status-display';
import { themes } from '@/themes/main';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { BUILD_VARIANT } from '@/config/buildVariant';
import { Workout } from '@/constants/workoutTypes';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from '@/components/ui/ListItem';
import { useNavigation } from 'expo-router';

interface WorkoutsUIProps {
  workoutsConfig: Workout[];
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

const WorkoutsUI = ({
  workoutsConfig,
  isLoading = false,
  error = undefined,
}: WorkoutsUIProps) => {
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { colorScheme } = useColorScheme();
  const styles = createStyles();
  const iconColor = theme.colors[colorScheme].text.secondary;
  const navigation = useNavigation();

  console.log({ colorScheme });

  const renderEmptyList = () => {
    return (
      <StatusDisplay
        title='Nothing to Display'
        subtitle='Get Started by Creating a Workout'
        button={
          <Button
            title='Create Workout'
            onPress={() => console.log('pressed')}
          />
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
        <Button
          title='Create a new Workout'
          onPress={() => console.log('create new workout pressed')}
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

  const renderWorkoutContent = () => {
    return (
      <FlatList
        data={workoutsConfig}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            onPressWrapper={() => navigation.navigate('WorkoutDetails')}
            rightElement={
              <MaterialIcons name='arrow-right' size={32} color={iconColor} />
            }
            {...item}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  const renderLoading = () => {
    return <Text style={{ textAlign: 'center' }}>Loading ....</Text>;
  };

  const renderController = () => {
    if (isLoading) {
      return renderLoading();
    }
    if (error && Object.keys(error).length > 0) {
      return renderError();
    }
    if (workoutsConfig.length === 0) {
      return renderEmptyList();
    }

    return renderWorkoutContent();
  };

  const { colors } = theme;
  return (
    <ScreenWrapper title='Workouts'>
      {renderController()}
      {renderListFooter()}
    </ScreenWrapper>
  );
};

export default WorkoutsUI;
