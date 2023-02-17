const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(routes);

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running in Port ${PORT}`))