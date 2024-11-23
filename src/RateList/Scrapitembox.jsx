import React from 'react';
import './RateList.css';

const Scrapitembox = (props) => {
    return(
        <>
            <div class="scrapItem_box">
            <div class="itemImg">
                {/* <!-- 200px x 200px --> */}
                <img src={props.imgsrc} alt="ironimg"/>
            </div>
            <div class="itemName">
                {props.namesrc}
            </div>
            <div class="itemPrice">
                <div class="newPrice">
                    <span class="amt">Price : </span>
                    <span class="amt">&#x20b9; </span>
                    <span class="amt">{props.pricesrc}</span>
                    <span class="amt"> {props.unitsrc}</span>
                </div>
                <div class="desc_box">
                    <p>{props.descsrc}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Scrapitembox;