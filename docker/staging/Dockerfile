# 1. Base Image
FROM node:20-alpine AS base

# Install libc6-compat for compatibility
RUN apk add --no-cache libc6-compat

WORKDIR /app

# 2. Dependencies Layer
FROM base AS deps

# Copy dependency-related files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# 3. Build Layer
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Next.js app
RUN npm run build

# 4. Runner Layer
FROM node:20-alpine AS runner

WORKDIR /app

# Set runtime environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy production build artifacts
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Run the application as a non-root user
USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
