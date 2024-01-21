
import { useRouter } from 'next/navigation';

export default function Pagination(props) {
    let pages = [];
    const currentPage = props.currentPage;
    const maxPages = props.maxPages;
    const setPage = props.setPage;
    const router = useRouter()

    function setPagen(pageN) {
        router.push('?page=' + pageN, undefined, { shallow: true })
        setPage(pageN)
    }

    if (currentPage <= 3) {
        pages = [...(Array(Math.min(maxPages, 5)).keys())].map((i) => i+1);
    } else {
        let i = currentPage - 2;

        while (i <= (parseInt(currentPage) + 2) && i <= maxPages) {
            pages.push(i);
            i++;
        }
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
            <li className="page-item"><a className={"no-decoration page-link" + (currentPage != 1 ? "" : " disabled")} onClick={() => setPagen(currentPage-1)}>Пред</a></li>
                {
                    pages.map(
                        (page) => (
                            <li className="page-item"><a className={"no-decoration page-link" + (currentPage != page ? "" : " active")} onClick={() => setPagen(page)}>{page}</a></li>
                        )
                    )
                }
            <li className="page-item"><a className={"no-decoration page-link" + (currentPage != maxPages ? "" : " disabled")} onClick={() => setPagen(currentPage+1)}>След</a></li>
            </ul>
        </nav>
    )
}