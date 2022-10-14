import http from "../common";

const getAll = () => {
  return http.get("/users");
};


const UserService = {
    getAll
};
  
export default UserService;