export interface IBaseQuery {
    type?: string;
    query?: string;
    limit?: number | undefined;
    page?: number;
    id?: string | string[] | undefined;
}

