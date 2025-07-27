const jwt = require("jsonwebtoken");

function jwtAuth(secretKey) {
  return async (req, res, next) => {
    try {
      const checkToken = req.headers.authorization;
       if(!checkToken){
        return res.status(401).json({message: 'Token missing'})
       }

       const Token = checkToken.split(" ")[1];



      const verifiedToken = jwt.verify(Token, secretKey);
      if (!verifiedToken) {
        return res.status(401).json({
          message: "Token Invalid",
        });
      }

      req.user = verifiedToken;
      next();
    } catch (e) {
      return res.status(500).json({
        message: "some error occured",
        error: e,
      });
    }
  };
}

module.exports = jwtAuth;
