import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    console.log("Token:", token);

    const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);
    console.log("Decoded Token:", decodedToken);

    return decodedToken.id;
  } catch (error) {
    console.error("JWT Verification Error:", error);
    throw new Error("Invalid or expired token");
  }
};
