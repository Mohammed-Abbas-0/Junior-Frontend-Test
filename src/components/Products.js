import { useQuery } from "@apollo/client"
import { useProducts } from "../hooks/useProducts";
import { ProductCart } from "../Icons/Icons";
import ProductStyle from '../styles/PagesCss/Product.module.scss';

export default function Products() {
    const {error,data,loading} = useQuery(useProducts);

    if(loading) return (<div>Span..</div>)
    console.log(data.category);
 return (
    <section className={ProductStyle.product_Section}>
    { !loading &&
    <article>

    {data.category.products.map(product => {
    return(
        <>
        {/* This is Area refer To All Products */}
        <aside key={product.id}>
            <figure>
                <img src={product.gallery[0]} alt="product_image"/>
                <p>
                    <ProductCart/>
                </p>
            </figure>
            <section>
                <h2>{product.name}</h2>
                {product.prices.map(price => {
                    return(
                        <p>
                            <span>{price.amount}</span>
                            <span>{price.currency.symbol}</span>
                        </p>

                    )
                })}                                    
            </section>

        </aside>
   
        {/* End */}

        </>
        )})}


    </article>
    }
    </section>
)
}
