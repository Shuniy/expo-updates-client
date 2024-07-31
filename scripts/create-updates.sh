npx expo export

node ./scripts/exportClientExpoConfig.ts > dist/expoConfig.json

zip -r expo-update.zip dist/*

rm -rf dist