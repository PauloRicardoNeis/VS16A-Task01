type TitleProps = {
    text: string;
};

export default function Title({ text }: TitleProps) {
    return <h1 className="title-global">{text}</h1>;
}