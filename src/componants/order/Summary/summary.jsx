import"./summary.css";
import axios from "axios";

export default function Summary(props){

    
    const{summaryHandler,handleSucess,completeData} = props;
    return<div id="summary_holder">
        <div id="summary_page">
        <div id="summary_header">
        <h3>Summary</h3>
        <i className="fa-solid fa-xmark " onClick={() => summaryHandler(false)} ></i>
        </div>
        <div className="store_addrs">
            <select>
                <option>Jp Nagar</option>
            </select>
            <dl>
                <dt><b>Store Address:</b></dt>
                <dd>Near Phone booth, 10th road</dd>
            </dl>
            <dl>
                <dt><b>Phone:</b></dt>
                <dd>91 9999999999</dd>
            </dl>
        </div>
        <div className="order_details">
            <p className="summary_title_name">Order Details</p>
            <div className="summary_orderlist">
            {
                completeData.orders.map(data=>{
                    return <div key={data.product_type} className="summary_order_container">
                    <p className="summary_prodduct_type">{data.product_type}</p>
                    <p className="summary_wash_type">{data.wash_type}</p>
                    <p className="summary_qty">{`${data.quantity} X ${data.price} = `}</p>
                    <p className="single_total">{Number(data.quantity)*Number(data.price)}</p>
                    </div>
                })
            }
            </div>
            
            <p className="summary_sub_total">Sub total :  <span> {completeData.total_price - 90}</span></p>
            <p className="summary_pickup">Pickup Charges: <span> 90</span></p>
            <div className="total_price">Total : RS {completeData.total_price} </div>
        </div>
        <div className="address_holder" >
            <p className="address_title">Adderss</p>
            <div className="address_container">
            <address>
                <p><b>Home</b></p>
                <p>#223, 10th road, Jp Nagar, Bangalore</p>
            </address>
            <address>
                <p><b>Other</b></p>
                <p>#223, 10th road, Jp Nagar, Bangalore</p>
            </address>
            <button className="address_btn">
            ADD NEW
            </button>
            </div>
        </div>
        
        <button 
        className="summary_confirm" 
        onClick={()=>{
            handleSucess(true);
            summaryHandler(false);
            // console.log(completeData);
            async function postCall(){
                try{
                    let url = "https://laundrycart-api.onrender.com/createorder";
                    await axios(url,{
                        method: "post",
                        data:completeData,
                        headers:{
                            authorization: localStorage.getItem('token')
                        }
                    })

                    

                }
                catch(e){

                }

            }
            postCall();


        }}
              >Confirm</button>
        
    </div>
    </div>
}