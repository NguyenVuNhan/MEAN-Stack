const express = require('express');
const mongoose = require('mongoose');
const Video = require('../models/video');

const router = express.Router();

const db = "<MongoDatabase url>"
mongoose.Promise = global.Promise;
mongoose.connect(db,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	(err) => {
		if (err) {
			console.log("Error: " + err);
	}
});

router.get('/videos', (req, res) => {
	console.log('Get request for all videos');
	Video.find({})
		.exec((err, videos) => {
		if (err) {
			console.log('Error while retrieving video');
		} else {
			res.json(videos);
		}
	});
});

router.get('/videos/:id', (req, res) => {
	console.log('Get request for a video ' + req.params.id);
	Video.findById(req.params.id)
		.exec((err, video) => {
		if (err) {
			console.log('Error while retrieving video');
		} else {
			res.json(video);
		}
	});
});


router.post('/video', (req, res) => {
	console.log('Post a video');
	var newVideo = new Video();
	newVideo.title = req.body.title;
	newVideo.url = req.body.url;
	newVideo.description = req.body.description;
	newVideo.save((err, insertedVideo) => {
		if (err) {
			console.log('Error saving video');
		} else {
			res.json(insertedVideo);
		}
	});
});


router.put('/video/:id', (req, res) => {
	console.log("Update video " + req.params.id);
	Video.findByIdAndUpdate(req.params.id,
		{
			$set: {
				title : req.body.title,
				url : req.body.url,
				description : req.body.description,
			}
		},
		{
			new: true,
			useFindAndModify: false
		},
		(err, updateVideo) => {
			if (err) {
				res.send("Error updating video");
			} else {
				res.json(updateVideo);
			}
		}
	);
});

router.delete('/video/:id', (req, res) => {
	console.log("Deleting video " + req.params.id);
	Video.findByIdAndRemove(req.params.id,
		{
			useFindAndModify: false
		},
		(err, deleteVideo) => {
			if (err) {
				res.send("Error deleting video");
			} else {
				res.json(deleteVideo);
			}
		}
	);
});

module.exports = router;
