import './index.scss';

function Work(props) {
    const { work } = props;

    return (
        <div>
            <h1 className='title'>{work.title}</h1>
        </div>
    );
};

export default Work;