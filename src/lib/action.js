"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs"

export const addPost = async (prevState, formData) => {

    const { title, desc, slug, userId} = Object.fromEntries(formData);
    try {
        connectToDb()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })

        await newPost.save();
        console.log("saved to db")
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err)
        return {error: "Something went wrong in action js"}
    }
}

export const deletePost = async (formData) => {

    const { id } = Object.fromEntries(formData);
    try {
        connectToDb()
        await Post.findByIdAndDelete(id);
        console.log("deleted from db")
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err)
        return {error: "Something went wrong in action js"}
    }
}

export const addUser = async (prevState, formData) => {

    const { username, email, password, img} = Object.fromEntries(formData);
    try {
        connectToDb()
        const newUser = new User({
            username, email, password, img
        })

        await newUser.save();
        console.log("saved to db")
        revalidatePath("/admin");
    } catch (err) {
        console.log(err)
        return {error: "Something went wrong in action js"}
    }
}

export const deleteUser = async (formData) => {

    const { id } = Object.fromEntries(formData);
    try {
        connectToDb()
        await Post.deleteMany({userId: id});
        await User.findByIdAndDelete(id);
        console.log("deleted from db")
        revalidatePath("/admin");
    } catch (err) {
        console.log(err)
        return {error: "Something went wrong in action js"}
    }
}


export const handleGithubLogin = async ()=>{
    "use server"
    await signIn("github");

};

export const handleLogout = async () => {
    "use server"
    await signOut();
}

export const register = async (previousState, formData) => {
    const {username, email, password, img, passwordRepeat} = Object.fromEntries(formData);

    if(password !== passwordRepeat){
        return {error: "Password do not match"}
    }

    try {

        connectToDb();
        const user = await User.findOne({username});
        if(user){
            return {error: "Username already exists"};
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });

        await newUser.save();
        console.log("saved to db!")
        return {success : true}

    } catch (e) {
        console.log(e);
        return {error : "Something went wrong!"}
    }
}

export const login = async(prevState, formData) => {
    const {username, password} = Object.fromEntries(formData);

    try {

        await signIn("credentials", {username, password});
       
    } catch (e) {
        console.log(e);
        if(e.message.includes("CredentialsSignin")){
            return {error: "Invalid username or password"}
        }
        throw e
    }
}