import { FaEnvelope } from "react-icons/fa";
import Layout2 from "../components/Common/Layout2";
import SelectInput from "../components/Common/SelectInput";
import TextAreaInput from "../components/Common/TextAreaInput";
import TextInput from "../components/Common/TextInput";
import { FilArianeInterface } from "../utils/interface";

const contact = () => {
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Contactez-nous",
            link: "/contact",
        },
    ];
    return (
        <>
            <Layout2
                filArianes={filArianes}
                icons={<FaEnvelope className="text-6xl" />}
                title="Contactez-nous"
            >
                <div className="flex flex-col gap-y-8">
                    <div className="flex flex-col md:flex-row gap-y-8 gap-x-8">
                        <div className="flex-grow">
                            <TextInput
                                title="Votre structure*"
                                placeholder="La mairie de Toulouse"
                            />
                        </div>
                        <div className="flex-grow">
                            <p className="font-semibold px-4">
                                Plateforme destinataire*
                            </p>
                            <SelectInput
                                onChange={() => {}}
                                values={[]}
                                defaultValue={{
                                    key: "Plateforme destinataire",
                                    val: "0",
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-8 gap-x-8">
                        <div className="flex-grow">
                            <TextInput title="Nom*" placeholder="BILLY" />
                        </div>
                        <div className="flex-grow">
                            <TextInput title="Prenom*" placeholder="Ronico" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-8 gap-x-8">
                        <div className="flex-grow">
                            <TextInput
                                title="Numéro de téléphone*"
                                placeholder="0675770755"
                            />
                        </div>
                        <div className="flex-grow">
                            <TextInput
                                title="Adresse e-mail*"
                                placeholder="billyronico412@gmail.com"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-8 gap-x-8">
                        <div className="flex-grow">
                            <TextInput
                                title="Objet"
                                placeholder="Demande d'adhésion à Autocampus"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold px-4">
                            Votre message*
                        </p>
                        <TextAreaInput placeholder="Ceci est un message adressé à Autocampus" />
                    </div>
                    <div className="flex justify-center">
                        <button className="w-24 rounded-lg border-primary-old border-2 text-primary-old font-bold text-lg">
                            Envoyer
                        </button>
                    </div>
                </div>
            </Layout2>
        </>
    );
};

export default contact;
