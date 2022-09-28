import { FaSearch } from "react-icons/fa";
type Props = {
    placeholder: string;
};

const Search = (props: Props) => {
    return (
        <div className="flex rounded-full border-2">
            <input
                type="text"
                className="py-0.5 px-4 w-full"
                placeholder={props.placeholder}
            />
            <button className="ml-auto px-4">
                <FaSearch />
            </button>
        </div>
    );
};

export default Search;
