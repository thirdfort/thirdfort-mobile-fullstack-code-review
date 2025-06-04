import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';

import { FormTaskStepParams} from '../../libs/genproto/thirdfort/consumer/tasksteps/type/v1/form_pb';

import { spacing, typography, scheme } from '../styles/values';
import { FormField } from './FormField';

type TaskCompletionTaskStepProps = {
  params: FormTaskStepParams;
  onTaskStepComplete: () => void;
};

export function TaskFormTaskStep({ params, onTaskStepComplete } : TaskCompletionTaskStepProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.descriptionContainer}>
          <Text style={[styles.containerText, styles.title]}>
            {params.displayName}
          </Text>
          <Text style={[styles.containerText, styles.description]}>
            {params.description}
          </Text>
        </View>
        <View style={styles.container}>
          {params.fields.map((item) => (
            <FormField
              key={item.name}
              params={item}
            />
          ))}
        </View>
        <Button onPress={onTaskStepComplete}>{params.submitButtonText}</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerText: {
    color: scheme.body1,
  },
  container: {
    flex: 1,
    backgroundColor: scheme.background1,
    gap: 1
  },
  content: {
    flex: 1,
    marginTop: 40,
    gap: spacing.lg,
    padding: spacing.lg,
    justifyContent: 'space-between',
  },
  input: {
    height: 120,
    width: '100%',
  },
  icon: {
    marginTop: 10,
    width: 32,
    height: 32,
  },
  descriptionContainer: {
    paddingVertical: spacing.lg,
    gap: spacing.md,
  },
  title: {
    ...typography.title,
  },
  description: {
    ...typography.paragraph,
  },
});
