import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../data';

export const createTokens = (payload = { userId: '', username: '' }) => {
  const refreshToken = jwt.sign(
    { userId: payload.userId, username: payload.username },
    REFRESH_TOKEN_SECRET,
    { expiresIn: '30d' }
  );

  const accessToken = jwt.sign(
    { userId: payload.userId, username: payload.username },
    ACCESS_TOKEN_SECRET,
    { expiresIn: '15min' }
  );

  return { refreshToken, accessToken };
};
