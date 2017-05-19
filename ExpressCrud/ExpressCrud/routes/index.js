
exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};

exports.list = function (req, res) {
    req.getConnection(function (err, connection) {

        connection.query('SELECT * FROM movies', function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.render('contact', { page_title: "Customers - Node.js", data: rows });

        });

    });

};
/*
req.getConnection((err, movies) => {
        movies.query('SELECT * FROM movie ', (err, rows) =>{
            let locals = {
                tittle: 'Lista Peliculas',
                data: rows
            }
            res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
        })
    })
*/