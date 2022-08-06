import s from './style.module.scss';

export const Item = () => {
    return <>
        <div className={s.body}>
            <div className={s.review}>
                <h1>Мое увожение</h1>
                <p>Все понравилось</p>
                <button>Show full review</button>
            </div>
            <div className={s.other}>
                <span>01 marth 2022</span>
                <div className={s.buttons}>
                    <button>Useful</button>
                    <button>No</button>
                </div>
            </div>
        </div>
    </>
}