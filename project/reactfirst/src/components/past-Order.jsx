import Dataservice from '../services/dataService';
import './past-Order.css'

function PastOrder (props) { 
    
    const deleteOrder = async() => {
        let service = new Dataservice();
        let res = await service.deleteOrder(props.data.id);
        console.log(res);
    }
    return (
        <div className='past-order'>
            <img className='order-img' src={"./img/"+props.data.rest_img} alt=""/>
            <div>
                <h3>{props.data.restaurant_name}</h3>
                <p><i class="bi bi-calendar-event"></i> {props.data.order_date} · <i class="bi bi-pin-map-fill"></i> {props.data.delivery_address}</p>
                <p>USD ${props.data.order_total}</p>
            </div>
            <div className='order-btns'>
                <button className='inline-btn'>View</button>
                <button className='btn btn-danger' onClick={deleteOrder}>Delete <i class="bi bi-trash-fill"></i></button>
            </div>
            <hr width="800px"/>
        </div>
    )
};

export default PastOrder;