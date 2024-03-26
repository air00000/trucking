import {InputText} from "../../../../components/form/InputText";
import {Select} from "../../../../components/form/Select";
import {InputNumber} from "../../../../components/form/InputNumber";
import DatePicker from "../../../../components/form/DatePicker";



export default function CargoFilter(){
    return(
        <div className={"flex flex-col m-8 p-8 rounded-2xl gap-4 bg-dark-gray shadow-card shadow-gray-lagoon"}>
            <div className={"flex gap-4 flex-row"}>
                <InputText label={"Откуда"} placeholder={"Город, область, страна"}/>
                <InputText label={"Куда"} placeholder={"Город, область, страна"}/>
            </div>
            <div className={"flex flex-row items-center gap-4"}>
                <Select label={"Тип кузова"} items={[
                    {value: 1, text: "Закрытый"},
                    {value: 2, text: "Открытый"},
                    {value: 3, text: "Контейнеры"},
                    {value: 4, text: "Цистерны"},
                    {value: 5, text: "Особые"},
                ]}/>
                <Select label={"Опасный груз"} items={[
                    {value: 1, text: "1.1"},
                    {value: 2, text: "1.2"},
                    {value: 3, text: "1.3"},
                    {value: 4, text: "1.4"},
                ]}/>
                <InputNumber label={"Тонны"}/>
                <InputNumber label={"Объем"}/>
                <div>
                    <DatePicker label={"Дата погрузки"}/>
                </div>
            </div>
        </div>
    )
}