
// const Card: React.FC<CardProps> = ({ title, description }) => {
// ----------------------------------------------------------------------------------------------------------------
// const Card = ({ title, description }) => {
// ----------------------------------------------------------------------------------------------------------------
const Card: React.FC<{ title: string; price: number; picture: string; point?: number; star?: number }> = ({ title, price, picture, point, star }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl">
            <a href="#">
                <img className="h-70 md:h-90 md:w-auto lg:h-90 lg:w-auto p-8 rounded-t-lg" src={picture} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{title}
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {star && (
                            Array.from({ length: 5 }).map((_, i) => (
                                <svg key={i} className={`w-4 h-4 ${i < star ? 'text-yellow-300' : 'text-gray-200 '}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))
                        )}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">{point}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 ">{price} บาท</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ซื้อเลย !!</a>
                </div>
            </div>
        </div>
    );
}

export default Card
