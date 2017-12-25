After installing yarn :
```
yarn global add ionic nodemon pm2
# add ~/.yarn/bin/ to your PATH (no need to do 'sudo yarn global')
yarn install
yarn redirect-port
```

if you have problem with `yarn install` you would need to do:
```
python --version
#you should have something like 2.7.*
sudo apt-get install build-essential g++ python-dev
```

You need to configure your db password here:
```
cp src-api/config.ts.sample src-api/config.ts
```

Start api server with 
```
yarn tsnode
```


Compile website with
```
ionic build --prod
```




