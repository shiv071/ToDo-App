const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');

const tempPath = path.join(__dirname, "files");
app.set("view engine", "hbs");
app.set("views", tempPath);

app.use(express.static(tempPath));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});

// app.post("/connect1", async (req, res) => {
//     try {
//         console.log(req.body.name1);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// })

app.listen(port, () => {
    console.log("Listening on port ${port}");
})