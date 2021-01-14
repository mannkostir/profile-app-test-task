import fs from 'fs';

const fsPromises = fs.promises;

const attachCurrentUser = async (req, res, next) => {
  try {
    const db = await fsPromises.readFile('db.json');
    const data = JSON.parse(db);

    const user = data.users.find((user) => user.userId === req.userId);

    if (!user) {
      return res.sendStatus(401);
    }

    res.locals.user = user;

    console.log(user);

    return next();
  } catch (e) {
    next(e);
  }
};

export default attachCurrentUser;
