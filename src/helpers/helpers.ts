export const getYear = () => {
    return new Date().getFullYear();
}

export const getColor = (r: number) => {
    if(r > 7.5){
        return '#008900'
    }else if(r > 6.5){
        return '#b3cd1e'
    }else if(r > 5.5){
        return "#eaa905"
    }else{
        return "#e73602"
    }
}

export const getReviewColor = (a: string) => {
    switch (a){
        case 'Позитивный':
            return '#cafcda'
        case 'Негативный':
            return '#ffbaae'
        case 'Нейтральный':
            return '#e8e8e8'
        default:
            return '#cafcda'
    }
}

export const getPath = (p: string) => {
    switch (p){
        case 'movie':
            return 'film';
        case 'tv-series':
            return 'series';
        default:
            return 'film';
    }
}