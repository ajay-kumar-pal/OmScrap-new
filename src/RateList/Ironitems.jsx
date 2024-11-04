import './RateList.css';
import Scrapitembox from './Scrapitembox';
import  Ironitemsdata, {heading}  from "./Ironitemsdata";

const Ironitems = () => {
    return(
        <>
            <div class="category_heading">
                {heading}
            </div>
            {/* <!--start rate all list full list --> */}
            <div class="scrapList_container">
                {/* <!-- ******start scrap item box---------------***** --> */}
                    
                    {Ironitemsdata.map(function dlist(val){
                        
                        return(
                            <Scrapitembox
                                imgsrc={val.dimg}
                                namesrc={val.dname}
                                pricesrc={val.dprice}
                                unitsrc={val.dunit}
                                descsrc={val.ddese}
                            />
                        );
                    })}
                {/* <!-- ******end scrap item box---------------***** --> */}
            </div>
            {/* <!--end rate all list full list --> */}
        </>
    );
};

export default Ironitems;