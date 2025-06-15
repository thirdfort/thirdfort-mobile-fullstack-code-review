package tasks

import (
	"errors"
	"time"

	tasksv1 "github.com/thirdfort/thirdfort-mobile-fullstack-code-review/server/libs/genproto/thirdfort/consumer/tasksteps/type/v1"
	consumerv1 "github.com/thirdfort/thirdfort-mobile-fullstack-code-review/server/libs/genproto/thirdfort/consumer/v1"
	"github.com/thirdfort/thirdfort-mobile-fullstack-code-review/server/models"
	"google.golang.org/protobuf/types/known/anypb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func taskStepStateToProto(s models.TaskStepState) consumerv1.TaskStep_State {
	switch s {
	case models.TaskStepStateCANCELLED:
		return consumerv1.TaskStep_CANCELLED
	case models.TaskStepStateCOMPLETED:
		return consumerv1.TaskStep_COMPLETED
	case models.TaskStepStateNOTCOMPLETED:
		return consumerv1.TaskStep_NOT_COMPLETED
	default:
		return consumerv1.TaskStep_STATE_UNSPECIFIED
	}
}

func getTaskDescriptionParams() (*tasksv1.TaskDescriptionTaskStepParams, error) {
	return &tasksv1.TaskDescriptionTaskStepParams{
		DisplayName:          "Personal Details",
		PrimaryDescription:   "Provide your legal name and date of birth",
		SecondaryDescription: "Usually takes two minutes",
		Requirements:         []string{"Your full legal name", "Your date of birth"},
	}, nil
}

func getTaskInformationParams() (*tasksv1.TaskInformationTaskStepParams, error) {
	return &tasksv1.TaskInformationTaskStepParams{
		DisplayName:        "Why do we need this information?",
		PrimaryDescription: "As part of the house purchasing process, you are legally required to prove your identity",
		SecondaryDescription: `**Next you will need to**
		- Follow the guidelines on the screen until the questionaire is complete`,
		ButtonText: "Next",
	}, nil
}

func getTaskFormNameParams() (*tasksv1.FormTaskStepParams, error) {
	return &tasksv1.FormTaskStepParams{
		DisplayName: "What's your name?",
		Description: "Enter your name as it appears on your government-issued ID",
		Fields: []*tasksv1.FormTaskStepParams_FormField{
			{
				Name:        "given_name",
				DisplayName: "First name",
				Description: "Your legal first or given name",
				FieldType: &tasksv1.FormTaskStepParams_FormField_TextField{
					TextField: &tasksv1.TextField{
						Required:    true,
						Placeholder: "First name",
						MaxLength:   32,
					},
				},
			},
			{
				Name:        "middle_names",
				DisplayName: "Middle name",
				Description: "Your legal middle name(s)",
				FieldType: &tasksv1.FormTaskStepParams_FormField_TextField{
					TextField: &tasksv1.TextField{
						Required:    false,
						Placeholder: "Middle name",
						MaxLength:   32,
					},
				},
			},
			{
				Name:        "family_name",
				DisplayName: "Last name",
				Description: "Your legal last, family, or surname",
				FieldType: &tasksv1.FormTaskStepParams_FormField_TextField{
					TextField: &tasksv1.TextField{
						Required:    true,
						Placeholder: "Last name",
						MaxLength:   32,
					},
				},
			},
		},
		SubmitButtonText: "Next",
	}, nil
}

func getTaskCompletionParams() (*tasksv1.TaskCompletionTaskStepParams, error) {
	return &tasksv1.TaskCompletionTaskStepParams{
		DisplayName:        "Task complete",
		PrimaryDescription: "Now that this step is finished, return to the task list and complete all remaining tasks",
		SubmitButtonText:   "Done",
	}, nil
}

