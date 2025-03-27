# Use Go 1.23 (or a later version) as the base image
FROM golang:1.23 AS builder

# Set working directory
WORKDIR /app

# Copy go.mod and go.sum files and install dependencies
COPY go.mod go.sum ./

# Run go mod tidy to ensure dependencies are in order
RUN go mod tidy

# Copy the rest of the Go source code
COPY . .

# Build the Go app
RUN go build -o myapp main.go

# Create the final image to reduce size
FROM gcr.io/distroless/base-debian10

# Copy the built binary from the builder image
COPY --from=builder /app/myapp /app/myapp

# Expose port 8080 for the backend API
EXPOSE 8080

# Command to run the backend API
CMD ["/app/myapp"]
