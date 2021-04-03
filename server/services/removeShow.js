const Users = require('../models/Users');

function removeShow(userId, show) {
  
    return Users.findById(userId)
        .then((user) => {
            let index = user.shows.findIndex(x => x.id === show.id);
        
            user.shows.splice(index, 1);
            user.save()
        })
        .catch((err) => console.log(err))


}

module.exports = removeShow;