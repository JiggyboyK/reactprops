import React from "react";
import './Item.css'
import propTypes from "prop-types";


const Item= ({item, handleVision})=> {
    return (
        <>
            <tr>
                <th>
                    <img
                    className="clickImg"
                    src={require("../assets/eyeIcon.png")}
                    alt="eyeIcon"
                    onClick={ () => handleVision(item.name)}
                    />
                </th>
                <td>
                    <img
                    className="rounded"
                    style={{ width: "250px"}}
                    src= {item.imgSrc}
                    alt={item.name} />
                </td>
                <td>
                    <h4>{item.name}</h4>
                </td>
                <td>
                    <h4>{item.price}</h4>
                </td>
            </tr>
        </>
    )

}

Item.propTypes = {
    item: propTypes.object
}

export default Item; 
