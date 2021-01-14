import jsonServer from 'json-server';
import AuthService from '../../services/AuthService';
import attachCurrentUser from '../middlewares/attachCurrentUser';
import getCurrentUserId from '../middlewares/getCurrentUserId';

export default (prefix = '', app) => {
  app.post(`${prefix}/signup`, async (req, res, next) => {
    try {
      const authService = new AuthService();

      const { username } = await authService.SignUp(req.body);

      return res
        .status(201)
        .json({ username, message: `User successfully created` });
    } catch (e) {
      return next(e);
    }
  });

  app.post(`${prefix}/signin`, async (req, res, next) => {
    try {
      const authService = new AuthService();

      const {
        accessToken,
        refreshToken,
        username,
        userId,
      } = await authService.SignIn(req.body);

      res.cookie('accessToken', accessToken, { httpOnly: true });
      res.cookie('refreshToken', refreshToken, { httpOnly: true });

      return res.status(200).json({
        username,
        userId,
        message: 'Signed in successfully',
      });
    } catch (e) {
      return next(e);
    }
  });

  app.post(
    `${prefix}/check_auth`,
    getCurrentUserId,
    attachCurrentUser,
    (_, res, next) => {
      try {
        return res.status(200).json({
          userId: res.locals.user.id,
          username: res.locals.user.username,
        });
      } catch (e) {
        return next(e);
      }
    }
  );

  app.post(`${prefix}/logout`, (_, res, next) => {
    try {
      res.clearCookie('accessToken');
      res.clearCookie('refreshToken');

      return res.sendStatus(204);
    } catch (e) {
      return next(e);
    }
  });
};
