import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .filter(q => q.eq(q.field("email"), args.email))
      .collect();

    if (existingUser.length === 0) {
      const data = {
        name: args.name,
        email: args.email,
        picture: args.picture,
        credit: 30, // ✅ matches schema
      };

      const insertedId = await ctx.db.insert("users", data);
      console.log("New user created:", insertedId);

      return {
        ...data,
        _id: insertedId,
      };
    } else {
      return existingUser[0];
    }
  },
});
