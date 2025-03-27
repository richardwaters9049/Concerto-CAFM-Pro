# Use the Node.js image as the base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Install Bun manually (using curl to download and install Bun)
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to PATH (to make it available for commands)
ENV PATH="/root/.bun/bin:${PATH}"

# Copy package.json and bun.lockb from the frontend directory
COPY ../package.json /app/
COPY ../bun.lock /app/

# Install dependencies using Bun
RUN bun install

# Copy the rest of the frontend application files into the container
COPY ./ ./

# Expose the port for the frontend
EXPOSE 3000

# Start the frontend application using Bun
CMD ["bun", "dev"]
