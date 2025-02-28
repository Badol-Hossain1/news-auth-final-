import { useLoaderData } from 'react-router-dom'
import Header from '../components/Header'
import RightNav from '../components/layout-component/RightNav'

const NewsDetails = () => {
    const data = useLoaderData()
    console.log('🚀 ~ NewsDetails ~ data:', data.data[0])
    return (
        <div>
            News details
            <Header></Header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="cal-span-9">
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img src={data.data[0].image_url} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {data.data[0].author.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{data.data[0].title}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">
                                    Fashion
                                </div>
                                <div className="badge badge-outline">
                                    <button>
                                        <a
                                            href={`/category/${data.data[0].category_id}`}
                                        >
                                            back
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cal-span-3">
                    <RightNav></RightNav>
                </section>
            </main>
        </div>
    )
}

export default NewsDetails
