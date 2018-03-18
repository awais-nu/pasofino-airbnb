exports.loadagreements = function(req, res) {
	// res.render('index.html');
	res.sendFile('login.html', {root: './public'});
};
