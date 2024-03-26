import Item from "./Item";

export default function TransportRequests(){
    return(
        <div className={"flex flex-col px-8 pb-8 mx-4 gap-4 text-white"}>
            <span className={"font-bold"}>
                Найдите подходящие и выгодные грузы
            </span>
            <div className={"flex flex-row mx-4"}>
                <span className={"text-sm font-light w-[20%]"}>ОТКУДА</span>
                <span className={"text-sm font-light w-[20%]"}>КУДА</span>
                <span className={"text-sm font-light w-[40%]"}>ОПИСАНИЕ</span>
                <span className={"text-sm font-light w-[10%]"}>СТОИМОСТЬ</span>
                <span className={"text-sm font-light w-[10%]"}>ОТВЕТСТВЕННЫЙ</span>
            </div>
            <div className={"flex flex-col gap-4"}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    )
}