import React, { useState } from "react";

export const TrafficLight = () => {
    const [ color, setColor ] = useState('dark');
    const [ mostrar, setMostrar ] = useState('true');

    const mostrarDiv = () => {
        setMostrar(!mostrar)
    }
    
    return (
        <div className="container d-flex p-5">
            
            <div className="bg-dark p-5 rounded">
                <button onClick={mostrarDiv}>
                    {mostrar === true ? 'Mostrar' : 'Ocultar'}
                </button>
           
                <div className="d-flex my-2 justify-content-center align-items-center">
                    <div onClick={()=>setColor('danger')} className={`bg-danger rounded-circle`} style={{boxShadow: (color === 'danger' ? '0 0 15px 10px rgba(255, 249, 160)' : ''), width: "100px", height: "100px"}}></div>
                </div>
                <div className="d-flex my-2 justify-content-center align-items-center">
                    <div onClick={()=>setColor('warning')} className={`bg-warning rounded-circle`} style={{boxShadow: (color === 'warning' ? '0 0 15px 10px rgba(255, 249, 160)' : ''), width: "100px", height: "100px"}}></div>
                </div>
                <div className="d-flex my-2 justify-content-center align-items-center">
                    <div onClick={()=>setColor('success')} className={`bg-success rounded-circle`} style={{boxShadow: (color === 'success' ? '0 0 15px 10px rgba(255, 249, 160)' : ''), width: "100px", height: "100px"}}></div>
                </div>
                <div className="d-flex my-2 justify-content-center align-items-center">
                    <div onClick={()=>setColor('purple')} className={`${mostrar === true ? 'visually-hidden' : ''}  rounded-circle`} style={{boxShadow: (color === 'purple' ? '0 0 15px 10px rgba(255, 249, 160)' : ''), backgroundColor:'purple', width: "100px", height: "100px"}}></div>
                </div>
            </div>
        </div>
    );
}