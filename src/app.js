const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 80;

const publicstaticpath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partialpath);

app.use(express.static(publicstaticpath));

app.get("/", (req, res) => {
    res.render("index.hbs");
});

app.get("/about", (req, res) => {
    res.render("about.hbs");
});

app.get("/weather", (req, res) => {
    res.render("weather.hbs");
});

app.get("*", (req, res) => {
    res.render("404.hbs", {
        errormsg: "Oops! Page Not Found Click the Go Back button to Go Home Page"
    });
});

app.listen(port, () => {
    console.log(`Listening to PORT ${port}`);
});
