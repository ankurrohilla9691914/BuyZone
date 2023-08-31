import User from "../model/userSchema.js";
export const userSignUp = async (request, response) => {
  try {
    /**is userName already exist */

    const isUserExist = await User.findOne({ userName: request.body.userName });
    if (isUserExist) {
      return response.status(401).json({ message: "userName already Exist" });
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  try {
    /**is userName already exist */
    const user = await User.findOne({ userName: request.body.userName });
    if (user) {
      const userName = request.body.userName;
      const password = request.body.password;
      if (userName === user.userName && password === user.password) {
        return response.status(200).json({ data: user });
      }
    }
    response.status(401).json({ message: "invalid userName or password" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};


