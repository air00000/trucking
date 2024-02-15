import React from 'react'
import style from "./Modal.module.scss"

// @ts-ignore
export default function Modal({onClose, children}){

    const onCloseClick = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        onClose()
    };

    return(
        <div className={ `${style.active} ${style.modal}`} onClick={onCloseClick}>
             <div className={style.modal_window} onClick={e => e.stopPropagation()}>
                 {children}
             </div>
         </div>
    )
}