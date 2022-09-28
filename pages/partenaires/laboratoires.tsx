import { InferGetStaticPropsType } from "next";
import { IoMdBusiness } from "react-icons/io";
import Layout2 from "../../components/Common/Layout2";
import PartenaireItems from "../../components/Partenaire/PartenaireItems";
import { FilArianeInterface } from "../../utils/interface";
import { getStaticPropsApi } from "../../utils/variables";
import {
    PartenaireProps, PartenaireTypeEnum, urlByPartenaireType
} from "./variable";

export const getStaticProps = getStaticPropsApi<PartenaireProps>(
    urlByPartenaireType(PartenaireTypeEnum.Laboratoires)
);

const laboratoires = (
    props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Laboratoires",
            link: "/partenaires/laboratoires",
        },
    ];
    return (
        <>
            <Layout2
                title="Laboratoires"
                filArianes={filArianes}
                icons={<IoMdBusiness className="text-6xl" />}
            >
                <PartenaireItems partenaireItems={props.items} />
            </Layout2>
        </>
    );
};

export default laboratoires;
