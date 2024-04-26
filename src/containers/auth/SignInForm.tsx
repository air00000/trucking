import {InputText} from "../../components/form/InputText";
import IconLogo from "../../components/icon/IconLogo";
import {Link} from "react-router-dom";
import {SetStateAction, useEffect, useState} from "react";

export default function SignInForm() {

    const [isUsePhone, setIsUsePhone] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleChangeSignInMethod() {
        setIsUsePhone(!isUsePhone)
    }


    async function SignIn(email: string, password: string) {
        const response = await fetch("http://localhost:3000/auth/signin", {
            method: "POST",
            headers: new Headers({
                    "Host": "http://localhost:3000",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            ),
            body: JSON.stringify({
                "email": email.toString(),
                "password": password.toString()
            })
        })
            .then((response) => response.json())
            .catch(it => console.log(it))
    }

    function handleChangeEmail(event: { target: { value: SetStateAction<string>; }; }) {
        setEmail(event.target.value)
    }

    function handleChangePassword(event: { target: { value: SetStateAction<string>; }; }) {
        setPassword(event.target.value)
    }


    return (
        <div
            className={"flex flex-col items-center self-center m-8 p-4 w-[30%] rounded-lg bg-dark-gray shadow-card shadow-gray-lagoon text-white"}>
            <div className={"flex flex-col items-center gap-2"}>
                <IconLogo/>
                <span className={"text-xl"}>Добро пожаловать!</span>
                <div className={"text-sm"}>
                    <Link to={"/signup"} className={"underline"}>Зарегистрируйтесь</Link>
                    <span> или </span>
                    <Link to={"/signin"} className={"underline"}>войдите</Link> в свой акккаунт
                </div>
            </div>
            <div className={"flex flex-col w-full p-4 gap-4"}>
                {isUsePhone
                    ? <InputText placeholder={"+79999999999"} label={"Номер"}/>
                    : <InputText onChange={handleChangeEmail} placeholder={"exampla@gmail.com"} label={"Почта"}/>
                }
                <InputText onChange={handleChangePassword} label={"Пароль"}/>
                <button onClick={() => (SignIn(email, password))}>Войти</button>
                {isUsePhone
                    ? <button onClick={handleChangeSignInMethod} className={"text-xs"}>Использовать номер
                        телефона</button>
                    : <button onClick={handleChangeSignInMethod} className={"text-xs"}>Использовать почту</button>
                }
            </div>
        </div>
    )
}