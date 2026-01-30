export default function Message(props: {
    text: string
}) {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    )
}