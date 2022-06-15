import { useQuery } from '@apollo/client';
import { useCurrencies } from '../hooks/useCurrencies';
import NavbarStyle from '../styles/PagesCss/Navbar.module.scss';

export default function Currencies()
{
    const {error, data, loading} = useQuery(useCurrencies);

    if(loading) return <div>Span ...</div>
    const All_Currencies = data.currencies;
    return(
        <>
        { !loading && 
        <select className={NavbarStyle.customSelect}>
            {All_Currencies.map(currency => {
                return (
                    <>
                        <option key={currency.symbol}>
                            {currency.symbol}
                        </option>
                    </>
                )}

            )}
        </select>
        }
        </>
    )
}