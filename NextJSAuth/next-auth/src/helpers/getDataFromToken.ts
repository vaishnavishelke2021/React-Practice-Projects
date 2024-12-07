import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";

    if (!token) {
      throw new Error("Token not found");
    }

    const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);
    return decodedToken.id;
  } catch (error: any) {
    if (error.name === "TokenExpiredError") {
      throw new Error("Token expired");
    }
    throw new Error("Invalid token");
  }
};
