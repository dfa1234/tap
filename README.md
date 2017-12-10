After installing yarn :
```
yarn global add ionic nodemon pm2
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




