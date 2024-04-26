import IconLogo from "../../components/icon/IconLogo";
import {Link} from "react-router-dom";
import {InputText} from "../../components/form/InputText";
import {useState} from "react";
import {InputNumber} from "../../components/form/InputNumber";

export default function SignUpForm() {

    const [isUsePhone, setIsUsePhone] = useState(false)
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    function handleChangeSignInMethod()  {
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


    return (
        <div
            className={"flex flex-col items-center self-center m-8 p-4 w-[30%] rounded-lg bg-dark-gray shadow-card shadow-gray-lagoon text-white"}>
            <div className={"flex flex-col items-center gap-2"}>
                <IconLogo/>
                <span className={"text-xl"}>Добро пожаловать!</span>
                <div className={"text-sm gap-1"}>
                    <Link to={"/signup"} className={"underline"}>Зарегистрируйтесь</Link>
                    <span> или </span>
                    <Link to={"/signin"} className={"underline"}>войдите</Link> в свой акккаунт
                </div>
            </div>
            <div className={"flex flex-col w-full p-4 gap-4"}>
                {isUsePhone
                    ? <InputNumber placeholder={"+79999999999"} label={"Номер"}/>
                    : <InputText placeholder={"exampla@gmail.com"} label={"Почта"}/>
                }
                <button>Продолжить</button>
                {isUsePhone
                    ? <button onClick={handleChangeSignInMethod} className={"text-xs"}>Использовать номер телефона</button>
                    : <button onClick={handleChangeSignInMethod} className={"text-xs"}>Использовать почту</button>
                }
            </div>
        </div>
    )
}