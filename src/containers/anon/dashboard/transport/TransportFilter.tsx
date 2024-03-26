import {InputText} from "../../../../components/form/InputText";
import {Select} from "../../../../components/form/Select";
import {InputNumber} from "../../../../components/form/InputNumber";
import DatePicker from "../../../../components/form/DatePicker";



export default function TransportFilter(){
    return(
        <div className={"flex flex-col m-8 p-8 rounded-2xl gap-4 bg-dark-gray shadow-card shadow-gray-lagoon text-white"}>
            <div className={"flex gap-4 flex-row w-[80%]"}>
                <InputText label={"Откуда"} placeholder={"Город, область, страна"}/>
                <InputText label={"Куда"} placeholder={"Город, область, страна"}/>
            </div>
            <div className={"flex flex-row w-[70%] items-center gap-4"}>
                <div className={"flex flex-col gap-4"}>
                    <div className={"flex flex-row gap-6"}>
                        <div className={"px-1"}>
                            <DatePicker label={"Дата погрузки"}/>
                        </div>
                        <Select label={"Категория авто"} items={[
                            {value: 1, text: "Фургон легкий"},
                            {value: 2, text: "Грузовик 3.5т - 12т"},
                            {value: 3, text: "Фура"},
                            {value: 4, text: "Спецтехника"},
                        ]}/>
                        <Select label={"Тип кузова"} items={[
                            {value: 1, text: "Фургон легкий"},
                            {value: 2, text: "Грузовик 3.5т - 12т"},
                            {value: 3, text: "Фура"},
                            {value: 4, text: "Спецтехника"},
                        ]}/>
                        <Select label={"Опасный груз"} items={[
                            {value: 1, text: "1.1"},
                            {value: 2, text: "1.2"},
                            {value: 3, text: "1.3"},
                            {value: 4, text: "1.4"},
                        ]}/>
                    </div>
                    <div className={"flex flex-row gap-4  w-[60%]"}>
                        <div className={"flex flex-col"}>
                            <span className={"px-2 text-sm"}>
                                Свободный тоннах, тонны
                            </span>
                            <div className={"flex flex-row gap-4"}>
                                <InputNumber placeholder={"От"}/>
                                <InputNumber placeholder={"До"}/>
                            </div>
                        </div>
                        <div className={"flex flex-col"}>
                            <span className={"px-2 text-sm"}>
                                Свободный объем, м^3
                            </span>
                            <div className={"flex flex-row gap-4"}>
                                <InputNumber placeholder={"От"}/>
                                <InputNumber placeholder={"До"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}