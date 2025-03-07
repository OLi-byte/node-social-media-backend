import JWT from "jsonwebtoken";

function verifyToken(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(403).json({ message: "Token não fornecido" });
  }

  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error(error.message);
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
}

export default verifyToken;
