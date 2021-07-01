import { AiTwotoneDelete, AiOutlineExclamationCircle } from 'react-icons/ai';

import './style.css';
import './style-priority.css';

export default function Note({ data }){
    return(
        <>
            <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
                <div>
                    <strong>{data.title}</strong>
                        
                    <div>
                        <AiTwotoneDelete size="24" />
                    </div>
                </div>

                <textarea defaultValue={data.notes} ></textarea>

                <span>
                    <AiOutlineExclamationCircle size="24" />
                </span>
            </li>
        </>
    )
}