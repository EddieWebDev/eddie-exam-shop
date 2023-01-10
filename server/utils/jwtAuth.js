import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if(!token) {
    return res.status(401).json("No token, authorization denied")
  }

  try{
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      req.user = user
      next()
  } catch(err) {
    res.status(401).json("Token is not valid")
  }
};