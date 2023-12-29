# wa-api-send-bulk
A. Hal-hal yang perlu dipersiapkan dan dipasang instalasi software sebelum melakukan proyek:
1. Node.js
2. Git Bash
3. Visual Studio Code
4. Postman
5. Install ekstensi Waboxapp di Google Chrome saja

B. Cek service memastikan sudah terpasang dengan baik:
- Node Version
```
node -v
```
- NPM Version
```
npm -v
```

C. Install App NPM:
```
npm install -g express-generator
``` 
```
express --version
```

D. Buat direktori dan masuk ke dalam direktori tersebut
E.G:
1. Buka Visual Studio Code
2. Buka terminal dengan menggunakan shortcut button "CTRL+Shift+`"
3. Pilih terminal "Git Bash" pada bagian bawah sebelah kanan ada tanda + disebelahnya untuk expand
4. Pilih "Git Bash" pastikan Git Bash sudah terpasang
5. Masukan perintah untuk masuk ke salah satu direktori
E.G:
```
cd /c/Users/rikof/OneDrive/Dokumen/
```
6. Buat direktori
```
mkdir wa-api
```
7. Masuk ke dalam direktori "wa-api"
```
cd wa-api
```
E. Generate project, Install packages, dan jalankan NPM
1. Generate project
```
express --view=ejs wa-api
```
2. Install packages
```
npm install
```
3. Jalankan NPM tersebut
```
npm start
```
F. Install nodemon, Ubah salah satu line pada file "package.json", Jalankan kembali npm-nya, Ubah salah satu line pada file "index.js", dan Kemudian, pengetesan menggunakan Postman
1. Install nodemon
```
npm install nodemon --save-dev
```
2. Ubah salah satu line pada file "package.json"
Pada bagian berikut:
```
  "scripts": {
    "start": "node ./bin/www"
```
Menjadi
```
  "scripts": {
    "start": "nodemon ./bin/www"
```

3. Jalankan kembali npm-nya
```
npm start
```

4. Ubah salah satu line pada file "index.js"
```
res.render('index', { title: 'Express' });
```
Menjadi
```
res.send({code: 1000, message: 'success'})
```
5. Kemudian, pengetesan menggunakan Postman
- Masukan "Method: GET"
- Masukan "Endpoint: localhost:3000"
- Send
- Jika muncul respon 200 OK dan
```
"code": 1000,
"message": "success"
```

G. 
