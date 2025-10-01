const jwt = require('jsonwebtoken')
function verifyToken(req, res, next) {
  const token = req.headers.token;  
    //   console.log(token)

  if (!token) return res.status(401).json({ error: "Access Denied",tokenStatus:"failed" });

  try {
    

    const decoded = jwt.verify(token, process.env.JWT_KEY);
        

    req.user = decoded;
    next();
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: "Invalid Token" ,tokenStatus:"failed"});
  }
}
module.exports=verifyToken;