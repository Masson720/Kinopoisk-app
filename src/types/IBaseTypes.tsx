export interface IFilters{
    year: string
    rating: string
    sortByRelease: string
    genre: string
}

export interface IBaseQuery {
    type?: string;
    query?: string;
    limit?: number | undefined;
    page?: number;
    id?: string | string[] | undefined;
}

export interface IQuery extends IBaseQuery{
    filters: IFilters
}

