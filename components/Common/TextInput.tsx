type Props = {
    title: string;
    placeholder: string;
};

const TextInput = (props: Props) => {
    return (
        <div className="">
            <p className="font-semibold px-4">{props.title}</p>
            <input
                type="text"
                className="w-full rounded-lg py-2 px-4 bg-primary-20 placeholder:text-dark-font placeholder:text-opacity-50 font-semibold"
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default TextInput;
