import {BsFillXCircleFill} from "react-icons/bs";
import {BsFillCheckCircleFill} from "react-icons/bs";

const RemoveRow = (props) => {
    return (
        <>
            <tr>
                <td></td>
                <td>{props.item.sellersName}</td>
                <td>{props.item.endCustomer}</td>
                <td>{props.item.duration}</td>
                <td>
                    <p className="icons-row">
                        <BsFillXCircleFill className="icons" color="red" size="25" onClick={() => props.cancel()}/>
                        <BsFillCheckCircleFill className="icons" color="green" size="25" onClick={() => props.removeFromList(props.item.id)}/>
                    </p>
                </td>
            </tr>
        </>
    )
}

export default RemoveRow;
