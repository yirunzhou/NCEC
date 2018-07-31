module.exports = function(app){
  var topic = require('../controllers/topicController');
  
  app.route('/api/topics')
    .get(topic.list_all.topics)
    .post(topic.create_a_topic);
    
  app.route('/api/:topicId')
    .get(topic.read_a_topic)
    .put(topic.update_a_topic)
    .delete(topic.delete_a_topic);
};