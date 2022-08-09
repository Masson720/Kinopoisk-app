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