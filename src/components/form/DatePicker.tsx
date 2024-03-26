import {Datepicker} from "flowbite-react";

interface DatePickerProps {
    label: string,
}

export default function DatePicker(props: DatePickerProps){
    return (
        <div className={"flex flex-col"}>
            <div className={"pl-1 text-sm text-white"}>{props.label}</div>
            <div className={"mb-1"}>
                <Datepicker/>
            </div>
        </div>
    )
}