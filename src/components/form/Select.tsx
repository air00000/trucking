import React, {Attributes, ChangeEvent, FocusEvent, InputHTMLAttributes, MouseEvent, useEffect, useState} from "react";
import {IconArrowDown} from "../icon/IconArrowDown";
import {IconCheck} from "../icon/IconCheck";


interface SelectProps extends InputHTMLAttributes<HTMLSelectElement>, Attributes {
    label?: string
    items: Array<{ value: string | number | readonly string[], text: string }>
    autoClose?: boolean
    textEmptyItems?: string
    onChange?: (event?: any, value?: string | number | readonly string[]) => void
}

export function Select(props: SelectProps) {

    {//TODO ts-ignore}
        // @ts-ignore
        const [value, setValue] = useState<string | number | readonly string[]>(props.multiple ? ([] as string[]) : null)

        const [items, setItems] = useState<Array<{ value: string | number | readonly string[], text: string }>>([])

        const [open, setOpen] = useState(false)

        const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
            setOpen(!open)
        }
        const handleOnBlur = (event: FocusEvent<HTMLDivElement>) => {
            setOpen(false)
        }

        const handleOnClickItem = (event: MouseEvent<HTMLLIElement>) => {
            if (props.multiple) {
                if (!(value as string[])?.length) {
                    setValue([String(event.currentTarget.value)])
                } else {
                    const index = (value as string[]).findIndex((val) => val === String(event.currentTarget.value))
                    if (index == -1) {
                        setValue([...(value as string[]), String(event.currentTarget.value)])
                    } else {
                        const newValue = (value as string[])
                        newValue.splice(index, 1)
                        setValue([...newValue])
                    }
                }
            } else {
                setValue(event.currentTarget.value)
            }
            if (props.autoClose || props.autoClose === undefined && !props.multiple) {
                setOpen(false)
            }
        }

        useEffect(() => {
            setItems(props.items)
        }, [props.items])

        useEffect(() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            value ? props.onChange?.(null, value) : null
        }, [value])


        return (
            <div className="flex flex-col text-white">
                {props.label
                    ? <label className="flex-none text-sm font-light">{props.label}</label>
                    : null
                }
                <div className="relative h-10 ring-0 rounded-lg border border-solid border-gray-lagoon pl-3 pr-3 flex w-full items-center
            focus:border-lagoon focus:ring-0 cursor-pointer
            blur:ring-0"
                     tabIndex={0}
                     onBlur={handleOnBlur}
                >
                    <div className="flex justify-between items-center w-full gap-8"
                         onClick={handleOnClick}>
                        {
                            props.multiple
                                ? getMultipleOptions()
                                : getSimpleOptions()
                        }
                        <IconArrowDown/>
                        <select
                            className="hidden" {...props}
                            value={value}>
                            {value ? <option selected value={value}>{value}</option> : null}
                        </select>
                    </div>
                    {
                        open
                            ? dropdownOptions()
                            : null
                    }
                </div>
            </div>
        );

        // @ts-ignore
        function getMultipleOptions() {
            if (!value || (value as readonly string[]).length == 0) {
                return <div className="text-gray-300">Выбрать</div>
            }
            let items = props.items
                .filter(i => (value as readonly string[]).includes(i.value as string))
                .map(i => i.text)
                .join(" ")
            return <>
                {
                    <input tabIndex={-1}
                           readOnly={true}
                           disabled={true}
                           type="number"
                           className="w-full pl-0 cursor"
                           value={items}
                    />
                }
            </>
        }

        // @ts-ignore
        function getSimpleOptions() {
            if (items && items.length > 0 && value) {
                let view = items.find(item => item.value == value)
                if (view) {
                    return view.text
                } else {
                    return <div className="text-gray-300">Выбрать</div>
                }
            } else {
                return <div className="text-gray-300">Выбрать</div>
            }
        }

        // @ts-ignore
        function dropdownOptions() {
            return <ul
                className="absolute bg-gray-lagoon shadow-lg rounded top-0 left-0 mt-14 overflow-y-auto max-h-60 w-full z-10">
                {props.items?.length ?

                    props.items.map((it, index) => {
                        return (
                            <li className="flex flex-row p-2 text-sm hover:bg-lagoon justify-between"
                                value={it.value}
                                key={index}
                                onClick={handleOnClickItem}>
                                <div>{it.text}</div>
                                {
                                    props.multiple ?
                                        (value as string[])?.length ?
                                            (value as string[]).map((val, index) => {
                                                return (it.value == val ?
                                                    <div key={index}><IconCheck colorCheck="white"/></div>
                                                    : <></>)
                                            }) : <></>
                                        :
                                        it.value === value ?
                                            <div className=""><IconCheck colorCheck="white"/></div>
                                            : null}
                            </li>
                        )
                    })

                    :
                    <li className="p-2 text-sm bg-gray-300 justify-between">
                        <div>{props.textEmptyItems ? props.textEmptyItems : "-"}</div>
                    </li>
                }
            </ul>
        }
    }

}