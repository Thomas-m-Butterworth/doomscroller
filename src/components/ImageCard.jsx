import mainImage from "../images/main-image.jpeg"

export default function ImageCard() {
    return (
        <section className="image-card">
            <img src={mainImage} alt="A man reading a newspaper"/>
        </section>
    )
}