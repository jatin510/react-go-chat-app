package main

import (
	"fmt"
	"log"
	"net/http"
	"realtime-chat-go-react/pkg/websocket"
)

func serveWs(w http.ResponseWriter, r *http.Request) {
	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+V\n", err)
	}
	go websocket.Writer(ws)
	websocket.Reader(ws)
}

func setupRoutes() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Simple server")
	})

	// map 'ws' endpoint to `serverWs` function
	http.HandleFunc("/ws", serveWs)
}

func main() {
	log.Println("Chat application")
	setupRoutes()
	http.ListenAndServe(":8081", nil)
}
