import { useContext, useEffect, useState } from 'react';
import PastOrder from '../components/past-Order';
import Dataservice from '../services/dataService'
import UserContext from '../state/userContext';

function PastOrders() {
    const user = useContext(UserContext).user;
    const [orders, setOrders] = useState([]);

    useEffect(()=> {
        loadOrders();
    },[])
    const loadOrders = async() => {
        let service = new Dataservice();
        let res = await service.loadPastOrders(user.id);
        console.log(res);
        setOrders(res);
    }
    return (
        <div>
            <h1 className='title'>Past Orders</h1>
            {orders ? orders.map(ordr => <PastOrder key={ordr.id} data={ordr} />): console.log("You have no orders")}
        </div>
    )
};

export default PastOrders;