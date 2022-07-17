import './index.scss';
import Merchant from '../../images/merchant.png'
const Store = () => {
    return (
        <div className='container'>
            <div className='merchant-container'>
                <img className='merchant' src={Merchant} />
                <p>FILLER IMAGE</p>
            </div>
            <div className='options'>
                <ul>
                    <li>
                        Candy
                    </li>
                    <li>
                        Coins
                    </li>
                </ul>
                <ul>
                    <li>
                        Hat 1
                    </li>
                    <li>
                        Hat 2
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Store