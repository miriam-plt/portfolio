import './index.scss';

function Work(props) {
    const { work } = props;

    return (
        <div>
            <h1>{work.title}</h1>
            <p>{work.year}</p>
            <p>{work.category}</p>
        </div>
    );
};

export default Work;