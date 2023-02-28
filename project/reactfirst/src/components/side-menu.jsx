import { Link } from "react-router-dom";
import { useState } from "react";
import "./side-menu.css";

function SideMenu() {
    const [extended, setExtended] = useState(false);
    const extendMenu = () => {
        document.getElementById("sidebar").style.width = "200px";
        setExtended(true);
    }

    const collapseMenu = () => {
        document.getElementById("sidebar").style.width = "5%";
        setExtended(false);
    }

    return (
        <div id="sidebar" className="side-menu">
            {!extended ? 
                <button id="open-btn" onClick={extendMenu}><i class="bi bi-list"></i></button> :
                <button id="close-btn" onClick={collapseMenu}><i class="bi bi-x-square"></i></button>
            }
            
            <div  className="page-links">
                
                <Link aria-current="page" to="/favorites">  
                    {!extended ?
                        <i class="bi bi-heart-fill"></i> : 
                        <div>
                            <i class="bi bi-heart-fill"></i> Favorites
                        </div>
                    }  
                </Link>
                <Link aria-current="page" to="/past-orders">  
                    {!extended ?
                        <i class="bi bi-receipt"></i> : 
                        <div>
                            <i class="bi bi-receipt"></i> Past orders
                        </div>
                    }  
                </Link>
                <Link aria-current="page" to="/favorites">  
                    {!extended ?
                        <i class="bi bi-question-circle"></i> : 
                        <div>
                            <i class="bi bi-question-circle"></i> Help
                        </div>
                    }  
                </Link>
                
            </div>
        </div>
    );
}

export default SideMenu;