import {
    FaLongArrowAltUp, 
    FaLongArrowAltDown 
} from 'react-icons/fa';

export default function MaxMin() {
    return (
        <>
            <span>
                <FaLongArrowAltUp className='inline'/> 29°
            </span>
            <span>
                <FaLongArrowAltDown className='inline'/> 17°
            </span>
        </>
    )
}
