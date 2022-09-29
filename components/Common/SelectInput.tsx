type Props = {
    values: {
        key: string;
        val: string;
    }[];
    defaultValue?: {
        key: string;
        val: string;
    };
    onChange: (s: string) => void;
    full?: true;
};

const SelectInput = (props: Props) => {
    return (
        <select
            className={
                "w rounded-full px-8 appearance-none bg-footer " +
                (props.full && "w-full")
            }
            onChange={(e) => props.onChange(e.currentTarget.value)}
        >
            {props.defaultValue && (
                <option value={props.defaultValue.val}>
                    {props.defaultValue.key}
                </option>
            )}

            {props.values.map((value, i) => (
                <option value={value.val} key={i}>
                    {value.key}
                </option>
            ))}
        </select>
    );
};

export default SelectInput;
