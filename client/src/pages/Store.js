import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';
import Merchant from '../images/merchant.png';
import '../components/Layout/index.scss';

const Store = () => {
    const {data} = useQuery(QUERY_ME)
    console.log(data?.me)
    return (
        <div className='container'>
            <div className='merchant-container'>
                <img className='merchant' src={Merchant} />
                <p>FILLER IMAGE</p>
            </div>
            <div className='options'>
                <div>
                    <button className="btn li">Candy</button>
            
                    <button className="btn li">Coins</button>
                </div>
                <div>
                        <button className="btn li">Hat 1</button>

                        <button className="btn li">Hat 2</button>
                </div>
            </div>
        </div>
    )
}

export default Store