package services

import (
	"context"
	"errors"
	"fmt"
	"net/http"

	"connectrpc.com/connect"
	consumerv1 "github.com/thirdfort/thirdfort-mobile-fullstack-code-review/server/libs/genproto/thirdfort/consumer/v1"

	"github.com/thirdfort/thirdfort-mobile-fullstack-code-review/server/libs/genproto/thirdfort/consumer/v1/consumerv1connect"

	"github.com/thirdfort/thirdfort-mobile-fullstack-code-review/server/tasks"
)

type ConsumerService struct{}

func NewServerHandler() (string, http.Handler) {
	return consumerv1connect.NewConsumerServiceHandler(&ConsumerService{})
}

func validateGetTaskStepRequest(req *consumerv1.GetTaskStepRequest) error {
	if req == nil {
		return errors.New("Bad Request")
	}

	if req.Name == "" {
		return errors.New("Bad Request: Field 'Name' is required")
	}

	return nil
}

func (s *ConsumerService) GetTaskStep(ctx context.Context, req *connect.Request[consumerv1.GetTaskStepRequest]) (*connect.Response[consumerv1.TaskStep], error) {
	if err := validateGetTaskStepRequest(req.Msg); err != nil {
		return nil, err
	}

	fmt.Printf("GetTaskStep: %s\n", req.Msg.Name)
	taskStep, err := tasks.GetTaskStep(req.Msg.Name)
	if err != nil {
		return nil, err
	}
	res := connect.NewResponse(taskStep)
	res.Header().Set("Consumer-Version", "v1")
	return res, nil
}

func validateCompleteTaskStepRequest(req *consumerv1.CompleteTaskStepRequest) error {
	if req == nil {
		return errors.New("Bad Request")
	}

	if req.Name == "" {
		return errors.New("Bad Request: Field 'Name' is required")
	}

	if req.Data == nil {
		return errors.New("Bad Request: Field 'Data' is required")
	}

	return nil
}

func (s *ConsumerService) CompleteTaskStep(ctx context.Context, req *connect.Request[consumerv1.CompleteTaskStepRequest]) (*connect.Response[consumerv1.CompleteTaskStepResponse], error) {
	if err := validateCompleteTaskStepRequest(req.Msg); err != nil {
		return nil, err
	}

	fmt.Printf("CompleteTaskStep: %s\n", req.Msg.Name)

	nextStep, err := tasks.CompleteTaskStep(req.Msg.Name)
	if err != nil {
		return nil, err
	}

	res := connect.NewResponse(&consumerv1.CompleteTaskStepResponse{
		Name:     req.Msg.Name,
		NextStep: nextStep,
	})
	res.Header().Set("Consumer-Version", "v1")
	return res, nil
}
