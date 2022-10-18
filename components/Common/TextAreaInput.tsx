type Props = {
    placeholder: string;
};

const TextAreaInput = (props: Props) => {
    return (
        <div>
            <textarea
                className="w-full rounded-lg py-2 px-4 bg-primary-20 placeholder:text-dark-font placeholder:text-opacity-50 font-semibold"
                rows={10}
                placeholder={props.placeholder}
            ></textarea>
        </div>
    );
};

export default TextAreaInput;
