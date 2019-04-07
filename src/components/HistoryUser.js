import React, {useContext} from 'react'
import { Context } from '../context/Context';




const HistoryUser = () => {
    const {user} = useContext(Context);

    return (
        <ul>
         {user && user.redeemHistory ?
          user.redeemHistory.map( (p, i) => <li key={i}>{p.name} - Cost: {p.cost} </li>)
         : "NO SE CANJEO NADA TODAVIA"}

        </ul>

    )

}


export default HistoryUser;