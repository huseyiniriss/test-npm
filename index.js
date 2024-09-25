#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Git deposunun olması gereken dizini belirle
const repoPath = path.resolve(__dirname, 'test-npm');

// Eğer dizin yoksa, depoyu klonla
if (!fs.existsSync(repoPath)) {
    console.log('Depo bulunamadı, klonlama işlemi başlatılıyor...');
    exec(`git clone https://github.com/kullanici-adi/test-npm.git`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Klonlama sırasında hata oluştu: ${error.message}`);
            return;
        }
        console.log(`Klonlama tamamlandı: ${stdout}`);
        // Klonlama sonrası pull yap
        gitPull(repoPath);
    });
} else {
    // Depo zaten varsa, git pull yap
    gitPull(repoPath);
}

// git pull işlemi fonksiyonu
function gitPull(repoDir) {
    exec('git pull', { cwd: repoDir }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Git pull sırasında hata oluştu: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Git uyarısı: ${stderr}`);
            return;
        }
        console.log(`Başarılı: ${stdout}`);
    });
}
