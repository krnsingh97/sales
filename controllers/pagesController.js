const Survey = require('../models/survey');
exports.show = (req, res) => {
    const path = (req.path === '/') ? '/home' : req.path;
    
    //render the view
    res.render(`pages${path}`);
};
exports.new = (req, res) => {
    req.isAuthenticated();
  
    Survey.find({})
  .then(surveys => {
    res.render('surveys/new', {
      title: 'New Survey Post'
    });
  })
  .catch(err => {
    req.flash('error', `ERROR: ${err}`);
    res.redirect('/surveys');
  });
    
  
  };