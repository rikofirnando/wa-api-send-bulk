# wa-api-send-bulk
A. Hal-hal yang perlu dipersiapkan dan dipasang instalasi software sebelum melakukan proyek:
1. Node.js
2. Git Bash
3. Visual Studio Code
4. Install ekstensi Waboxapp

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
8. Generate project
```
express --view=ejs wa-api
```
9. Install packages
```
npm install
```
10. Jalankan NPM tersebut
```
npm start
```
11. Install nodemon
```
npm install nodemon --save-dev
```
12. Ubah salah satu dari skrip Package.json
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

