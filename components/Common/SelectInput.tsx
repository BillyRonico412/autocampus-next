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
                "w-full rounded-lg px-8 py-2 appearance-none bg-primary-20 font-semibold text-opacity-75" +
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
