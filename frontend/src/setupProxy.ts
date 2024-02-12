import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app: express.Application) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000', // Change this to your backend server URL
      changeOrigin: true,
    })
  );
}
