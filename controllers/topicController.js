var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

exports.list_all_topics = function(req, res){
    Topic.find({}, function(err, topics){
        if(err){
            res.send(err);
        }
        res.json(topics);
    });
};

exports.create_a_task = function(req, res){
    var new_topic = new Topic(req.body);
    new_topic.save(function(err, topic){
        if(err){
            res.send(err);
        }
        res.json(topic);
    });
};