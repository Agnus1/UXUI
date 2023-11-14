import {useQuery} from "react-query";
import axios from "axios";
import CommentSection from "@/components/commentSection/commentSection";
import {useRouter } from "next/navigation";

async function fetchFilm(id = 1) {
    const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true`);
    return response.data.data;
}

export default function DetailCard(props) { 
    const router = useRouter();
    const id = props.id;
    const { data, isLoading, isError } = useQuery(
        [id, 'film'], 
        () =>  fetchFilm(id)
    );

    if (isError) {
        return <h1>Error</h1>
    }

    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (!data) {
        return <h1>No data</h1>
    }

    const movie = data.movie;

    return (
        <div class="container-detail">
        <button onClick={() => router.back()} type="button" style={
            {"margin-top": '10px'}
        } class="btn btn-dark">Назад</button>
        <div class="card-detail">
            <div class="card-body-detail">
                <h3 class="card-title">{movie.title}</h3>
                <h6 class="card-subtitle">{movie.title_long}</h6>
                <div class="row-detail">
                    <div class="col-lg-6 col-md-5 col-sm-6">
                        <img src={movie.large_cover_image} class="img-responsive"/>
                    </div>
                    <div class="col-lg-6 col-md-7 col-sm-6">
                    {
                        movie.description_full && 
                        <p>{movie.description_full}</p>
                    }
                    {/* <ul class="list-unstyled">
                        <li><i class="fa fa-check text-success"></i>Sturdy structure</li>
                        <li><i class="fa fa-check text-success"></i>Designed to foster easy portability</li>
                        <li><i class="fa fa-check text-success"></i>Perfect furniture to flaunt your wonderful collectibles</li>
                    </ul> */}
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <h3 class="box-title mt-5">Общая информация</h3>
                        <div class="table-responsive">
                            <table class="table table-product">
                                <tbody>
                                    <tr>
                                        <td width="390">Год выпуска</td>
                                        <td>{movie.year}</td>
                                    </tr>
                                    <tr>
                                        <td>Рейтинг</td>
                                        <td>{movie.rating}</td>
                                    </tr>
                                    <tr>
                                        <td>Ссылка imdb</td>
                                        <td><a target="blank" href={"https://www.imdb.com/title/" + movie.imdb_code}>{movie.title}</a></td>
                                    </tr>
                                    <tr>
                                        <td>Загружено</td>
                                        <td>{movie.date_uploaded}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <CommentSection movieId={movie.id}></CommentSection>
                    </div>
                </div>
            </div>
        </div>

    </div>
            
    )
}