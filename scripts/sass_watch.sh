echo "Enter the file name to watch: "
read FILE_NAME

if [ -z "$FILE_NAME" ]; then
  echo "You must to enter a file name to watch"
else
	sass --watch "src/sass/$FILE_NAME.scss":"src/css/$FILE_NAME.css"
fi