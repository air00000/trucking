import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, Key, useEffect, useState} from "react";

interface InputNumberProps {
    value?: number
    label?: string
    icon?: JSX.Element
    name?: string
    disabled?: boolean | false
    key?: Key,
    iconAnchor?: 'left' | 'right'
    placeholder?: string | "0"
    description?: string
    onChangeNumber?: (value: number) => void
}

export function InputNumber(props: InputNumberProps) {

    const [value, setValue] = useState<number>()

    const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = getOnlyNumber(event.target.value)
        props.onChangeNumber ? props.onChangeNumber(newValue) : setValue(newValue)
    }

    const getOnlyNumber = (string: string): number => {
        return Number(string.replace(/\D/g, '').trim())
    }

    useEffect(() => {
        if (props.value != value) {
            setValue(props.value)
        }
    }, [props.value]);

    return (
        <div className="flex flex-col " key={props.key}>
            {props.label ?
                <label className="flex-none ml-1 text-sm font-light text-white">{props.label}</label>
                : null}
            <div
                className="flex flex-row flex-initial h-12 px-1 pb-1 rounded-lg border-1 border-solid border-gray-300
                focus-within:border-green-500">
                {props.iconAnchor === 'left' ? (props.icon ?
                    <div className="self-center m-1">{props.icon}</div> : null) : null}
                <input
                    {...props}
                    value={value}
                    className="hidden"
                    type="number"/>
                <input
                    {...props}
                    name=""
                    value={value}
                    className="rounded-lg border-gray-lagoon ring-0 focus:ring-0 blur:ring-0 w-full bg-dark-gray focus:border-lagoon"
                    type="text"
                    onChange={handlerOnChange}/>
                {props.description ? <div className="self-center m-1"></div> : null}
                {props.iconAnchor === 'right' ? (props.icon ?
                    <div className="self-center m-1">{props.icon}</div> : null) : null}
            </div>
        </div>

    );
}