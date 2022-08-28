import LoaderBulks from 'public/Loader.gif';

export const Loader = ({className}) => {
    return <>
        <img className={className} src={LoaderBulks.src} alt="Loading..."/>
    </>
}