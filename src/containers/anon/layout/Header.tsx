import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div className={"flex flex-col py-2 bg-dark border-b-[0.5px] border-solid border-lagoon  sticky top-0"}>
            <div className={"flex flex-row items-center gap-2 px-8"}>
                <div className={"flex flex-row text-white gap-4 px-4"}>
                    <Link to={"/dashboard/cargo"}>Найти грузы</Link>
                    <Link to={"/dashboard/transport"}>Найти транспорт</Link>
                    <div>Приватная биржа</div>
                    <div>Каталог компаний</div>
                </div>
                <div className={"flex ml-auto items-center text-white gap-4"}>
                    <div>Связаться с нами</div>
                </div>
            </div>
        </div>
    )
}

