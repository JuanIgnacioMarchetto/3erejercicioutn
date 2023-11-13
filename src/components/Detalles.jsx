import React from "react";

const Detalles = () => {
    const sku = "Xforce123";

    return (
        <div className="">
            <h3 className="mt-6">
               Original salido de los cómics.
            </h3>
            <h3 className="mt-6">
                Incluye figura y accesorios
            </h3>
            
            <h3 className="mt-6">$13,500.00</h3>
            
            <p className="mt-6">Disponibles: 3 Un</p>
            
            <p className="mt-6">SKU: {sku}</p> 
        </div>
    );
};

export default Detalles;
