var facebookCallback = function (req, res) {

    // redirect
    // res.header('Location', '/kitty');
    // res.send(302, 'your response');
    res.send(200, 'success facebook login');
};

module.exports = facebookCallback;