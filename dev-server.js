#!/usr/bin/env node

/**
 * Development Server Script
 * Runs both Vite frontend and Vercel API functions locally
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting development environment...\n');

// Start Vite frontend
console.log('📱 Starting Vite frontend on http://localhost:8080');
const vite = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

// Start Vercel API functions
console.log('🔧 Starting Vercel API functions on http://localhost:3000');
const vercel = spawn('vercel', ['dev', '--listen', '3000'], {
  stdio: 'inherit',
  shell: true
});

// Handle cleanup
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down development servers...');
  vite.kill();
  vercel.kill();
  process.exit(0);
});

// Handle errors
vite.on('error', (err) => {
  console.error('❌ Vite error:', err);
});

vercel.on('error', (err) => {
  console.error('❌ Vercel error:', err);
});

console.log('\n✅ Development environment ready!');
console.log('📱 Frontend: http://localhost:8080');
console.log('🔧 API: http://localhost:3000');
console.log('\nPress Ctrl+C to stop both servers\n');
