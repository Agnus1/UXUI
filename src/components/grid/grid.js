'use client';

import Card from "../card/card";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Pagination from "../pagination/pagination";

async function fetchFilms(pagen = 1) {
    const response = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${pagen}`);

    return response.data.data;
}

export default function Grid(props) {
    const [page, setPage] = useState(1);
    const { data, isLoading, isError } = useQuery(
        [page, 'films'], 
        () =>  fetchFilms(page),
        {
            keepPreviousData: true
        }
    );

    if (isError) {
        return <h1>ОШИБКА</h1>
    }

    if (isLoading) {
        return <h1>ЛОАДИНГ</h1>
    }

    if (!data) {
        return <h1>НЕТ ДАННЫХ</h1>
    }


    const movies = data.movies;
    const maxPages = Math.ceil(data.movie_count / data.limit);

    return (
        <div class="container main pb-5 pt-5">
            <div class="container overflow-hidden w-md-50">
                <div class="row row-cols-2 row-cols-md-4 g-4 gy-5">
                    {
                        movies.map(
                            (card) => (
                            <div class="col">
                                <Card
                                id={card.slug}
                                title={card.title}
                                description={card.summary}
                                image={card.medium_cover_image}
                                ></Card>
                            </div>
                            )
                        )
                    }
                </div>
                <Pagination currentPage={page} maxPages={maxPages} setPage={setPage}></Pagination>
            </div>
        </div>
    )
}