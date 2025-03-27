# Use Go 1.20 explicitly
FROM golang:1.23 AS builder

WORKDIR /app

# Copy project files
COPY . .

# Force Go version in go.mod
RUN go mod edit -go=1.20

# Ensure modules are tidy
RUN go mod tidy

# Build the application
RUN go build -o myapp main.go

CMD ["/app/myapp"]
