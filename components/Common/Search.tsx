import { FaSearch } from "react-icons/fa";
type Props = {
    placeholder: string;
    onSearch?: (s: string) => void;
};

const Search = (props: Props) => {
    return (
        <div className="flex rounded-full border-2">
            <input
                type="text"
                className="py-0.5 px-4 w-full"
                placeholder={props.placeholder}
                onKeyUp={(e) => {
                    if (props.onSearch && e.key === "Enter") {
                        props.onSearch(e.currentTarget.value);
                    }
                }}
            />
            <button
                className="ml-auto px-4"
                onClick={(e) => {
                    if (props.onSearch) {
                        props.onSearch(e.currentTarget.value);
                    }
                }}
            >
                <FaSearch />
            </button>
        </div>
    );
};

export default Search;
