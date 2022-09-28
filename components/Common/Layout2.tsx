import Head from "next/head";
import { ReactNode } from "react";
import { FilArianeInterface } from "../../utils/interface";
import Header2 from "./Header2";

type Props = {
    title: string;
    filArianes: FilArianeInterface[];
    icons: ReactNode;
    motcles?: string[];
    children: ReactNode;
};

const Layout2 = (props: Props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Header2
                title={props.title}
                filArianes={props.filArianes}
                motcles={props.motcles}
            >
                {props.icons}
            </Header2>
            <div className="container mx-auto px-4 my-8">
                <div className="my-8">{props.children}</div>
            </div>
        </>
    );
};

export default Layout2;
