import style from "./Show.module.css"
function Show({cnt}){
    return(
        <>
        <center>
        <h1 className={style.h1}>The current no of counts are {cnt}</h1>
        </center>
        </>
    )
}
export default Show;