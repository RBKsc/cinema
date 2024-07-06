import styles from "./Banner.module.css"

function Banner ({img, color}){
    return(
        <div className={styles.caps} style={{backgroundImage:`url("/img/banner-${img}.png")`}}>
            <div className={styles.gradient} style={{background:`${color}`}}> 

            </div>

        </div>
    )
}

export default Banner