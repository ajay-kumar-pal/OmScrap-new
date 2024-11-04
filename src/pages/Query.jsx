import './Query.css';
import { mobile_no } from '../Master/Header';
import query_recycle from '../image/query/query_recycle.png';
import query_hero from '../image/query/query_hero.png';
import hand50pxwhite from '../image/query/hand50pxwhite.png';



const Query =()=>{
    return(
        <>
        <section id="stil_query">
        <div class="query_row">
            <div class="left_img">
                <img src={query_recycle} alt="" srcset=""/>
            </div>
            <div id="center_query"class="center_query">
                <div class="query_text" >
                    <h2 id="query_h2">Still have a Query ?</h2>
                </div>
                <div class="query_phone">
                    <img src={hand50pxwhite} alt=""/>
                    <h3 id="query_h3"> { mobile_no }</h3>
                </div>
            </div>
            <div class="right_img">
                <img src={query_hero} alt="" srcset=""/>
            </div>
        </div>
    </section>
        </>
    );
};

export default Query;