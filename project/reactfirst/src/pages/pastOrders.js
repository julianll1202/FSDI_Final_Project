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

    const onDelete = (order) => {
        console.log("Deleted,",order);
        let copy =orders.filter(x=>x.id !== order.id);
        setOrders(copy);
        console.log(copy);

    }
    return (
        <div>
            <h1 className='title'>Past Orders</h1>
            {orders ? orders.map(ordr => <PastOrder key={ordr.id} onDelete={onDelete} data={ordr} />): console.log("You have no orders")}
        </div>
    )
};

export default PastOrders;