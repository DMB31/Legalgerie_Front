import { ReactNode } from "react";

type Props = {
    colors: {
        bgColor: string;
        textColor: string;
    }
    text: {
        subtext: string;
        mainText: ReactNode;
    };
}

const TimeSelectCards = ({colors, text} : Props) => {
    return (
        <div className={`w-full ${colors.bgColor}`} >
            <p className="flex flex-col items-center p-2"><span className={`text-xl ${colors.textColor}`}>{text.mainText}</span><span className="text-sm">{text.subtext}</span></p>
        </div>
    )
}

export default TimeSelectCards