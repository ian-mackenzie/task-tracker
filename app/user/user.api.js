import { Router } from 'express';
import { authenticate } from 'passport';

const router = Router();

router.post('/signup',()=>{});

router.post(
  "/login",
  authenticate('auth0', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }),
  userLogin);

module.exports = router;
