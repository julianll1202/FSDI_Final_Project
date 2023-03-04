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
        console.log(token);
        let res = await axios.post("http://127.0.0.1:5000/user-profile/"+token, {"token": token});

        return res.data;
    }

    async editUserInfo(userData) {
        let res = await axios.post("http://127.0.0.1:5000/user-profile", userData);
        return res.data;
    }

    async logOutUser() {
        let res = await axios.get("http://127.0.0.1:5000/user/logout");
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

    async getRestaurantDetails(restId) {
        let info = await axios.get("http://127.0.0.1:5000/restaurant/"+restId);
        return info.data;
    }
    async getMenu(restId) {
        let res = await axios.get("http://127.0.0.1:5000/menu/"+restId);
        return res.data;
    }

    async addFavorite(userId, restId) {
        let res = await axios.post("http://127.0.0.1:5000/user/"+userId+"/favorite/"+restId);
        return res.data;
    }

    async removeFavorite(userId,restId) {
        let res = await axios.delete("http://127.0.0.1:5000/user/"+userId+"/favorite/"+restId);
        return res.data;
    }

    async getFavorites(userId) {
        let list = await axios.get("http://127.0.0.1:5000/user/"+userId+"/favorite");
        return list.data;
    }

    async getFoodDetails(foodId) {
        let details = await axios.get("http://127.0.0.1:5000/food/details/"+foodId);
        return details.data;
    }

    async saveOrder(order) {
        let res = await axios.post("http://127.0.0.1:5000/order", order);
        return res.data;
    }

    async loadPastOrders(user_id) {
        let past_orders = await axios.get("http://127.0.0.1:5000/user/"+user_id+"/orders");
        return past_orders.data;
    }

    async deleteOrder(order_id) {
        let res = await axios.delete("http://127.0.0.1:5000/order/"+order_id);
        return res.data;
    }
}   

export default Dataservice;
