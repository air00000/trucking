import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";


interface ButtonBorderless extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label?: string
    description?: string
    icon?: JSX.Element
    iconAnchor?: 'left' | 'right'
}

export function ButtonBorderlessAdmin(props: ButtonBorderless) {

    return (
        <div className="flex flex-row gap-x-1" hidden={props.hidden}>

            <button
                className="flex flex-row flex-initial h-12 p-3 text-green-500 rounded-lg
                hover:text-green-600
                focus:outline-green-500 focus:outline-2 focus:outline focus:outline-offset-2
                active:text-black"
                {...props}>

                {props.icon ? (props.iconAnchor === 'left' ?
                    <div className="self-center">{props.icon}</div> : null) : null}

                {props.label ? <div className="self-center mr-4 ml-4">{props.label}</div> : null}

                {props.icon ? (props.iconAnchor === 'right' ?
                    <div className="self-center">{props.icon}</div> : null) : null}

            </button>
        </div>
    );
}