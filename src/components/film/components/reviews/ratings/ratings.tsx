import s from './style.module.scss';

export const Rating = () => {
    return <>
        <div className={s.body}>
            <div className={s.item}>
                <div className={s.amount}>
                    <h1>132</h1>
                </div>
                <span>All</span>
            </div>
            <div className={s.item}>
                <div className={s.amount}>
                    <h1 className={s.positive}>132</h1>
                    <span>100.0%</span>
                </div>
                <span>Positive</span>
            </div>
            <div className={s.item}>
                <div className={s.amount}>
                    <h1 className={s.negative}>0</h1>
                    <span>0.00%</span>
                </div>
                <span>Negative</span>
            </div>
            <div className={s.item}>
                <div className={s.amount}>
                    <h1>0</h1>
                    <span>0.00%</span>
                </div>
                <span>Neutral</span>
            </div>
        </div>
    </>
}