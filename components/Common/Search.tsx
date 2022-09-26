import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <div className="flex shadow rounded-full border-2">
            <input type="text" className="py-0.5 px-4" placeholder="Rechercher sur le site ..." />
            <button className="px-4">
                <FaSearch />
            </button>
        </div>
    );
};

export default Search;
