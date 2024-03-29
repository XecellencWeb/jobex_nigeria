"use server";

import User, { UserType } from "@/models/user";
import { connectDb } from "@/utils/db";
import { testResend } from "./utils";
import { roles } from "@/constants/global";

export async function createUser(formData: FormData, role: any) {
  const userData = {
    fullName: formData.get("fullname"),
    email: formData.get("email"),
    password: formData.get("password"),
    role,
  };

  await connectDb();

  const createdUser = await User.create(userData);
  const { email, _id, fullName } = createdUser;
  await testResend({
    emails: [email],
    userId: _id,
    firstName: fullName.split(" ")[0],
  });
}

export async function verifyUser({
  userid,
  token,
}: {
  userid: string | null;
  token: string | null;
}) {
  if (!userid || !token) return false;
  if (token != process.env.verify_user_token) return false;
  await connectDb();
  const verifiedUser = await User.findById(userid);
  verifiedUser.isVerified = true;
  await verifiedUser.save();

  if (verifiedUser.role === roles[1]) return roles[1];
  return true;
}

export async function loginUser({ email, password }: any) {
  await connectDb();
  const userExist = await User.findOne({ email });
  if (!userExist) return false;
  if (userExist.password !== password) return false;

  return { userId: userExist.id };
}

export async function setUserRole({ userId, role }: any) {
  await connectDb();
  const user = await User.findById(userId);
  if (user.role) return false;
  user.role = role;
  await user.save();
  return true;
}

export async function getUserRole(userId: string) {
  await connectDb();
  const user = await User.findById(userId);
  return user.role;
}

export async function getUser(userId: string | null) {
  if(!userId)return
  await connectDb();
  const user = await User.findById(userId);
  return JSON.stringify(user);
}


