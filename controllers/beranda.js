exports.mainPage = (req,res)=>{

    const title = "Beranda"
    res.render('beranda',{
        title
    });
};