export default function Input(props: {
    type: string,
    placeholder: string,
    name: string, 
    onChange: (e: any) => void,
    labelText: string
    minLength?: number
}) {
    return (
        <div>
            <label htmlFor={props.name}>{props.labelText}</label>
            <input
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                onChange={props.onChange}
                minLength={props.minLength}
            />
        </div>
    )
}