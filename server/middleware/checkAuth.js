function ifLoged(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth/login');
}

function ifNotLoged(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/auth/login');
    }
    next();
}
module.exports = {
    ifLoged,
    ifNotLoged,
};