type Props = {
    content: string;
};

const Content = (props: Props) => {
    return (
        <div
            className="content"
            dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
    );
};

export default Content;
