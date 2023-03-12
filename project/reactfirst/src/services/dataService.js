import axios from 'axios';
let directory = "http://127.0.0.1:5000/";
class Dataservice {
    
    async saveUser(user_mockup) {
        let res = await axios.post(directory+"signup", user_mockup);
        return res.data;
    } 
    
    async validateUserCred(user_cred) {
        let res = await axios.post(directory+"login", user_cred);
        return res.data;
    }

    async getUserInfo(token) {
        console.log(token);
        let res = await axios.post(directory+"user-profile", {"token": token});

        return res.data;
    }

    async editUserInfo(userData) {
        let res = await axios.put(directory+"user-profile/edit", userData);
        return res.data;
    }

    async logOutUser() {
        let res = await axios.get(directory+"user/logout");
        return res.data;
    }
    async loadRestaurants() {
        let res = await axios.get(directory+"home");
        return res.data;
    }

    async loadCategories() {
        let res = await axios.get(directory+"category")
        return res.data;
    }

    async getRestaurantDetails(restId) {
        let info = await axios.get(directory+"restaurant/"+restId);
        return info.data;
    }

    async getMenu(restId) {
        let res = await axios.get(directory+"menu/"+restId);
        return res.data;
    }

    async addFavorite(userId, restId) {
        let res = await axios.post(directory+"user/"+userId+"/favorite/"+restId);
        return res.data;
    }

    async removeFavorite(userId,restId) {
        let res = await axios.delete(directory+"user/"+userId+"/favorite/"+restId);
        return res.data;
    }

    async getFavorites(userId) {
        let list = await axios.get(directory+"user/"+userId+"/favorite");
        return list.data;
    }

    async getFoodDetails(foodId) {
        let details = await axios.get(directory+"food/details/"+foodId);
        return details.data;
    }

    async saveOrder(order) {
        let res = await axios.post(directory+"order", order);
        return res.data;
    }

    async loadPastOrders(user_id) {
        let past_orders = await axios.get(directory+"user/"+user_id+"/orders");
        return past_orders.data;
    }

    async deleteOrder(order_id) {
        let res = await axios.delete(directory+"order/"+order_id);
        return res.data;
    }
}   

export default Dataservice;
