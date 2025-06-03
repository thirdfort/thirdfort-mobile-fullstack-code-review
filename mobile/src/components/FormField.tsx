import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Platform } from 'react-native';

import { FormTaskStepParams_FormField} from '../../libs/genproto/thirdfort/consumer/tasksteps/type/v1/form_pb';

import { typography, scheme } from '../styles/values';

type FormFieldProps = {
  params: FormTaskStepParams_FormField
}

export function FormField({params}: FormFieldProps) {

  if (!params.fieldType || !params.fieldType.case) return null;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  switch (params.fieldType.case) {
    case 'textField':
      return (
        <View style={styles.inputs}>
          <Text style={styles.label}>
            {params.displayName}
          </Text>
          
          <TextInput
            style={[
              styles.input,
              isFocused && styles.inputSelected,
            ]}
            placeholder={params.description}
          />
        </View>
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Platform.OS === 'ios' ? 66 : 56,
    display: 'flex',
    flex: 1,
  },
  inputs: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  label: {
    color: '#333',
    position: 'absolute',
    left: 10,
    backgroundColor: scheme.background1,
    paddingHorizontal: 5,
    paddingVertical: 3,
    height: 22,
    zIndex: 9,
  },
  inputSelected: {
    borderColor: scheme.secondary,
    borderWidth: 2,
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    width: '100%',
    paddingHorizontal: 20,
    color: scheme.bodyPanel,
    zIndex: 1,
    elevation: 0,
  },
  inputError: {
    borderColor: scheme.error,
  },
  iconError: {
    position: 'absolute',
    right: 20,
    top: 45,
    zIndex: 999,
  },
  requireField: {
    alignContent: 'flex-end',
    textAlign: 'right',
    height: 25,
  },
  requiredText: {
    ...typography.smallRegular,
    fontSize: 12,
    textAlign: 'right',
  },
});