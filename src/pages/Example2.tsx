import Card from "../components/Card"
import { menu } from "../util/Menu"
const Example2 = () => {
    return (
        <div className="flex flex-wrap gap-8 justify-center">
            {menu.map((item, index) => (
                <Card key={index} title={item.title} price={item.price} picture={item.picture} point={item.point} star={item.star} />
            ))}
        </div>
    )
}

export default Example2