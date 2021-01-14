import bcrypt from 'bcryptjs';
import { createTokens } from '../utils/createTokens';
import fs from 'fs';
import User from '../models/User';

const fsPromises = fs.promises;

export default class AuthService {
  constructor(userModel = User) {
    this.userModel = userModel;
  }
  async SignUp({ username = '', password = '' }) {
    try {
      const db = await fsPromises.readFile('db.json');
      const data = JSON.parse(db, 'UTF-8');

      const candidate = data.users.find((user) => user.username === username);

      if (candidate) {
        const err = new Error('User with this name already exists');
        err.status = '409';

        throw err;
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = { ...this.userModel, username, password: hashedPassword };

      data.users.push(user);

      await fsPromises.writeFile('db.json', JSON.stringify(data));

      return { username: user.username };
    } catch (e) {
      throw e;
    }
  }

  async SignIn({ username = '', password = '' }) {
    try {
      const db = await fsPromises.readFile('db.json');
      const data = JSON.parse(db);

      const user = data.users.find((user) => user.username === username);

      if (!user) {
        const err = new Error('Wrong username or password');
        err.status = '401';

        throw err;
      }

      const isMatch = await bcrypt.compare(password, user?.password);

      if (!isMatch) {
        const err = new Error('Wrong username or password');
        err.status = '401';

        throw err;
      }

      const { accessToken, refreshToken } = createTokens({
        userId: user.id,
        username: user.username,
      });

      return { accessToken, refreshToken, userId: user.id, username };
    } catch (e) {
      throw e;
    }
  }
}
