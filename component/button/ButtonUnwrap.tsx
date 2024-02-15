import {IconUnwrap} from "@/component/icon/IconUnwrap";

type ButtonUnwrapProps = {
    onClick?: () => void
}

export function ButtonUnwrap(props: ButtonUnwrapProps) {

    return (
        <div className="rounded-lg border w-fit h-fit p-1 cursor-pointer
        hover:bg-gray-200
        active:bg-gray-300"
             onClick={props.onClick}>
            <IconUnwrap/>
        </div>
    )
}