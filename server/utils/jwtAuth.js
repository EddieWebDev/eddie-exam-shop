import jwt from "jsonwebtoken";

// Check if logged in
export const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send("No token, authorization denied");
  }

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (err) {
    res.clearCookie("token");
    res.status(401).send("Token is not valid");
  }
};

// Check if logged in as admin
export const authenticateAdminToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send("No token, authorization denied");
  }

  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (user.role === "admin") {
      next();
    } else {
      return res.status(401).send("Authorization denied");
    }
  } catch (err) {
    res.clearCookie("token");
    res.status(401).send("Token is not valid");
  }
};
