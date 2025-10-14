interface TitlePageProps {
    text: string;
}

export function TitlePage ({ text }: TitlePageProps) {
    return <h1>{text}</h1>
}
