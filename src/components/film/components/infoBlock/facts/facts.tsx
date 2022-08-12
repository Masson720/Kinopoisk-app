import s from './style.module.scss';

export const Facts = ({facts}) => {
    console.log(facts)

    return <>
        <div className={s.body}>
            <h1>Do you know that...</h1>
            {facts.map(e => <span className={s.factItem} dangerouslySetInnerHTML={{__html: e.value}}></span>)}
        </div>
    </>
}