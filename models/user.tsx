import { InferSchemaType, Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  role: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

export type UserType = InferSchemaType<typeof UserSchema>;

const User = models.User || model("User", UserSchema);

export default User;
