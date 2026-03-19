import jwt from "jsonwebtoken";

/**
 * 🔐 Generate JWT Token & set cookie
 */
export const generateToken = (userId, res) => {
  const token = jwt.sign(
    { userId },                    // payload
    process.env.JWT_SECRET,        // secret key
    {
      expiresIn: "7d",             // token expiry
    }
  );

  // send token as cookie
  res.cookie("jwt", token, {
    httpOnly: true,                // prevents XSS attacks
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",            // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return token;
};