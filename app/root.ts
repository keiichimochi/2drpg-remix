import { createCookieSessionStorage } from "@remix-run/node";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: ["your-secret-key"], // 本番環境では環境変数から取得
    secure: process.env.NODE_ENV === "production",
  },
});
