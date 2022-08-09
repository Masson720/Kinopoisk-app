
export interface IFilmData {
    name: string
    slogan: string | null
    year: number
    ageRating: number
    alternativeName: string
    id: number
    type: "movie"
    backdrop: BackdropType
    rating: IRating
    votes: IVotes
    videos: IVideos
}

interface BackdropType {
    _id: string
    url: string | null
}

interface IRating {
    kp: number
    tmdb?: number
    imdb?: number
}

interface IVotes {
    tmdb?: number
    kp: number
    imdb?: number
}

interface IVideos {
    trailers: {
        _id: string
        url: string
        name: string
        site: string
        size: number
        type: "TRAILER"
    }
}