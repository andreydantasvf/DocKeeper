require("express-async-errors");
const AppError = require("./utils/AppError");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(routes);

// standardizing the errors
app.use((error, request, response, next) => {
  // comparing the error with AppError to statusCode 400
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.log(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  });
})

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running in Port ${PORT}`))