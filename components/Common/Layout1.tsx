import Head from "next/head";
import { ReactNode } from "react";
import { FilArianeInterface } from "../../utils/interface";
import FilAriane from "./FilAriane";
import Header1 from "./Header1";

type Props = {
    title: string;
    text1: string;
    text2: string;
    icons: ReactNode;
    filArianes: FilArianeInterface[];
    children: ReactNode;
};

const Layout1 = (props: Props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className="container mx-auto px-4 my-8">
                <Header1
                    text1={props.text1}
                    text2={props.text2}
                    icons={props.icons}
                />
                <FilAriane filArianes={props.filArianes} />
                <div className="my-8">{props.children}</div>
            </div>
        </>
    );
};

export default Layout1;
