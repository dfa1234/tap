Dependencies:

```bash
yarn global add ionic nodemon
# make sure ~/.yarn/bin/ is in your PATH (so you don't need 'sudo')
yarn
```

if you have problems when `yarn` install maybe try:
```bash
python --version
# you should have something like 2.7.*
sudo apt install build-essential
```
On Windows that should be fixed with: 

```
npm install --global --production windows-build-tools
```


---

Now you need to configure your db password here:
```
cp src-api/config.ts.sample src-api/config.ts
```

Start api server with 
```bash
yarn start
```


Compile website with
```bash
ionic build --prod
```

Redirect node to port 80 (work on debian/ubuntu):
```bash
yarn redirect-port
```

