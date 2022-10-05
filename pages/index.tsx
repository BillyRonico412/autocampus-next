import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Content from "../components/Common/Content";
import HomepageCarousel from "../components/Homepage/HomepageCarousel";
import HomepagePartenaires from "../components/Homepage/HomepagePartenaires";
import { getElementInApi, getElementsInApi } from "../utils/variables";

type HomePageProps = {
    contenu: string;
    description: string;
    images: {
        directus_files_id: string;
    }[];
};

export type PartenaireProps = {
    logo: string;
    category: string;
};

export const getServerSideProps: GetServerSideProps<{
    homepage: HomePageProps;
    partenaires: PartenaireProps[];
}> = async () => {
    const homepageApi = await getElementInApi<HomePageProps>(
        "/items/homepage?fields=*,images.directus_files_id"
    );
    const partenairesApi = await getElementsInApi<PartenaireProps>(
        "/items/partenaire?fields=logo,category"
    );

    if (homepageApi.data === null) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            homepage: homepageApi.data,
            partenaires: partenairesApi.data,
        },
    };
};

const Home = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    return (
        <div className="px-4 container mx-auto py-8">
            <HomepageCarousel
                images={props.homepage.images.map(
                    (image) => image.directus_files_id
                )}
            />
            <p className="text-2xl font-bold mt-4">
                <span className="">Description d&apos;</span>
                <span className="text-primary-old">Autocampus</span>
            </p>
            <Content content={props.homepage.contenu} />
            <p className="text-2xl font-bold mt-4">
                <span className="">Nos </span>
                <span className="text-primary-old">Partenaires</span>
            </p>
            <HomepagePartenaires partenaires={props.partenaires} />
        </div>
    );
};

export default Home;
