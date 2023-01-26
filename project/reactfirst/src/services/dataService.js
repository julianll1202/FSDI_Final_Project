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
}

export default Dataservice;
