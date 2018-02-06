### Installation:
```bash
yarn global add ionic nodemon
# make sure ~/.yarn/bin/ is in your PATH (so you don't need 'sudo')
yarn

# if there is problem when yarn installs:
# -> Debian/Ubuntu:
sudo apt install build-essential
# -> Windows:
npm install --global --production windows-build-tools

# edit src-api/config.ts with you DB credentials
cp src-api/config.ts.sample src-api/config.ts
# see also the commands to initialize the DB in this file

#Compile website with
ionic build --prod

#start
yarn start

#Redirect node to port 80 (work on debian/ubuntu):
yarn redirect-port
```

