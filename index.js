#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');

// GitHub'daki test-npm paketinin olduğu dizine git
const repoPath = path.resolve(__dirname);

// 'git pull' komutunu çalıştır
exec(`git pull https://github.com/huseyiniriss/test-npm.git`, { cwd: repoPath }, (error, stdout, stderr) => {
    if (error) {
        console.error(`Hata oluştu: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Git uyarısı: ${stderr}`);
        return;
    }
    console.log(`Başarılı: ${stdout}`);
});
