#!/bin/bash

EXPECTED_PATH="/Users/mphenom-m4/Documents/Mudassir/[oO]ccoto"
CURRENT_PATH=$(pwd)

if [[ ! "$CURRENT_PATH" =~ $EXPECTED_PATH ]]; then
    echo "⚠️  WARNING: Wrong directory!"
    echo "Expected path should contain: /Users/mphenom-m4/Documents/Mudassir/Occoto"
    echo "Current:  $CURRENT_PATH"
    echo "Please cd to the correct directory"
    exit 1
else
    echo "✅ Location verified: $CURRENT_PATH"
    echo "Branch: $(git branch --show-current)"
    echo "Node version: $(node -v)"
    echo "NPM version: $(npm -v)"
    echo "Development server: http://localhost:3000"
fi 