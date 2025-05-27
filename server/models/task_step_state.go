package models

type TaskStepState string

const (
	TaskStepStateNOTCOMPLETED TaskStepState = "NOT_COMPLETED"
	TaskStepStateCOMPLETED    TaskStepState = "COMPLETED"
	TaskStepStateCANCELLED    TaskStepState = "CANCELLED"
)
