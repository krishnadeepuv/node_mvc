exports.get_404_page = (req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', { page_title: '404 Error' });
}