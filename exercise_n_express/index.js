const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const user = require("./routes/user/user");

// app.use('/', express.static(path.join(__dirname, 'public/html')))
// app.use('/public', express.static(path.join(__dirname, 'public')))

app.use("/user", user);

app.use(function (req, res, next) {
    res.status(404);
    res.send("No se encontró la ruta");
})

app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`);
});