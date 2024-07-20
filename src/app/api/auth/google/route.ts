import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { OAuth2Client } from "google-auth-library";
import { NextRequest } from "next/server";
const jwt = require("jsonwebtoken");

import {
  deleteCookie,
  getCookie,
  setCookie,
  hasCookie,
  getCookies,
} from "cookies-next";

const oAuth2Client = new OAuth2Client({
  clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  redirectUri:
    process.env.GOOGLE_REDIRECT_URI || "http://localhost:3000/api/auth/google",
});

export const GET = async (req: NextRequest) => {
  let accessToken;
  let refreshToken;
  let expiresDate;

  let code;
  let scope;

  if (req.nextUrl.searchParams) {
    code = req.nextUrl.searchParams.get("code");
    scope = req.nextUrl.searchParams.get("scope");
  }

  if (!code) {
    const authUrl = oAuth2Client.generateAuthUrl({
      prompt: "consent",
      access_type: "offline",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    });

    return Response.redirect(authUrl);
  }

  const { tokens } = await oAuth2Client.getToken(code);

  const userInfoCookieContent = tokens.id_token;

  setCookie("user_info", userInfoCookieContent, { cookies });

  return redirect("/auth-callback");
};
