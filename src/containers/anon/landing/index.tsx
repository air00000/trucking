import IconTruck from "../../../components/icon/IconTruck";
import IconLogistics from "../../../components/icon/IconLogistics";
import IconBusiness from "../../../components/icon/IconBusiness";
import IconEconomy from "../../../components/icon/IconEconomy";
import IconAutomatization from "../../../components/icon/IconAutomatization";

export default function Page() {
    return (
        <div className={"flex flex-col p-12 text-white"}>
            <div className={"flex flex-col"}>
                <div className={"flex flex-row gap-4"}>
                    <div>
                        Я - Грузовладелец
                    </div>
                    <div>
                        Я - Перевозчик
                    </div>
                </div>
                <div className={"flex flex-col text-2xl pt-8"}>
                    Нужно найти загрузку под вашу машину быстро и выгодно?
                    <span className={"font-extrabold "}>Здесь подходящий груз для вас</span>
                </div>
                <div className={"flex pt-8"}>
                    Сократите простои и найдите заказчиков. Удобный поиск и автоматический подбор транспорта и грузов.
                </div>
                <div className={"flex pt-16"}>
                    Попробовать
                </div>
            </div>
            <div className={"flex flex-col mt-20"}>
                <span className={"font-extrabold text-xl"}>
                    Эффективная организация перевозок. Рулите по-новому с Trucking
                </span>
                <div className={"grid grid-cols-2 grid-rows-2 mt-8 gap-6 items-stretch"}>
                    <div className={"flex flex-col p-8 gap-4 rounded-2xl bg-dark-gray shadow-card shadow-gray-lagoon"}>
                        <IconTruck/>
                        <span className={"font-extrabold text-xl"}>Ищете груз или транспорт? Создайте предложение</span>
                        <span>
                            Удобно разместите ваше предложение по грузу или транспорту на публичной
                            бирже или отправьте его своим партнерам приватно. Детальное предложение –
                            залог успешного поиска и организации перевозки без сорванных загрузок и недопонимания.
                        </span>
                    </div>
                    <div className={"flex flex-col p-8 gap-4 rounded-2xl bg-dark-gray shadow-card shadow-gray-lagoon"}>
                        <IconLogistics/>
                        <span className={"font-extrabold text-xl"}>Автоподбор подходящего транспорта и груза</span>
                        <span>
                            Сразу после публикации предложения вашего груза или транспорта,
                            агрегатор Trucking автоматически подберет для вас встречные предложения,
                            подходящие по маршруту, типу кузова и особенностям перевозки.
                        </span>
                    </div>
                    <div className={"flex flex-col p-8 gap-4 rounded-2xl bg-dark-gray shadow-card shadow-gray-lagoon"}>
                        <IconBusiness/>
                        <span className={"font-extrabold text-xl"}>Профиль вашего бизнеса в логистике</span>
                        <span>
                            Создайте профиль вашей компании, где будет отображаться ваша
                            деятельность в логистике и все ваши публичные предложения груза и
                            транспорта. Получайте новых заказчиков и партнеров через профиль в Trucking.
                        </span>
                    </div>
                    <div className={"flex flex-col p-8 gap-4 rounded-2xl bg-dark-gray shadow-card shadow-gray-lagoon"}>
                        <IconEconomy/>
                        <span className={"font-extrabold text-xl"}>
                            В разы экономьте время на работу с постоянными заказчиками и перевозчиками
                        </span>
                        <span>
                            Хотите экономить ваше время и эффективнее работать с доверенными
                            грузовладельцами, экспедиторами и перевозчиками? Пригласите их в партнеры
                            на вашей приватной бирже в Trucking.
                        </span>
                    </div>
                </div>
                <div className={"flex flex-col mt-6 p-8 gap-4 rounded-2xl bg-dark-gray shadow-card shadow-gray-lagoon"}>
                    <IconAutomatization></IconAutomatization>
                    <span className={"font-extrabold text-xl"}>Интегрируйтесь для автоматизации</span>
                    <span>
                        Автоматическая публикация грузов и свободного транспорта на бирже.
                        Интеграция Trucking с вашими TMS и CRM поможет вашим сотрудникам тратить
                        еще меньше времени на рутину и позволит работать эффективнее, фокусируясь
                        на том, что приносит прибыль.
                    </span>
                </div>
            </div>
        </div>
    )
}