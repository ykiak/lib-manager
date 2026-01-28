export default function Button(props: {
    text: string
    type: "submit" | "reset" | "button" | undefined,
    onClick?: () => void
}) {
    return (
        <div>
            <button type={props.type} onClick={props.onClick}>{props.text}</button>
        </div>
    )
}