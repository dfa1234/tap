After installing yarn :
```
python --version
#you should have something like 2.7.*
sudo apt-get install build-essential g++ python-dev
yarn global add ionic nodemon pm2
# add ~/.yarn/bin/ to your PATH (no need to do 'sudo yarn global')
yarn install
yarn redirect-port
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




