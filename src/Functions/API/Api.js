
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts} from '../../Redux/Actions/Actions';


export const  useApi = () => {
    const dispatch = useDispatch();
    const state = useSelector(state=> state.productReducer);

    useEffect(() => {
       dispatch(fetchProducts());
    }, [])

}

