import { 
  generateAccessToken, 
  generateRefreshToken 
} from "../libs/utils/token.util";
import { randomBytes } from "crypto";

export const generateToken = ( user:any ) => {
  const payload = {
    id: user.id,
    role: user.role,
  };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  return {
    accessToken,
    refreshToken,
  };
};