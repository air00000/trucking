export default function Item(){
    return(
        <div className={"flex flex-row p-4 h-20 rounded-lg bg-dark-gray shadow-card shadow-gray-lagoon text-xs text-white"}>
            <div className={"w-[20%]"}>
                Уфа
            </div>
            <div className={"w-[20%]"}>
                Казань
            </div>
            <div className={"w-[40%]"}>
                <div className={"flex flex-row gap-2"}>
                    <span>21т</span>
                    <span>81м^3</span>
                    <span>тнп</span>
                </div>
            </div>
            <div className={"w-[10%]"}>
                Ждем предложения
            </div>
            <div className={"w-[10%]"}>
                ООО "ГРУЗ"
            </div>
        </div>
    )
}