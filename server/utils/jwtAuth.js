import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {

  const token = req.headers.authorization;

  if(!token) {
    return res.status(401).json({message: "No token, authorization denied"})
  }

  try{
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      req.user = user
      next()
  } catch(err) {
    res.status(401).json({message: "Token is not valid"})
  }
};