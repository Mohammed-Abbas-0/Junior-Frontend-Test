import { useQuery } from "@apollo/client";
import { useCategories } from "../hooks/useCategories";

export default function Categories()
{
    const {error, data,loading} = useQuery(useCategories);
    if(loading) return <div>Span...</div>
    if(error) return <div>Something is Warning</div>
    const All_Categories = data.categories;
    return (
        <>
            {!loading && 
            <ul>
                {All_Categories.map(category => {
                    return (
                        <li key={category.name}> {category.name} </li>
                    )
                })}                
            </ul>
            }
        </>
    )

}
