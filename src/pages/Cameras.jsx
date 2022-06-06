import React from "react";

const Cameras = (props) => {
    return (
        <div className="cameras">
            {props.cameras.map(camera => {
                return (
                    <div className="camera">
                        <h2>{camera.name}</h2>
                        <p>${camera.price}</p>
                        <img src={camera.img} alt="" />
                        <button onClick={() => {
                            // props.setCart(props.cart.concat(camera));
                            props.setTotal((parseFloat(props.total) + parseFloat(camera.price)));
                            props.setItemCount(props.itemCount+1);
                        }}>Add to Cart</button>
                    </div>
                )
            })}
        </div>
            )
}

export default Cameras;