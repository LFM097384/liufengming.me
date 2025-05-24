#!/bin/bash

# Build script for Fengming Liu's Academic Website
echo "Building Fengming Liu's Academic Website..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build files are in the 'dist' directory"
    echo "🚀 You can now deploy the contents of the 'dist' directory to your web server"
    
    # Show build size
    if command -v du &> /dev/null; then
        echo "📊 Build size: $(du -sh dist 2>/dev/null | cut -f1)"
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
