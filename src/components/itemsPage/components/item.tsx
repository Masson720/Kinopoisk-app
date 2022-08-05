import s from './style.module.scss';

export const Item = () => {
    return <>
        <div className={s.body}>
            <img className={s.poster} src="https://www.film.ru/sites/default/files/images/mz5mDOx3LU4.jpg" alt=""/>
            <div className={s.info}>
                <h1 className={s.title}>Doctor Strange</h1>
                <span>2018, </span><span>102min</span>
                <div className={s.description}>
                    Страшная автокатастрофа поставила крест на карьере успешного нейрохирурга Доктора Стрэнджа.
                    Отчаявшись, он отправляется в путешествие в поисках исцеления и открывает в себе невероятные
                    способности к трансформации пространства и времени.
                </div>
            </div>
            <span className={s.rating}>
                7.5
            </span>
        </div>
    </>
}