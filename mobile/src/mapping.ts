import { GenMessage } from '@bufbuild/protobuf/codegenv1';
import { TaskDescriptionTaskStep } from './components/TaskDescriptionTaskStep';
import { TaskDescriptionTaskStepParamsSchema } from '../libs/genproto/thirdfort/consumer/tasksteps/type/v1/task-description_pb';
import { TaskInformationTaskStep } from './components/TaskInformationTaskStep';
import { TaskInformationTaskStepParamsSchema } from '../libs/genproto/thirdfort/consumer/tasksteps/type/v1/task-information_pb';
import { TaskCompletionTaskStep } from './components/TaskCompletionTaskStep';
import { TaskCompletionTaskStepParamsSchema } from '../libs/genproto/thirdfort/consumer/tasksteps/type/v1/task-completion_pb';

type TaskStepParamName =
  | 'TaskDescription'
  | 'TaskInformation'
  | 'TaskCompletion'

type TaskStepMap = {
  [key in TaskStepParamName]: {
    component: React.ComponentType<any>;
    paramsSchema?: GenMessage<any>;
    dataSchema?: GenMessage<any>;
  };
};

export const taskStepMap: TaskStepMap = {
  'TaskDescription': {
    component: TaskDescriptionTaskStep,
    paramsSchema: TaskDescriptionTaskStepParamsSchema,
  },
  'TaskInformation': {
    component: TaskInformationTaskStep,
    paramsSchema: TaskInformationTaskStepParamsSchema,
  },
  'TaskCompletion': {
    component: TaskCompletionTaskStep,
    paramsSchema: TaskCompletionTaskStepParamsSchema,
  },
};