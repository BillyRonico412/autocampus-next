import {
    GetServerSideProps, InferGetServerSidePropsType
} from "next";
import Content from "../components/Common/Content";
import HomepageCarousel from "../components/Homepage/HomepageCarousel";
import { getElementInApi } from "../utils/variables";

type HomePageProps = {
    contenu: string;
    description: string;
    images: {
        directus_files_id: string;
    }[];
};

export const getServerSideProps: GetServerSideProps<{
    homepage: HomePageProps;
}> = async () => {
    const res = await getElementInApi<HomePageProps>(
        "/items/homepage?fields=*,images.directus_files_id"
    );
    if (res.data === null) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            homepage: res.data,
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
        </div>
    );
};

export default Home;
