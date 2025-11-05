#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

const variant = process.argv[2];

if (!variant || variant.startsWith('-')) {
  throw new Error('Missing or invalid variant argument. Usage: node scripts/graph-generate.js <variant>');
}

console.log(`🚀 Starting GraphQL code generation for variant: ${variant}`);

try {
  // Step 1: Fetch schema
  console.log('📥 Fetching GraphQL schema...');
  execSync(`node scripts/graph-fetch.cjs ${variant}`, { stdio: 'inherit' });

  // Step 2: Generate TypeScript types
  console.log('⚙️  Generating TypeScript types...');
  execSync('graphql-codegen --config codegen.ts', { stdio: 'inherit' });

  // Step 3: Clean up temporary schema file
  console.log('🧹 Cleaning up...');
  if (fs.existsSync('./schema.graphql')) {
    fs.unlinkSync('./schema.graphql');
  }

  // Step 4: Format generated code
  console.log('💅 Formatting generated code...');
  execSync('prettier --write "src/types/generated/graphql.ts"', { stdio: 'inherit' });

  console.log('✅ GraphQL code generation completed successfully!');
} catch (error) {
  console.error('❌ GraphQL code generation failed');
  process.exit(1);
} 