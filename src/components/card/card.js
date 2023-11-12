
export default function Card(props) {
    return (
        <a class="no-decoration" href={"/" + props.id}>
            <div class="card text-start h-100">
                <img class="card-img-top" src={props.image} alt={props.title}/>
                <div class="card-body">
                    <h4 class="card-title">{props.title}</h4>
                    <p class="card-text">{props.description}</p>
                </div>
            </div>
        </a>
    )
}