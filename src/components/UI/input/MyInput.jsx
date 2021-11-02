import React from "react";
import classes from './MyInput.module.css';

function MyButton({...props}) {
    return(
        <input {...props} className={classes.myInput} />
    )
}

export default MyButton;
