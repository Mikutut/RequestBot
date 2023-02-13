import express from "express";
import path from "path";
import fs from "fs/promises";
import util from "util";
import multer from "multer";

const IP = "localhost"
const PORT = 80

const app = express();

// console.log() => zapisuje do pliku

const log_file = fs.createWriteStream(__dirname + '/logs.log', {
    flags: 'w'
});
const log_stdout = process.stdout;

console.log = (x) => {
    log_file.write(util.format(x) + '\n');
    log_stdout.write(util.format(x) + '\n');
}

// console.log() => zapisuje do pliku

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
    // console.log('GET => index');
})

// app.use((req, res, next) => {
//     res.status(404).redirect('/')
//     console.log('GET => 404')
// })

app.post('/', multer().none(), function(req, res, next) {
    console.log(req.body.formText)
    res.redirect('/')
});

app.listen(PORT, IP, () => {
    const date = new Date()
    console.log(date.getMonth() + 1 + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + " | start server")
})
