export function LoadingPage() {
    return (
        <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 w-full bg-white">
            <div className="text-center">
                <div className="inline-flex rounded-full p-4">
                    <div>
                        <div className="p-4 animate-[bounce_10s_infinite]">
                        </div>
                    </div>
                </div>
                <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">Загрузка...</h1>
                <div className="flex flex-col">
                    <p className="text-slate-600 mt-5 lg:text-lg">
                        Мы готовим для вас множество интересных и полезных возможностей. Но для того, чтобы все работало
                        как надо, нам нужно немного времени.
                    </p>
                </div>
            </div>
        </div>
    )
}