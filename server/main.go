package main

import (
	"net/http"

	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"

	consumerservice "github.com/thirdfort/thirdfort-mobile-fullstack-code-review/server/services"
)

func main() {
	mux := http.NewServeMux()

	consumerServicePath, consumerServiceHandler := consumerservice.NewServerHandler()
	mux.Handle(consumerServicePath, consumerServiceHandler)

	http.ListenAndServe(
		"localhost:8080",
		// Use h2c so we can serve HTTP/2 without TLS.
		h2c.NewHandler(mux, &http2.Server{}),
	)
}
