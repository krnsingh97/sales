const Sale = require('../models/sale');

exports.index = (req, res) => {
 // req.isAuthenticated();

  Sale.find({
     // author: req.session.userId
    })
   // .populate('author')
    .then(sales => {
      res.render('sales/index', {
        sales: sales,
        title: 'All Sales'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/sales');
    });
};

exports.show = (req, res) => {
 

  Sale.findOne({
      _id: req.params.id,
      
    })
    .then(sale => {
      res.render('sales/show', {
        sale: sale,
        title: sale.name
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/sales');
    });
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

exports.edit = (req, res) => {
  req.isAuthenticated();

  Sale.findOne({
      _id: req.params.id,
      author: req.session.userId
    })
    .then(sale => {
      res.render('sales/edit', {
        sale: sale,
        title: sale.name
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/sales');
    });
};

exports.create = (req, res) => {
  req.isAuthenticated();

  req.body.sale.author = req.session.userId;
  Sale.create(req.body.sale)
    .then(() => {
      req.flash('success', 'New sale was created successfully.');
      res.redirect('/sales');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/sales/new');
    });
};

exports.update = (req, res) => {


  Sale.updateOne({
      _id: req.body.id,
    }, req.body.sale, {
      runValidators: true
    })
    .then(() => {
      req.flash('success', 'The sale was updated successfully.');
      res.redirect(`/sales/${req.body.id}`);
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/sales/${req.body.id}/edit`);
    });
};

exports.destroy = (req, res) => {
  Sale.deleteOne({
    _id: req.body.id
  })
  .then(() => {
    res.redirect('/sales');
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};

exports.destroy = (req, res) => {
  req.isAuthenticated();

  Sale.deleteOne({
      _id: req.body.id,
      author: req.session.userId
    })
    .then(() => {
      req.flash('success', 'The sale was deleted successfully.');
      res.redirect('/sales');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/sales`);
    });
};