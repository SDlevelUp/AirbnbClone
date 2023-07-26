import nextAuth from "next-auth";
import bycrypt from "bycrypt";

export default NextAuth({
    session:{
        strategy:'jwt'
    }
})