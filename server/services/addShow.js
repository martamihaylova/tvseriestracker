const Show  = require('../models/TVSeries');

function addShow(data) {
    // let found = data.find((x) => x?.username.toLowerCase() === name.toLowerCase());
    // if (found) 
    let user = async() => await req.user;
    let show = new Show(data);
    return show.save()
        .then(() => {
            user.shows.push(show);
            user.save();
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err.message);
        })
}

module.exports = addShow;