# Project Overview

## Concerto CAFM Pro

### Project Aim

A modern **Computer-Aided Facility Management (CAFM) platform** that enables organizations to track assets, manage maintenance workflows, and generate reports efficiently.

### Expected Output

- A **Next.js + TypeScript** frontend with **Tailwind CSS** for styling.
- A **Go backend (Gin framework)** with **JWT authentication & CRUD APIs**.
- **PostgreSQL** as the database, connected via GORM ORM.
- **Docker** for seamless containerized deployment.
- A **README.md** file for setup and usage guidance.

### How It Relates to Concerto

Concerto specializes in CAFM SaaS products. This project demonstrates a **scalable, cloud-native** solution that follows **modern web development best practices**.

---

# Project Setup

## 1️⃣ Create Project Directory

```sh
mcd Concerto-CAFM-Pro && cd Concerto-CAFM-Pro
```

## 2️⃣ Initialize Next.js Frontend with Bun

```sh
bun create next-app frontend --typescript
cd frontend
bun install
```

### Install Dependencies

```sh
bun add tailwindcss @tailwindcss/forms @tailwindcss/typography axios
```

### Configure TailwindCSS

Run:

```sh
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
```

Update `styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 3️⃣ Set Up Go Backend

```sh
mkdir backend && cd backend
go mod init github.com/yourusername/concerto-cafm-pro
go get -u github.com/gin-gonic/gin
go get -u gorm.io/gorm gorm.io/driver/postgres github.com/golang-jwt/jwt/v4
```

Create `main.go`:

```go
package main

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

func main() {
    r := gin.Default()

    r.GET("/ping", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{"message": "pong"})
    })

    r.Run(":8080")
}
```

Run backend:

```sh
go run main.go
```

---

## 4️⃣ Set Up Docker

Create `Dockerfile` in backend:

```Dockerfile
FROM golang:1.20
WORKDIR /app
COPY . .
RUN go mod tidy
RUN go build -o main .
CMD ["./main"]
EXPOSE 8080
```

Create `docker-compose.yml`:

```yaml
version: "3.8"
services:
  backend:
    build: ./backend
    ports:
      - "8080:8080"
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
```

---

## 5️⃣ Create README.md

````md
# Concerto CAFM Pro

## Overview

A modern CAFM system using **Go** for the backend and **Next.js + TypeScript** for the frontend.

## Setup Instructions

1. Clone repository

```sh
git clone https://github.com/yourusername/concerto-cafm-pro.git && cd concerto-cafm-pro
```
````

2. Start the backend

```sh
cd backend
go run main.go
```

3. Start the frontend

```sh
cd frontend
bun dev
```

4. Run the project with Docker

```sh
docker-compose up --build
```

## Features

✅ **Go backend (Gin)**  
✅ **Next.js frontend (TypeScript, TailwindCSS)**  
✅ **PostgreSQL database**  
✅ **JWT authentication**  
✅ **Docker containerization**
