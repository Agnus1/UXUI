
export default function Pagination(props) {
    let pages = [];
    const currentPage = props.currentPage;
    const maxPages = props.maxPages;
    const setPage = props.setPage;

    if (currentPage <= 3) {
        pages = [...(Array(Math.min(maxPages, 5)).keys())].map((i) => i+1);
    } else {
        let i = currentPage - 2;

        while (i <=  (currentPage + 2) && i <= maxPages) {
            pages.push(i);
            i++;
        }
    }

    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
            <li class="page-item"><a class={"no-decoration page-link" + (currentPage != 1 ? "" : " disabled")} onClick={() => setPage(currentPage-1)}>Previous</a></li>
                {
                    pages.map(
                        (page) => (
                            <li class="page-item"><a class={"no-decoration page-link" + (currentPage != page ? "" : " active")} onClick={() => setPage(page)}>{page}</a></li>
                        )
                    )
                }
            <li class="page-item"><a class={"no-decoration page-link" + (currentPage != maxPages ? "" : " disabled")} onClick={() => setPage(currentPage+1)}>Next</a></li>
            </ul>
        </nav>
    )
}