import "./restaurantMenu.css";
import Food from "./food";
import Dataservice from "../services/dataService";
import { useEffect, useState } from "react";

const RestaurantMenu = (props) => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        loadMenu();
    },[])
    const loadMenu = async () => {
        let service = new Dataservice();
        let data = await service.getMenu(props.data.data.id);
        console.log(props);
        setMenu(data);
        console.log(data);
    }
    return(
        <div>
            <h1>Menu</h1>
                <div className="menu-grid">
                    { menu.map( f => <Food key={f.id} data={f} />)}
                </div>
                
  
        </div>
    )
}

export default RestaurantMenu;