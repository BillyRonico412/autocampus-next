import { InferGetServerSidePropsType } from "next";
import { IoMdBusiness } from "react-icons/io";
import Layout2 from "../../components/Common/Layout2";
import PartenaireItems from "../../components/Partenaire/PartenaireItems";
import {
    PartenaireProps,
    PartenaireTypeEnum,
    urlByPartenaireType
} from "../../components/Partenaire/variable";
import { FilArianeInterface } from "../../utils/interface";
import { getServerSidePropsApi } from "../../utils/variables";

export const getServerSideProps = getServerSidePropsApi<PartenaireProps>(
    urlByPartenaireType(PartenaireTypeEnum.Institutions)
);

const institutions = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
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
