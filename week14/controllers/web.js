const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// /   --- landing page
// account creation

// /homepage --- (protected) 
// display all the blog posts

// /dashboard
// display all the blog posts by the current user
router.get('/dashboard', withAuth, function (req, res) {


  const posts = [
    {
      title: 'Im hangry',
      content: "i want maccas"
    },
    {
      title: 'HJ is better',
      content: "i want maccas"
    },
  ];


  res.render('dashboard', {
    logged_in: req.session.logged_in,
    posts,
  });
  
})

// 

router.get('/auth', function(req, res){
  
  if (req.session.logged_in) {
    return res.redirect('/dashboard')
  }
  res.render('login', {
    logged_in: req.session.logged_in
  })

})

router.post('/auth/login', async function(req, res){
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.render('login', {error: "User not found"})
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.render('login', { error: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.redirect('/dashboard');
    });

  } catch (err) {
    res.render('login', {error: err});
  }
});

router.post('/auth/signup', async (req, res) => {


  // if(req.session.logged_in){
  //   return res.redirect('/dashboard')
  // }

  // sign up user
  try {
    const userData = await User.create(req.body);  // should validate user input

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.redirect('/dashboard');
    });
  } catch (err) {
    res.render('login', {
      error: err.message
    })
  }

})


router.get('/', async (req, res) => {
  res.render('landing', {
    logged_in: req.session.logged_in
  });
});

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
