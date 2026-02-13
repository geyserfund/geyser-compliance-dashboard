#!/usr/bin/env node

const { execSync } = require('child_process');
const { existsSync, renameSync, unlinkSync, writeFileSync } = require('fs');

const variant = process.argv[2];

if (!variant || variant.startsWith('-')) {
  throw new Error('Missing or invalid variant argument. Usage: node scripts/graph-fetch.js <variant>');
}

console.log(`Fetching GraphQL schema for variant: ${variant}`);

try {
  const output = execSync(`rover graph fetch geyser-graph@${variant}`, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit'],
  });

  if (!output?.trim()) {
    throw new Error('Schema fetch returned empty output');
  }

  const tempSchemaPath = './schema.graphql.tmp';
  writeFileSync(tempSchemaPath, output);
  renameSync(tempSchemaPath, './schema.graphql');

  console.log('✅ Schema fetched successfully');
} catch (error) {
  if (existsSync('./schema.graphql.tmp')) {
    unlinkSync('./schema.graphql.tmp');
  }
  console.error('❌ Failed to fetch schema');
  process.exit(1);
} 
