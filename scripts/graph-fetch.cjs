#!/usr/bin/env node

const { execSync } = require('child_process');

const variant = process.argv[2];

if (!variant || variant.startsWith('-')) {
  throw new Error('Missing or invalid variant argument. Usage: node scripts/graph-fetch.js <variant>');
}

console.log(`Fetching GraphQL schema for variant: ${variant}`);

try {
  execSync(`rover graph fetch geyser-graph@${variant} > ./schema.graphql`, { 
    stdio: 'inherit', 
    shell: true 
  });
  console.log('✅ Schema fetched successfully');
} catch (error) {
  console.error('❌ Failed to fetch schema');
  process.exit(1);
} 