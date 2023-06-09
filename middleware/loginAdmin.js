import jwt from 'jsonwebtoken';


export const verifyToken = (req, res, next) => {
  // Obtener el token enviado por el cliente
  const token = req.headers.authorization?.split(' ')[1];

  // Verificar si el token existe
  if (!token) {
    return res.json({
      login: false
    });
  }

  // Verificar si el token es válido
  try {
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.id;
    req.userName = decoded.name;
    next();
  } catch (error) {
    return res.json({
      login: false
    });
  }
};
