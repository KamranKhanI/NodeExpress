const express = require('express');

const app = express();
const mongoose = require('mongoose');
const blogdata = require('./model/blogmodel');


//middleware
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static('public'));
app.use(express.urlencoded());


//connection string with mongodb

const conString = "mongodb://localhost:27017";

mongoose.connect(conString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connected to mongodb');
});


app.use(express.json());
try {
    con.on('open', () => {
        console.log('connected for new applicATION');
    })
} catch (error) {
    console.log("Error: " + error);
}









app.get('/', (req, res) => {

    res.render('index');
});


app.get('/about', (req, res) => {

    res.render('about');
});
app.get('/blogs', (req, res) => {

    blogdata.find()
        .then((result) => {

            console.log('all blogs goes to view')


            res.render('blogs', {
                blog: result,
            });

        }).catch((error) => {
            console.log(error)
        });


});

app.get('/create', (req, res) => {

    res.render('create');
});


app.post('/create', (req, res) => {

    const blog = new blogdata({
        title: req.body.title,
        email: req.body.email,
        blog: req.body.blog,

    });

    blog.save()
        .then((result) => {
            console.log('Record is saved thats good news');
            res.redirect('blogs');
        })







});




app.use((req, res) => {
    res.status(400).render('404');
})


app.listen(3000, () => {

    console.log('server is running');
});