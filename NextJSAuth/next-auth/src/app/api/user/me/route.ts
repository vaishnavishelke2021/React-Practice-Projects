import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";

import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

// export const GET = async (request: NextRequest) => {
//   try {
//     const userId = await getDataFromToken(request);

//     // Ensure database query is awaited
//     const user = await User.findOne({ _id: userId }).select("-password");

//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     return NextResponse.json({
//       message: "User Found",
//       data: user,
//     });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// };

export const GET = async (request: NextRequest) => {
    try {
      const userId = await getDataFromToken(request);
  
      const user = await User.findOne({ _id: userId }).select("-password");
      return NextResponse.json({
        message: "User Found",
        data: user,
      });
    } catch (error: any) {
      if (error.message === "Token expired") {
        // Clear the token cookie when expired
        const response = NextResponse.json({ error: "Session expired" }, { status: 401 });
        response.cookies.set("token", "", { httpOnly: true, maxAge: 0 }); // Clear cookie
        return response;
      }
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  };
  