import Link from "next/link";

const EnSavoirPlus = () => {
    return (
        <div className="flex flex-col items-center">
            <p className="text-xl font-semibold">En Savoir Plus</p>
            <div className="flex gap-x-4 mt-2">
                <button className="rounded-lg border-2 border-primary-old text-primary-old font-bold px-4 text-md py-1 hover:bg-primary-old hover:text-white transition-colors">
                    <Link href={"/"}>Consulter le site</Link>
                </button>
                <button className="rounded-lg border-2 border-primary-old text-primary-old font-bold px-4 text-md py-1 hover:bg-primary-old hover:text-white transition-colors">
                    <Link href={"/contact"}>Contactez nous</Link>
                </button>
            </div>
        </div>
    );
};

export default EnSavoirPlus;
