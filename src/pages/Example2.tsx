import Card from "../components/Card"
import { CardProps, menu } from "../util/menu"
const Example2 = () => {
    return (
        <div className="flex flex-wrap gap-8 justify-center">
            {menu.map((item: CardProps, index: number) => (
                <Card key={index} title={item.title} price={item.price} picture={item.picture} point={item.point} star={item.star} />
            ))}
        </div>
    )
}

export default Example2