import style from './Button.module.css'
function Button({handle}){
    return(
        <>
        <center>

        <button className={style.btn} onClick={handle}>Increment Count</button>
        </center>
        </>
    )
}
export default Button;