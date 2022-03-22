import {
    FaLongArrowAltUp, 
    FaLongArrowAltDown 
} from 'react-icons/fa';


import { BiUpArrow, BiDownArrow } from 'react-icons/bi';

export default function MaxMin(props) {
    const minTempDay = Math.round(props.data.temp.min);
    const maxTempDay = Math.round(props.data.temp.max);

    return (
        <>
            <span>
                <BiUpArrow className='inline'/> {maxTempDay}°
            </span>
            <span>
                <BiDownArrow className='inline'/> {minTempDay}°
            </span>
        </>
    )
}
