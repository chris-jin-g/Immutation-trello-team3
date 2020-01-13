const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	title: { type: String, required: true},
	content: { type: String, required: true}
});

module.experts = mongoose.model('Post', postSchema);