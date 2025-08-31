#!/bin/bash

# Deployment Script for Ina Peretz Website
# This script prepares and deploys the website to production

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

print_status "Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "npm version: $(npm --version)"

# Install dependencies
print_status "Installing dependencies..."
npm install

# Run linting
print_status "Running code quality checks..."
npm run lint

# Build the project
print_status "Building production version..."
npm run build

if [ $? -eq 0 ]; then
    print_status "Build completed successfully!"
else
    print_error "Build failed. Please fix the issues and try again."
    exit 1
fi

# Check if dist folder exists
if [ -d "dist" ]; then
    print_status "Production files ready in 'dist' folder"
    
    # Display build size
    echo ""
    echo "📊 Build Statistics:"
    du -sh dist/
    
    echo ""
    echo "📁 Build Contents:"
    ls -la dist/
    
    echo ""
    print_status "🎉 Deployment preparation completed!"
    echo ""
    echo "Next steps:"
    echo "1. Upload the 'dist' folder contents to your web server"
    echo "2. Configure your domain to point to the uploaded files"
    echo "3. Set up HTTPS redirect"
    echo "4. Test the website thoroughly"
    echo ""
    echo "For automated deployment:"
    echo "• Netlify: npx netlify-cli deploy --prod --dir=dist"
    echo "• Vercel: npx vercel --prod"
    echo ""
else
    print_error "Build folder 'dist' not found. Build may have failed."
    exit 1
fi
