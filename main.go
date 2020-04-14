package main

import (
	"bytes"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)


func main() {
	StartService()
}

func StartService() {
	router := gin.Default()
	router.POST("/", HandlePost)
	router.NoRoute(func(context *gin.Context) {
		context.AbortWithStatus(http.StatusNotFound)
	})
	router.Run(":3000")
}

func HandlePost(c *gin.Context) {
	message := map[string]interface{} {
		"status": "There is power in the apartment 💡",
	}

	byteRep, err := json.Marshal(message)
	if err != nil {
		log.Fatalln(err)
	}

	_, err = http.Post("http://localhost:8000", "application/json", bytes.NewBuffer(byteRep))
	if err != nil {
		log.Fatalln(err)
	}
}