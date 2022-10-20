import { InferGetServerSidePropsType } from "next";
import { Notyf } from "notyf";
import { useEffect } from "react";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import Layout2 from "../components/Common/Layout2";
import SelectInput from "../components/Common/SelectInput";
import TextAreaInput from "../components/Common/TextAreaInput";
import TextInput from "../components/Common/TextInput";
import { FilArianeInterface } from "../utils/interface";
import { getServerSidePropsApi } from "../utils/variables";
import "notyf/notyf.min.css";

export const getServerSideProps = getServerSidePropsApi<{ nom: string }>(
    "/items/plateforme?fields=nom"
);

const contact = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const [structure, setStructure] = useState("");
    const [plateforme, setPlateforme] = useState("0");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [numero, setNumero] = useState("");
    const [mail, setMail] = useState("");
    const [objet, setObjet] = useState("");
    const [message, setMessage] = useState("");
    const [notyf, setNotyf] = useState<Notyf | null>(null);
    useEffect(() => {
        setNotyf(
            new Notyf({
                position: { x: "center", y: "bottom" },
                types: [
                    {
                        type: "success",
                        className: "font-bold",
                    },
                    {
                        type: "error",
                        className: "font-bold",
                    },
                ],
            })
        );
    }, []);
    const onClickEnvoyer = async () => {
        if (notyf) {
            if (structure.length === 0) {
                notyf.error("Veuillez renseigner votre structure");
                return;
            }
            if (plateforme === "0") {
                notyf.error("Veuillez renseigner la plateforme");
                return;
            }
            if (nom.length === 0) {
                notyf.error("Veuillez renseigner votre nom");
                return;
            }
            if (prenom.length === 0) {
                notyf.error("Veuillez renseigner votre prénom");
                return;
            }
            if (numero.length === 0) {
                notyf.error("Veuillez renseigner votre numero de téléphone");
                return;
            }
            if (!/^\+?[0-9]{10,15}$/.test(numero)) {
                notyf.error("Numéro de téléphone incorect");
                return;
            }
            if (mail.length === 0) {
                notyf.error("Veuillez renseigner votre email");
                return;
            }
            if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail)) {
                notyf.error("Email incorect");
                return;
            }
            if (objet.length === 0) {
                notyf.error("Veuillez renseigner l'objet");
                return;
            }
            if (message.length === 0) {
                notyf.error("Veuillez renseigner le message");
                return;
            }

            const messageSend = `
======================================
EMETEUR:
MAIL: ${mail}
NOM: ${nom}
PRENOM: ${prenom}
NUMERO DE TELEPHONE: ${numero}
======================================
MESSAGE:
${message}
            `;

            try {
                await fetch(
                    process.env.NEXT_PUBLIC_URL_FRONT + "/api/send-mail",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            message: messageSend,
                            objet,
                            mail,
                        }),
                    }
                );
                notyf.success("Mail envoyé avec succès!");
            } catch (e) {
                console.log(e);
                notyf.error("ERROR !!! Mail non envoyé");
                return;
            }
        }
    };
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
                                onInput={(s) => setStructure(s)}
                                title="Votre structure*"
                                placeholder="La mairie de Toulouse"
                            />
                        </div>
                        <div className="flex-grow">
                            <p className="font-semibold px-4">
                                Plateforme destinataire*
                            </p>
                            <SelectInput
                                onChange={(s) => setPlateforme(s)}
                                values={props.items.map((item) => ({
                                    key: item.nom,
                                    val: item.nom,
                                }))}
                                defaultValue={{
                                    key: "Plateforme destinataire",
                                    val: "0",
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-8 gap-x-8">
                        <div className="flex-grow">
                            <TextInput
                                title="Nom*"
                                placeholder="BILLY"
                                onInput={(s) => setNom(s)}
                            />
                        </div>
                        <div className="flex-grow">
                            <TextInput
                                title="Prénom*"
                                placeholder="Ronico"
                                onInput={(s) => setPrenom(s)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-8 gap-x-8">
                        <div className="flex-grow">
                            <TextInput
                                title="Numéro de téléphone*"
                                placeholder="0675770755"
                                onInput={(s) => setNumero(s)}
                            />
                        </div>
                        <div className="flex-grow">
                            <TextInput
                                title="Adresse e-mail*"
                                placeholder="billyronico412@gmail.com"
                                onInput={(s) => setMail(s)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-8 gap-x-8">
                        <div className="flex-grow">
                            <TextInput
                                title="Objet"
                                placeholder="Demande d'adhésion à Autocampus"
                                onInput={(s) => setObjet(s)}
                            />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold px-4">Votre message*</p>
                        <TextAreaInput
                            placeholder="Ceci est un message adressé à Autocampus"
                            onInput={(s) => setMessage(s)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="w-24 rounded-lg border-primary-old border-2 text-primary-old font-bold text-lg"
                            onClick={onClickEnvoyer}
                        >
                            Envoyer
                        </button>
                    </div>
                </div>
            </Layout2>
        </>
    );
};

export default contact;
