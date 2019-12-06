const Sale = require('../models/sale');
exports.show = (req, res) => {
    const path = (req.path === '/') ? '/home' : req.path;
    
    //render the view
    res.render(`pages${path}`);
};
exports.new = (req, res) => {
    req.isAuthenticated();
  
    Sale.find({})
  .then(sales => {
    res.render('sales/new', {
      title: 'New Sale Post'
    });
  })
  .catch(err => {
    req.flash('error', `ERROR: ${err}`);
    res.redirect('/sales');
  });
    
  
  };