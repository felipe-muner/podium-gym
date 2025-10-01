#!/bin/bash

# Production Database Seeding Script
# This script helps you seed your production Neon database on Vercel

echo "🚀 Production Database Seeding Script"
echo "======================================"
echo ""

# Check if DATABASE_URL is provided
if [ -z "$DATABASE_URL" ]; then
    echo "❌ ERROR: DATABASE_URL not set!"
    echo ""
    echo "Please run this script with your Neon database URL:"
    echo ""
    echo "  DATABASE_URL='your-neon-url' ./scripts/seed-production.sh"
    echo ""
    echo "Get your URL from: Vercel → Storage → Your Neon Database → Connection String"
    echo ""
    exit 1
fi

echo "✅ DATABASE_URL detected"
echo ""

# Confirm before proceeding
read -p "⚠️  This will seed your production database. Continue? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Cancelled"
    exit 1
fi

echo ""
echo "📊 Step 1/3: Pushing database schema..."
npx drizzle-kit push

if [ $? -ne 0 ]; then
    echo "❌ Failed to push schema"
    exit 1
fi

echo ""
echo "💰 Step 2/3: Seeding plans and pricing..."
bun scripts/seed-with-new-pricing.ts

if [ $? -ne 0 ]; then
    echo "❌ Failed to seed pricing"
    exit 1
fi

echo ""
echo "👥 Step 3/3: Seeding 1000 members..."
bun scripts/seed-1000-members-presentation.ts

if [ $? -ne 0 ]; then
    echo "❌ Failed to seed members"
    exit 1
fi

echo ""
echo "✅ ✅ ✅ SUCCESS! Production database seeded! ✅ ✅ ✅"
echo ""
echo "Next steps:"
echo "1. Visit your app: https://podium-gym.vercel.app/"
echo "2. Login with Google OAuth"
echo "3. Search for 'DENIED-' to find denial test cases"
echo ""
echo "Happy presenting! 🎉"
