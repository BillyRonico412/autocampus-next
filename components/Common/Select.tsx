import SelectInput from "./SelectInput";

export type SelectProps = {
    text: string;
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

type Props = SelectProps;

const Select = (props: Props) => {
    return (
        <div className="flex gap-x-4 items-center">
            <span className="text-lg font-semibold">{props.text}:</span>
            <SelectInput
                onChange={props.onChange}
                values={props.values}
                defaultValue={props.defaultValue}
                full={props.full}
            />
        </div>
    );
};

export default Select;
