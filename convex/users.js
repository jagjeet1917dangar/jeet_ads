import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createNewUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        picture: v.string()
    },
    handler: async (ctx, args) => {
        const userData = await ctx.db.query("users")
            .filter(q => q.eq(q.field("email"), args.email))
            .collect();

        if (userData.length === 0) {
            const data = {
                name: args.name,
                email: args.email,
                picture: args.picture,
                credits: 30
            };
            const result = await ctx.db.insert("users", data);
            console.log(result);

            return {
                ...data,
                _id: result
            };
        } else {
            return userData[0];
        }
    }
});
