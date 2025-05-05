    
import asyncHandler from '../../utils/asyncHandler.js';

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Ok"
    })
    // get user details
    //validation- not empty
    //check if user already exists
    //check for images, avatar
    //upload images to cloudinary
    //create user object - create entry in db
    //remove password and refresh token from response
    //check for user creation success
    //return reponse

})

export { registerUser}