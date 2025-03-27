package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

func main() {
	router := gin.Default()

	// ✅ Enable CORS to allow frontend requests
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // Frontend URL
		AllowMethods:     []string{"GET", "POST", "OPTIONS"},
		AllowHeaders:     []string{"Content-Type"},
		AllowCredentials: true,
	}))

	// ✅ API Route
	router.GET("/api/message", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "Hello from the Go backend!"})
	})

	// ✅ Start server on port 8080
	router.Run(":8080")
}
