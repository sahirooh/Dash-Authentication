import Axios from "../axios";

const USER_URL = "http://localhost:5173";

export const signinUser = async ({password, email}) => {
  try {
    const { data } = await Axios.get(`${USER_URL}/signin`, {
        password,
        email
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const signupUser = async ({password, email, firstName, lastName}) => {
  try {
    const  data  = await Axios.get(`${USER_URL}/signup`, {
        password,
        email,
        firstName,
        lastName
    });
    return data;
  } catch (error) {
    throw Error("error");
  }
};