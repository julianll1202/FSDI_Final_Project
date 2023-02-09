import axios from 'axios';

class Dataservice {
    async saveUser(user_mockup) {
        let res = await axios.post("http://127.0.0.1:5000/signup", user_mockup);
        return res.data;
    } 
    
    async validateUserCred(user_cred) {
        let res = await axios.post("http://127.0.0.1:5000/login", user_cred);
        return res.data;
    }

    async getUserInfo(token) {
        let res = await axios.get("http://127.0.0.1:5000/user-profile/"+token);
        return res.data;
    }

    async editUserInfo(userData) {
        let res = await axios.post("http://127.0.0.1:5000/user-profile", userData);
        return res.data;
    }

    async loadRestaurants() {
        let res = await axios.get("http://127.0.0.1:5000/home");
        return res.data;
    }

    async loadCategories() {
        let res = await axios.get("http://127.0.0.1:5000/category")
        return res.data;
    }

    async getMenu(restId) {
        let res = await axios.get("http://127.0.0.1:5000/menu/"+restId);
        return res.data;
    }
}   

export default Dataservice;
