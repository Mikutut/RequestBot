import express from "express";
import path from "path";
import bodyParser from "body-parser";

const PORT = 8080;

const app = express();
const api = express();

app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static('public'))

app.use("/api", api);

app.get('/', (_, res) => {
    res.render('index')
})

api.post("/submit", (req, res) => {
  const reqBody = req.body;

  if(reqBody.data !== undefined) {
    console.log(reqBody.data);
  } else {
    res.status(400).send("<h1>Niepoprawne dane wejściowe!</h1>");
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
