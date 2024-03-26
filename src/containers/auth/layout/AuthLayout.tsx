import type {PropsWithChildren} from "react";
import IconLogo from "../../../components/icon/IconLogo";
import {Link} from "react-router-dom";


export default function AuthLayout({children}: PropsWithChildren) {
    return (
        <div className={"flex flex-col min-h-screen bg-dark"}>
            <div className={"flex flex-row items-center gap-16 px-8 py-4 bg-dark-gray border-b-[0.5px] border-solid border-lagoon "}>
                <Link className={"flex flex-row text-white gap-2"} to={"/"}>
                    <IconLogo/>
                    <div className={"flex items-center"}>
                        <span className={"font-bold"}>truck</span>
                        <span>ing</span>
                    </div>
                </Link>
                <div className={"flex flex-row text-white gap-4"}>
                    <span>Для перевозчиков</span>
                    <span>Для грузовладельцев</span>
                </div>
                <div className={"flex ml-auto items-center text-white gap-4"}>
                    <Link to={"/signin"}>Войти</Link>
                    <Link to={"/signup"}>Регистрация</Link>
                    <span className={"font-extralight"}>RU</span>
                </div>
            </div>
            {children}
        </div>
    )
}