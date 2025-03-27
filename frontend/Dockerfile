# Use a Node.js image that supports Bun
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Install Bun globally
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

# Copy package.json and bun.lockb
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the entire project
COPY . .

# Build the Bun app (or Next.js app)
RUN bun run build

# Expose the port where the Next.js app will run
EXPOSE 3000

# Start the app using Bun
CMD ["bun", "run", "start"]
