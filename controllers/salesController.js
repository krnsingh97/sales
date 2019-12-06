const Survey = require('../models/survey');

exports.index = (req, res) => {
 // req.isAuthenticated();

  Survey.find({
     // author: req.session.userId
    })
   // .populate('author')
    .then(surveys => {
      res.render('surveys/index', {
        surveys: surveys,
        title: 'All Surveys'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/surveys');
    });
};

exports.show = (req, res) => {
 

  Survey.findOne({
      _id: req.params.id,
      
    })
    .then(survey => {
      res.render('surveys/show', {
        survey: survey,
        title: survey.name
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/surveys');
    });
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

exports.edit = (req, res) => {
  req.isAuthenticated();

  Survey.findOne({
      _id: req.params.id,
      author: req.session.userId
    })
    .then(survey => {
      res.render('surveys/edit', {
        survey: survey,
        title: survey.name
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/surveys');
    });
};

exports.create = (req, res) => {
  req.isAuthenticated();

  req.body.survey.author = req.session.userId;
  Survey.create(req.body.survey)
    .then(() => {
      req.flash('success', 'New survey was created successfully.');
      res.redirect('/surveys');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/surveys/new');
    });
};

exports.update = (req, res) => {


  Survey.updateOne({
      _id: req.body.id,
    }, req.body.survey, {
      runValidators: true
    })
    .then(() => {
      req.flash('success', 'The survey was updated successfully.');
      res.redirect(`/surveys/${req.body.id}`);
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/surveys/${req.body.id}/edit`);
    });
};

exports.destroy = (req, res) => {
  Survey.deleteOne({
    _id: req.body.id
  })
  .then(() => {
    res.redirect('/surveys');
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};

exports.destroy = (req, res) => {
  req.isAuthenticated();

  Survey.deleteOne({
      _id: req.body.id,
      author: req.session.userId
    })
    .then(() => {
      req.flash('success', 'The survey was deleted successfully.');
      res.redirect('/surveys');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/surveys`);
    });
};