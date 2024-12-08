import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export const POST = async (req: Request) => {
  try {
    const { refreshToken } = await req.json();

    const user = await User.findOne({ refreshToken });
    if (!user) {
      return NextResponse.json({ error: "Invalid refresh token" }, { status: 401 });
    }

    const tokenData = { id: user._id, email: user.email, username: user.username };
    const newAccessToken = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, { expiresIn: "15m" });

    const response = NextResponse.json({ accessToken: newAccessToken });
    response.cookies.set("accessToken", newAccessToken, { httpOnly: true, maxAge: 15 * 60 });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
