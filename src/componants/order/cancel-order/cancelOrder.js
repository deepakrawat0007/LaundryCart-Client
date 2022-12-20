import React, { useState } from "react";
import "./cancelOrder.css"

const CancelOrder = (props) => {

    
    return (
        <>
            <section style={{display: props.display}}>
                <div className="cancel-order-container">
                    <div className="cancel-header">
                        <p className="alert-window">Alert</p>
                        <i className="fa-solid fa-xmark " onClick={() => props.setCancelDisplay("none")} ></i>
                    </div>
                    <div className="alert-body">
                        <aside className="alert-sign"><i className="fa-solid fa-triangle-exclamation fa-2x"></i></aside>
                        <div className="alert-msg-body">
                            <div><p>Are you sure you want to cancel the order No: ORD3435</p></div>
                            <div className="cancel-order-btn"><button>Proceed</button></div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default CancelOrder;