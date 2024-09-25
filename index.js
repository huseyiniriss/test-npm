#!/usr/bin/env node
const { exec } = require('child_process');

// 'git pull' komutunu çalıştır
exec('git pull', (error, stdout, stderr) => {
    if (error) {
        console.error(`Hata oluştu: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Hata çıktı: ${stderr}`);
        return;
    }
    console.log(`Komut çıktısı: ${stdout}`);
});
