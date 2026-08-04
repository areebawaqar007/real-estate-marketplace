import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;

//   if (!token) return next(errorHandler(401, 'Unauthorized'));

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return next(errorHandler(403, 'Forbidden'));

//     req.user = user;
//     next();
//   });
// };

export const verifyToken = (req, res, next) => {
  console.log("===== VERIFY TOKEN =====");
  console.log("URL:", req.originalUrl);
  console.log("COOKIES:", req.cookies);
  console.log("ACCESS TOKEN:", req.cookies?.access_token);

  const token = req.cookies?.access_token;

  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("JWT ERROR:", err);
      return next(errorHandler(403, "Forbidden"));
    }

    console.log("USER:", user);

    req.user = user;
    next();
  });
};