const chokidar = require('chokidar');
const fs = require('fs-extra');  // Ajánlott a 'fs-extra' használata
const path = require('path');  // A 'path' modul a relatív útvonalak kezeléséhez

const sourceDir = path.join(__dirname, 'backend/public/uploads');
const targetDir = path.join(__dirname, 'frontend/public/uploads');

const watcher = chokidar.watch(sourceDir, {ignored: /^\./, persistent: true});

watcher
    .on('add', path => copyFile(path))
    .on('change', path => copyFile(path));

function copyFile(path) {
    const targetPath = path.replace(sourceDir, targetDir);
    fs.copy(path, targetPath, {overwrite: true}, err => {
        if (err) {
            console.error('Error copying file:', err);
        } else {
            console.log(`File copied: ${path} to ${targetPath}`);
        }
    });
}
