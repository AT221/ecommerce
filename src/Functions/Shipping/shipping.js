//Flags
import USA from '../../Components/Images/Flags/USA.png';
import Canada from '../../Components/Images/Flags/Canada.png';
import UK from '../../Components/Images/Flags/UK.png';
import Mexico from '../../Components/Images/Flags/Mexico.png';
import Japan from '../../Components/Images/Flags/Japan.png';

import {useSelector} from 'react-redux';

export const useHandleShipping = (flag, cur) =>{
    const country = useSelector (state => state.country);
    if(country.usa === true){
        flag= USA
        cur = '$USD'
    }else if(country.canada === true){
        flag=Canada
        cur='$CAD'
    }else if(country.uk === true){
        flag=UK
        cur='£GBP'
    }else if(country.mexico === true){
        flag=Mexico
        cur='$MXN'
    }else if (country.japan === true){
        flag=Japan
        cur='¥JPY'
    }
    return(
        <div>
            <div>Shipping To:<span> <img src={flag}/>{cur}</span> </div>
        </div>
    )
}

