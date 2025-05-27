import { createRegistry } from '@bufbuild/protobuf';
import { anyUnpack } from '@bufbuild/protobuf/wkt';
import { TaskStep } from '../../libs/genproto/thirdfort/consumer/v1/resources_pb';
import { taskStepMap } from '../mapping';

import { file_thirdfort_consumer_tasksteps_type_v1_task_description } from '../../libs/genproto/thirdfort/consumer/tasksteps/type/v1/task-description_pb';
import { file_thirdfort_consumer_tasksteps_type_v1_task_information } from '../../libs/genproto/thirdfort/consumer/tasksteps/type/v1/task-information_pb';
import { file_thirdfort_consumer_tasksteps_type_v1_task_completion } from '../../libs/genproto/thirdfort/consumer/tasksteps/type/v1/task-completion_pb';

type TaskStepRendererProps = {
  taskStep: TaskStep,
  onTaskStepComplete: () => void;
}

export const registry = createRegistry(
  file_thirdfort_consumer_tasksteps_type_v1_task_description,
  file_thirdfort_consumer_tasksteps_type_v1_task_information,
  file_thirdfort_consumer_tasksteps_type_v1_task_completion,
);

export function TaskStepRenderer({taskStep, onTaskStepComplete} : TaskStepRendererProps) {
  let params;
  switch(taskStep.name) {
    case "TaskDescription":
    case "TaskInformation":
    case "TaskCompletion":
      params = anyUnpack(taskStep.params as any, registry);
      break;
    default:
      break;
  }

  const { component: TaskStepComponent, dataSchema } =
    taskStepMap[taskStep.type as keyof typeof taskStepMap];

  return (
    <TaskStepComponent
      params={params}
      onTaskStepComplete={onTaskStepComplete}
    />
  );
}