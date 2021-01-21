const ctrl = require('../controllers');
const passport = require('../passport');
const router = require('express').Router();

router.get('/', (req, res) => res.status(200).send("Success, HubbleNews' API is running."));
router.get('/api', (req, res) => res.status(200).send("Success, HubbleNews' API is running."));

/*
** User
*/
router.post('/api/signin', ctrl.userController.signin);
router.post('/api/signup', ctrl.userController.signup);
//router.get('/api/logout', passport.authenticate('jwt', { session: false }), ctrl.userController.logout);
router.get('/api/me', passport.authenticate('jwt', { session: false }), ctrl.userController.me);
router.post('/api/user/update', passport.authenticate('jwt', { session: false }), ctrl.userController.updateInfos);
router.post('/api/user/image', passport.authenticate('jwt', { session: false }), ctrl.userController.editImage);

/*
** News
*/
router.post('/api/news/favorite', passport.authenticate('jwt', { session: false }), ctrl.newController.favorite);
router.get('/api/news/comments', ctrl.newController.getComments);
router.post('/api/news/comment',  passport.authenticate('jwt', { session: false }), ctrl.newController.comment);
//router.post('/api/upvote', passport.authenticate('jwt', { session: false }), ctrl.newController.upvote);
//router.get('/api/news', ctrl.newController.getNews);

/*
** HubbleSite
*/
router.get('/api/hubblesite/news', ctrl.hubblesiteController.news);
router.get('/api/hubblesite/news_release', ctrl.hubblesiteController.news_release);

module.exports = router;