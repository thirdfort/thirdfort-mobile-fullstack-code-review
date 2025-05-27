import { View, Text, StyleSheet, Platform } from 'react-native';
import { Button } from '@react-navigation/elements';
import { TaskInformationTaskStepParams } from '../../libs/genproto/thirdfort/consumer/tasksteps/type/v1/task-information_pb';
import { scheme, spacing, typography } from '../styles/values';
import Markdown from 'react-native-markdown-display';

type TaskInformationTaskStepProps = {
  params: TaskInformationTaskStepParams;
  onTaskStepComplete: () => void;
};

export function TaskInformationTaskStep({ params, onTaskStepComplete }: TaskInformationTaskStepProps) {
  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{params.displayName}</Text>
        {params.primaryDescription && (
          <Text style={styles.primaryDescription}>
            {params.primaryDescription}
          </Text>
        )}
        {params.secondaryDescription && (
          <Markdown style={markdownStyles}>
            {params.secondaryDescription}
          </Markdown>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onTaskStepComplete}>Next</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: spacing.lg,
  },
  content: {
    gap: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
  },
  container: {
    flex: 1,
    backgroundColor: scheme.background1,
    position: 'relative',
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.md,
  },
  errorIcon: {
    width: 39,
    height: 39,
  },
  title: {
    ...typography.title,
    color: scheme.header1,
  },
  primaryDescription: {
    ...typography.paragraph,
    color: scheme.body1,
  },
  secondaryDescription: {
    ...typography.paragraphBold,
    color: scheme.body1,
  },
});

const markdownStyles = StyleSheet.create({
  text: {
    color: scheme.body1, // TODO unsure about this colour
    ...typography.paragraphSmall,
  },
  strong: {
    fontWeight: 600,
    color: scheme.body1, // TODO unsure about this colour
  },
  paragraph: {
    marginTop: spacing.md,
  },
  list_item: {
    color: scheme.body1, // TODO unsure about this colour
  },
  bullet_list_icon: {
    color: scheme.body1, // TODO unsure about this colour
    marginRight: spacing.md,
    ...typography.paragraphSmall,
  },
});
