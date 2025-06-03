import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from '@react-navigation/elements';

import { FormTaskStepParams, TextField, FormTaskStepParams_FormField} from '../../libs/genproto/thirdfort/consumer/tasksteps/type/v1/form_pb';

import { spacing, typography, scheme } from '../styles/values';

type TaskCompletionTaskStepProps = {
  params: FormTaskStepParams;
  onTaskStepComplete: () => void;
};

type FormFieldProps = {
  params: FormTaskStepParams_FormField
}

export function FormField({params}: FormFieldProps) {

  if (!params.fieldType || !params.fieldType.case) return null;

  switch (params.fieldType.case) {
    case 'textField':
      return (
        <View>
          <Text style={[styles.containerText, styles.description]}>
            {params.displayName}
          </Text>
          <TextInput placeholder={params.description}/>
        </View>
      );
    default:
      return null;
  }
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
        <View>
          {params.fields.map((item) => (
            <FormField
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
  },
  content: {
    flex: 1,
    marginTop: 40,
    gap: spacing.lg,
    padding: spacing.lg,
    justifyContent: 'space-between',
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
