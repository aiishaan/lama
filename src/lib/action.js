export const addPost = async (formData) => {
    "use server"
    const { title, desc, slug, userId} = Object.fromEntries(formData);
    console.log(title, desc, slug)
}