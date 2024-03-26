import IconLogo from "../../../components/icon/IconLogo";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className={"flex flex-col p-8 bg-dark-gray border-t-[0.5px] border-solid border-lagoon"}>
            <div className={"flex flex-row text-white items-center gap-16"}>
                <Link className={"flex flex-row gap-2"} to={"/"}>
                    <IconLogo/>
                    <div className={"flex items-center"}>
                        <span className={"font-bold"}>truck</span>
                        <span>ing</span>
                    </div>
                </Link>
                <div className={"flex flex-row text-white font-extralight gap-4"}>
                    <span>Для перевозчиков</span>
                    <span>Для грузовладельцев</span>
                </div>
                <div className={"flex flex-row ml-auto gap-4 mr-4"}>
                    <Link to={"/signin"}>Войти</Link>
                    <Link to={"/signup"}>Регистрация</Link>
                </div>
            </div>
            <div className={"flex flex-col gap-8 pt-8 p-4 text-white"}>
                <div>Найти грузы</div>
                <div>Найти транспорт</div>
                <div>Приватная биржа</div>
                <div>Каталог компаний</div>
            </div>
        </div>
    )
}