import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

connect();

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    // check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }
    console.log("User Exists");

    // check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return new NextResponse("Invalid password", { status: 401 });
    }

    // create token data
    const tokenData = {
      id: user._id,
      email: user.email,
      username: user.username,
    };

    // create token
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1m",
    });

    const response = NextResponse.json({
      message: "Login Successful",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
