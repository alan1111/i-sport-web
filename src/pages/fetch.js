import axios from "axios";

const addUser = async (body) => {
  try {
    const result = await axios.post('/user/add', body);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { addUser };
