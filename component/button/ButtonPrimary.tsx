import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {ButtonQuestion} from "@/component/button/ButtonQuestion";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label?: string
    description?: string
    icon?: JSX.Element
    iconAnchor?: 'left' | 'right'
}

export function ButtonPrimary(props: ButtonProps) {

    return (
        <div className="flex flex-row gap-x-1" hidden={props.hidden}>

            <button
                className={`flex flex-row flex-initial h-12 p-3 text-white bg-green-500 rounded-lg
                ${props.disabled ?
                    "cursor-none bg-gray-500" :
                    "cursor-pointer hover:bg-green-600 focus:outline-green-500 focus:outline-2 focus:outline focus:outline-offset-2 active:bg-green-700"}
                    `}
                type="button"
                {...props}>

                {props.icon ? (props.iconAnchor === 'left' ?
                    <div className="self-center">{props.icon}</div> : null) : null}

                {props.label ? <div className="self-center ml-4 mr-4">{props.label}</div> : null}

                {props.icon ? (props.iconAnchor === 'right' ?
                    <div className="self-center">{props.icon}</div> : null) : null}

            </button>
            {props.description ? <ButtonQuestion/> : null}
        </div>
    );
}