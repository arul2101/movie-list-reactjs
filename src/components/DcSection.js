import data from "../dataDc"

export default function MarvelSection() {
    const element = data.map((item) => {
        return (
            <div className="card">
                <img src={item.img} className="poster" />
                <h3>{item.name}</h3>
                <p>{item.year}</p>
            </div>
        );
    })
    return (
        <div className="dc-movies" id="dc">
            <div className="wrap-movies">
                {element}
            </div>
        </div>
    )
}