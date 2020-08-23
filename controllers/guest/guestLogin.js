const { User } = require('../../models');

module.exports = {
	post: (req, res) => {
		const sess = req.session;

		User.findOne({
			where: {
				email: 'guest@memorylog.com',
				password: '12345678',
			},
		})
			.then(data => {
				if (!data) {
					res.status(401).send('Invalid user or Wrong password');
				} else {
					sess.userid = data.id;
					sess.username = data.username;
					res.status(200).send(data);
				}
			})
			.catch(err => res.status(500).send(err));
	},
};
