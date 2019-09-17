yarn build
find . -name "*.map" -type f -delete
rsync -avz --progress --exclude=__sapper__/dev ./__sapper__ kapil@95.216.152.135:/home/kapil/jsusant