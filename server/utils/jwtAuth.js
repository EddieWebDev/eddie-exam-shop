import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if(!token) {
    return res.status(401).send("No token, authorization denied")
  }

  try{
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      req.user = user
      next()
  } catch(err) {
    res.clearCookie("token")
    res.status(401).send("Token is not valid")
  }
};