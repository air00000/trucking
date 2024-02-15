import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import {IconQuestion} from "@/component/icon/IconQuestion";

export function ButtonQuestion(props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {

    return (
        <div className="rounded-full w-8 h-8 self-center flex cursor-help" {...props}>
            <IconQuestion/>
        </div>
    )
}