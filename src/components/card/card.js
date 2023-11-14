import Link from 'next/link'

export default function Card(props) {
    return (
        <Link className="no-decoration" href={"/movie/" + props.id}>
            <div className="card-item text-start h-100">
                <img className="card-item-img-top" src={props.image} alt={props.title}/>
                <div className="card-item-body">
                    <h4 className="card-item-title">{props.title}</h4>
                    <p className="card-item-text">{props.description}</p>
                </div>
            </div>
        </Link>
    )
}