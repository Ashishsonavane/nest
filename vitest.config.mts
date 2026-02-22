import codspeedPlugin from '@codspeed/vitest-plugin';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  plugins: [codspeedPlugin()],
  resolve: {
    alias: {
      '@nestjs/common': path.resolve(__dirname, 'packages/common'),
      '@nestjs/core': path.resolve(__dirname, 'packages/core'),
      '@nestjs/testing': path.resolve(__dirname, 'packages/testing'),
      '@nestjs/platform-express': path.resolve(
        __dirname,
        'packages/platform-express',
      ),
      '@nestjs/platform-fastify': path.resolve(
        __dirname,
        'packages/platform-fastify',
      ),
      '@nestjs/microservices': path.resolve(
        __dirname,
        'packages/microservices',
      ),
      '@nestjs/websockets': path.resolve(__dirname, 'packages/websockets'),
      '@nestjs/platform-ws': path.resolve(__dirname, 'packages/platform-ws'),
      '@nestjs/platform-socket.io': path.resolve(
        __dirname,
        'packages/platform-socket.io',
      ),
    },
  },
  test: {
    benchmark: {
      include: ['benchmarks/**/*.bench.ts'],
    },
  },
});
