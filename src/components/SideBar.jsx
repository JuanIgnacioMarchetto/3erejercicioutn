import React from "react";

const SideBar = ({ setCurrentImage, imagenes }) => {

    function handleClick( imagen ) {
        setCurrentImage(imagen);
    }

    return (
    
        imagenes.map( imagen => (
            <div className="" key={ imagen }>
                <img className={ `rounded mx-auto d-block mt-3` } src={ imagen } height='100' style={{ cursor: 'pointer' }} onClick={ () => handleClick(imagen) } />
            </div>
        ))
    
    );
};

export default SideBar;