func createTaskDescriptionTaskStep() (*consumerv1.TaskStep, error) {
	params, err := getTaskDescriptionParams()
	if err != nil {
		return nil, err
	}

	anyParams, err := anypb.New(params)
	if err != nil {
		return nil, err
	}

	return &consumerv1.TaskStep{
		Name:       "TaskDescription",
		CreateTime: timestamppb.New(time.Now()),
		UpdateTime: timestamppb.New(time.Now()),
		State:      taskStepStateToProto("NOT_COMPLETED"),
		Type:       "TaskDescription",
		Params:     anyParams,
	}, nil
}

func createTaskInformationTaskStep() (*consumerv1.TaskStep, error) {
	params, err := getTaskInformationParams()
	if err != nil {
		return nil, err
	}

	anyParams, err := anypb.New(params)
	if err != nil {
		return nil, err
	}

	return &consumerv1.TaskStep{
		Name:       "TaskInformation",
		CreateTime: timestamppb.New(time.Now()),
		UpdateTime: timestamppb.New(time.Now()),
		State:      taskStepStateToProto("NOT_COMPLETED"),
		Type:       "TaskInformation",
		Params:     anyParams,
	}, nil
}

func createTaskNameFormTaskStep() (*consumerv1.TaskStep, error) {
	params, err := getTaskFormNameParams()
	if err != nil {
		return nil, err
	}

	anyParams, err := anypb.New(params)
	if err != nil {
		return nil, err
	}

	return &consumerv1.TaskStep{
		Name:       "TaskForm",
		CreateTime: timestamppb.New(time.Now()),
		UpdateTime: timestamppb.New(time.Now()),
		State:      taskStepStateToProto("NOT_COMPLETED"),
		Type:       "TaskForm",
		Params:     anyParams,
	}, nil
}

func createTaskCompletionTaskStep() (*consumerv1.TaskStep, error) {
	params, err := getTaskCompletionParams()
	if err != nil {
		return nil, err
	}

	anyParams, err := anypb.New(params)
	if err != nil {
		return nil, err
	}

	return &consumerv1.TaskStep{
		Name:       "TaskCompletion",
		CreateTime: timestamppb.New(time.Now()),
		UpdateTime: timestamppb.New(time.Now()),
		State:      taskStepStateToProto("NOT_COMPLETED"),
		Type:       "TaskCompletion",
		Params:     anyParams,
	}, nil
}

type Check struct {
	ID        string
	TaskSteps []consumerv1.TaskStep
}

var checks = map[string]*Check{
	"test": createKYCCheck("test"),
}

func createKYCCheck(id string) *Check {
	descStep, err := createTaskDescriptionTaskStep()
	if err != nil {
		return nil
	}

	infoStep, err := createTaskInformationTaskStep()
	if err != nil {
		return nil
	}

	nameFormStep, err := createTaskNameFormTaskStep()
	if err != nil {
		return nil
	}

	compStep, err := createTaskCompletionTaskStep()
	if err != nil {
		return nil
	}

	return &Check{
		ID: id,
		TaskSteps: []consumerv1.TaskStep{
			*descStep,
			*infoStep,
			*nameFormStep,
			*compStep,
		},
	}
}

func GetTaskStep(name string) (*consumerv1.TaskStep, error) {
	check := checks[name]
	if check == nil {
		return nil, errors.New("Not Found")
	}

	for i := 0; i < len(check.TaskSteps); i++ {
		taskStep := check.TaskSteps[i]
		if taskStep.State == consumerv1.TaskStep_NOT_COMPLETED {
			return &taskStep, nil
		}
	}

	return &check.TaskSteps[len(check.TaskSteps)-1], nil
}

func CompleteTaskStep(name string) (*consumerv1.TaskStep, error) {
	check := checks[name]
	if check == nil {
		return nil, errors.New("Not Found")
	}

	for i := 0; i < len(check.TaskSteps); i++ {
		taskStep := &check.TaskSteps[i]
		if taskStep.State == consumerv1.TaskStep_NOT_COMPLETED {
			taskStep.State = taskStepStateToProto("COMPLETED")
			return GetTaskStep(name)
		}
	}

	return nil, nil
}
