import React, {SVGProps} from "react";
interface IconCheck extends SVGProps<SVGSVGElement>{
    colorCheck?:string
}
export function IconCheck(props:IconCheck) {

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path id="Vector" d="M6 12L10.2426 16.2426L18.727 7.75732" stroke={props.colorCheck ? props.colorCheck : "#000000"} strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    );
}