const express  =require('express');

const app =express();

app.set('view engine','ejs');
//app.set('views','foldername where you save views')



app.get('/',(req,res)=>{

    res.render('index');
});


app.get('/about',(req,res)=>{

    res.render('about');
});
app.get('/blogs',(req,res)=>{

    res.render('blogs');
});

app.get('/create',(req,res)=>{

    res.render('create');
});





app.use((req,res)=>{
    res.status(400).render('404');
})


app.listen(3000,()=>{

console.log('server is running');
});