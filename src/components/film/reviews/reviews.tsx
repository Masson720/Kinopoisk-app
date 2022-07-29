import s from './style.module.scss';

export const Reviews = () => {
    return <>
        <div className={s.body}>
            <h1>Reviews</h1>
            <div className={s.rewiewBlock}>
                <div className={s.reviews}>

                </div>
                <div className={s.ratingsBlock}>
                    <div>
                        <h1>132</h1>
                        <span>All</span>
                    </div>
                    <div>
                        <div>
                            <h1>132</h1>
                            <span>100.0%</span>
                        </div>
                        <span>Positive</span>
                    </div>
                    <div>
                        <h1>0</h1>
                        <span>Negative</span>
                    </div>
                    <div>
                        <h1>0</h1>
                        <span>Neutral</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}