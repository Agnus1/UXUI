'use client';

import {useState, useEffect} from "react";
import {useQuery} from "react-query";

import Pagination from "@/components/pagination/pagination";
import Card from "@/components/card/card";
import axios from "axios";

async function fetchFilms(pagen = 1) {
    const response = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${pagen}`);

    return response.data.data;
}

function getLastSessionPage() {
    const page = localStorage.getItem('page');
    return page ?? 1;
}

export default function Grid(props) {
    const [page, setPage] = useState(getLastSessionPage());
    const { data, isLoading, isError } = useQuery(
        [page, 'films'], 
        () =>  fetchFilms(page),
        {
            keepPreviousData: true
        }
    );

    useEffect(() => {
        localStorage.setItem('page', page);
    });

    if (isError) {
        return <h1>Error</h1>
    }

    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (!data) {
        return <h1>No data</h1>
    }

    const movies = data.movies;
    const maxPages = Math.ceil(data.movie_count / data.limit);
    console.log(page, maxPages);
    return (
        <div className="container main pb-5 pt-5">
            <div className="container overflow-hidden w-md-50">
                <div className="row row-cols-2 row-cols-md-4 g-4 gy-5">
                    {
                        movies.map(
                            (card) => (
                            <div className="col">
                                <Card
                                id={card.id}
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