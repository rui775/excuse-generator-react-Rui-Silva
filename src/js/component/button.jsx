import React from "react";

const Button = (props) => {
    let {title, click} = props;
    return (

        <button onClick={click} type="button" class="mt-5 btn btn-default btn-md btn3d">{title}</button>
    )
}

export default Button;