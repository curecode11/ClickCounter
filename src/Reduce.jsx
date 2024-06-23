import style from './Reduce.module.css';
function Reduce({handle}){
    return(
        <>
            <center>
                <button className={style.btn} onClick={handle}>Decrement Count</button>
            </center>
        </>
    )
}
export default Reduce;