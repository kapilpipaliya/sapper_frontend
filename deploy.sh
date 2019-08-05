ssh kapil@95.216.152.135
sudo pacman -S nodejs yarn

cd /home/kapil/jsusant
yarn build
How can I recursively delete all files of a specific extension in the current directory?
https://askubuntu.com/questions/377438/how-can-i-recursively-delete-all-files-of-a-specific-extension-in-the-current-di
find . -name "*.map" -type f -delete

# prefered:
rsync -avz --progress --exclude=__sapper__/dev ./__sapper__ kapil@95.216.152.135:/home/kapil/jsusant
rsync -avz --progress ./static kapil@95.216.152.135:/home/kapil/jsusant
rsync -avz --progress package.json kapil@95.216.152.135:/home/kapil/jsusant
rsync -avz --progress dump.sql kapil@95.216.152.135:/home/kapil/jsusant
yarn
yarn start
PORT=3055 yarn start
