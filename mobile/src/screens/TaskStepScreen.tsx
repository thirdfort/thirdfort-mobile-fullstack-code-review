import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { ConsumerServiceClientContext } from '../contexts/ConsumerServiceContext'
import { useContext, useEffect, useState } from 'react';
import { TaskStep } from '../../libs/genproto/thirdfort/consumer/v1/resources_pb';
import { TaskStepRenderer } from '../components/TaskStepRenderer';
import { useNavigation } from '@react-navigation/native';
import { anyPack } from '@bufbuild/protobuf/wkt';
import { DescMessage, MessageShape } from '@bufbuild/protobuf';
import { UserContext } from '../contexts/UserContext';

export type TaskStepScreenProps = {
};

export function TaskStepScreen({} : TaskStepScreenProps) {
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [taskStep, setTaskStep] = useState<TaskStep | null>(null);

  const user = useContext(UserContext);
  if (user === undefined) {
    return <Text>Provider Error</Text>
  }

  const context = useContext(ConsumerServiceClientContext);
  if (context === undefined) {
    return <Text>Provider Error</Text>
  }

  const getTaskStepData = async () => {
    setLoading(true);
    try {
      if (context.client) {
        const res = await context.client.getTaskStep({ name: user });
        setTaskStep(res);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTaskStepData();
  }, []);

  const onTaskStepComplete = async (schema?: DescMessage, data?: MessageShape<DescMessage>) => {
    try {
      const message = {
        name: user,
        data: {}
      }

      if (schema && data) {
        message.data = anyPack(schema, data);
      }

      if (context.client) {
        const res = await context.client.completeTaskStep(message);

        if (res.nextStep) {
          navigation.push('TaskStep');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{(isLoading ? <ActivityIndicator/> :  
        <TaskStepRenderer taskStep={taskStep as TaskStep} onTaskStepComplete={onTaskStepComplete} />
      )}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 10,
  }
});