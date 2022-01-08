import fs from 'fs';
import child_process from 'child_process';
 
// converter.setFfmpegPath("ffmpeg", function(err) {
//     if (err) throw err;
// });
 
// convert mp4 to mp3
const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

let firstFile = myArgs[0];

const convertFileName = (fileName, newExtension) => {
    let newFilename = fileName.split(".")[0] + "." + newExtension;
    return newFilename
}

const getFilesByExtension = (extension) => {
    let files = fs.readdirSync('./');
    let filteredFiles = files.filter(file => file.includes(extension));
    return filteredFiles;
}

// converter.convert(firstFile, convertFileName(firstFile, mp4), function(err) {
//     if (err) throw err;
//     console.log("done");
// });
 

const convertVideoFile = (fileName, newExtension) => {
    try {
        // const command = `ffmpeg -i ${fileName} -vn -ar 44100 -ac 2 -ab 192k -f ${newExtension} ${convertFileName(fileName, newExtension)}`;
        const command = `ffmpeg -i ${fileName} -c:v copy -c:a copy -y ${convertFileName(fileName, newExtension)}`;
        console.log('command: ', command);
        child_process.execSync(command);
        console.log('file converted');
    }
    catch (err) {
        console.log('error: ', err);
    }
}

const convertFilesInDirectory = (oldExtension, newExtension) => {
    let files = getFilesByExtension(oldExtension);
    files.forEach(file => {
        convertVideoFile(file, newExtension);
    });
}

// convertVideoFile(firstFile, 'mp4');

convertFilesInDirectory('avi','mp4');


