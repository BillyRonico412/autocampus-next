import { InferGetStaticPropsType } from "next";
import { IoMdBusiness } from "react-icons/io";
import Layout2 from "../../components/Common/Layout2";
import PartenaireItems from "../../components/Partenaire/PartenaireItems";
import { FilArianeInterface } from "../../utils/interface";
import { getStaticPropsApi } from "../../utils/variables";
import {
    PartenaireProps,
    PartenaireTypeEnum,
    urlByPartenaireType,
} from "./variable";

export const getStaticProps = getStaticPropsApi<PartenaireProps>(
    urlByPartenaireType(PartenaireTypeEnum.Institutions)
);

const institutions = (
    props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Institutions",
            link: "/partenaires/institutions",
        },
    ];
    return (
        <>
            <Layout2
                title="Institutions"
                filArianes={filArianes}
                icons={<IoMdBusiness className="text-6xl" />}
            >
                <PartenaireItems partenaireItems={props.items} />
            </Layout2>
        </>
    );
};

export default institutions;
