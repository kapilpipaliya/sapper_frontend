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

# prefered:
^+T[X59uBKn1
rsync -avz --progress --exclude=__sapper__/dev ./__sapper__ root@162.241.29.170:susantfront
rsync -avz --progress ./static root@162.241.29.170:susantfront
rsync -avz --progress package.json root@162.241.29.170:susantfront
rsync -avz --progress dump.sql root@162.241.29.170:susantfront
yarn
yarn start
PORT=3055 yarn start

#sudo pg_dump -U postgres -f dump.sql -d susant
rsync -avz --progress --exclude=__sapper__/dev ./__sapper__ kapil@116.203.177.233:/home/kapil/musicf
rsync -avz --progress ./static kapil@116.203.177.233:/home/kapil/musicf
rsync -avz --progress package.json kapil@116.203.177.233:/home/kapil/musicf
rsync -avz --progress dump.sql kapil@116.203.177.233:/home/kapil/musicf
yarn
yarn start
PORT=3055 yarn start