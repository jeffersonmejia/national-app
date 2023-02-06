# Created by Jefferson Mejia v1.0
npm run build

cd src
sass --watch sass css
cd ..

# COPY FILES TO PRODUCTION FOLDER 
cp -r server dist
cp LICENSE dist
cp readme.md dist

echo "app compiled successfully"