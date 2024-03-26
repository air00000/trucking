import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";

interface InputTextProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string
    icon?: JSX.Element
    iconAnchor?: 'left' | 'right'
    description?: string
}

export function InputText(props: InputTextProps) {

    return (
        <div className="flex flex-col w-full" key={props.key}>
            {props.label ?
                <label className="flex-none pl-2 text-sm font-light text-white">{props.label}</label>
                : null}
            <div
                className="flex flex-row flex-initial h-12 px-1 pb-1 rounded-lg border-1 border-solid border-gray-lagoon
                focus-within:border-gray-lagoon">
                {props.iconAnchor === 'left' ? (props.icon ?
                    <div className="self-center m-1">{props.icon}</div> : null) : null}
                <input className="rounded-lg border-gray-lagoon ring-0 focus:ring-0 blur:ring-0 w-full bg-dark-gray
                focus:border-lagoon"
                       type="text"
                       {...props}/>
                {props.description ? <div className="self-center m-1"></div> : null}
                {props.iconAnchor === 'right' ? (props.icon ?
                    <div className="self-center m-1">{props.icon}</div> : null) : null}
            </div>
        </div>

    );
}