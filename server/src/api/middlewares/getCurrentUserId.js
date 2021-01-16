import jwt from 'jsonwebtoken';
import { createTokens } from '../../utils/createTokens';
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../../data';

const getCurrentUserId = async (req, res, next) => {
  const { accessToken, refreshToken } = req.cookies;

  if (!accessToken && !refreshToken) {
    console.log('No tokens passed');
    return res.sendStatus(401);
  }

  try {
    const decodedAccessToken = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
    req.userId = decodedAccessToken.userId;
    return next();
  } catch (e) {
    console.log(e);
  }

  if (!refreshToken) {
    console.log('No refresh token passed');
    return res.sendStatus(401);
  }

  let decodedRefreshToken;

  try {
    decodedRefreshToken = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    console.log('Verify error');
  } catch {
    return res.sendStatus(401);
  }

  const createdTokens = createTokens({
    userId: decodedRefreshToken.userId,
    username: decodedRefreshToken.username,
  });

  res.cookie('accessToken', createdTokens.accessToken, { httpOnly: true });
  res.cookie('refreshToken', createdTokens.refreshToken, { httpOnly: true });
  req.userId = decodedRefreshToken.userId;

  console.log(req.userId);

  return next();
};

export default getCurrentUserId;
