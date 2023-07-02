import User from "../Model/user-schema.js";

export const testingServer = (req, res)=>{
    res.send('Server is live now')
}

export const postUserData = async (req, res) =>{
    const userData = req.body;
    const lastUser = await User.findOne().sort({ id: -1 }); // Get the user with the highest id
    const newId = lastUser ? lastUser.id + 1 : 1; // Increment the id or set it to 1 if no user exists
    const user = new User({...userData, id: newId}); // Create a new user with the incremented id
    const validatedUser = new User(user);
    try{
        await validatedUser.save();
        res.status(201).json(validatedUser);
    }catch(error){
        res.status(409).json({message : error.message})
    }
}

export const getUsers = async(req,res) =>{
    const users = await User.find({});
    res.status(200).json(users);
}

export const getSpecificUser = async(req, res) =>{
    const user = await User.find({id : req.params.id});
    res.status(200).json(user);
}

export const editSpecificUser = async(req,res) =>{
    const user = req.body;
    const id = req.params.id;
    const validatedUser = new User(user);

    try{
        await User.updateOne({id : id}, validatedUser);

    }catch(error){
        console.log('error while updating data in database : ', error);
    }
}

export const deleteSpecificUser = async (req, res) =>{
    const id = req.params.id;
    try{
        await User.deleteOne({id : id});
    }catch(error){
        console.log('error while deleting data in database : ', error);
    }
}