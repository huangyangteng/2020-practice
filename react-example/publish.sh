#/bin/bash

rm -rf react
npm run build

mv build react

LOCAL_DIR=react/
SERVER=root@111.229.14.189:/root/webapps/demo/react
rsync -v   --progress --stats -r -t -p -l -z -e 'ssh -p 22' --delete  $LOCAL_DIR  $SERVER
