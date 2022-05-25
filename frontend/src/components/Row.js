import {useState} from 'react';
import {Button} from "react-bulma-components";
import {BsPencilSquare} from "react-icons/bs";
import {BsFillTrashFill} from "react-icons/bs";
import {BsChevronDown} from "react-icons/bs";
import {BsChevronUp} from "react-icons/bs";

const Row = (props) => {
    // State variable to keep track of all the expanded rows
    // By default, nothing expanded. Hence initialized with empty array.
    const [expandedRows, setExpandedRows] = useState([]);

    // State variable to keep track which row is currently expanded.
    const [expandState, setExpandState] = useState({});

    // This function gets called when show/hide link is clicked.
    const handleEpandRow = (event, userId) => {
        const currentExpandedRows = expandedRows;
        const isRowExpanded = currentExpandedRows.includes(userId);

        let obj = {};
        isRowExpanded ? (obj[userId] = false) : (obj[userId] = true);
        setExpandState(obj);

        // If the row is expanded, we are here to hide it. Hence remove
        // it from the state variable. Otherwise add to it.
        const newExpandedRows = isRowExpanded ?
            currentExpandedRows.filter(id => id !== userId) :
            currentExpandedRows.concat(userId);
        setExpandedRows(newExpandedRows);
    }

    return (
        <>
            <tr>
                <td>
                    <Button
                        variant="link"
                        onClick={event => handleEpandRow(event, props.item.id)}>
                        {
                            expandState[props.item.id] ?
                                <BsChevronUp/> : <BsChevronDown/>
                        }
                    </Button>
                </td>
                <td>{props.item.sellersName}</td>
                <td>{props.item.endCustomer}</td>
                <td>{props.item.duration}</td>
                <td>
                    <p className="icons-row">
                        <BsPencilSquare className="icons" size="25" onClick={() => props.changeToEditMode(props.index)}/>
                        <BsFillTrashFill className="icons" size="25" onClick={() => props.changeToRemoveMode(props.index)}/>
                    </p>

                </td>
            </tr>
            <>
                {
                    expandedRows.includes(props.item.id) ?
                        <tr>
                            <td colSpan="6">
                                <ul>
                                    <li><p className={"list-title"}>Konsultti:</p> <p
                                        className={"list-item"}>{props.item.consultsName}</p></li>
                                    <li><p className={"list-title"}>Välittäjä:</p> <p
                                        className={"list-item"}>{props.item.tradersName}</p></li>
                                    <li><p className={"list-title"}>Tuntimäärä:</p> <p
                                        className={"list-item"}>{props.item.numberOfHours}</p></li>
                                    <li><p className={"list-title"}>Maksuehto:</p> <p
                                        className={"list-item"}>{props.item.paymentTerm}</p></li>
                                    <li><p className={"list-title"}>Alkamispäivämäärä:</p> <p
                                        className={"list-item"}>{props.item.startingDate}</p></li>
                                    <li><p className={"list-title"}>Asiakkaan/välittäjän yhteyshenkilö:</p> <p
                                        className={"list-item"}>{props.item.contactPerson}</p></li>
                                    <li><p className={"list-title"}>Alihankkijan tiedot:</p> <p
                                        className={"list-item"}>{props.item.subcontractorInfo}</p></li>
                                    <li><p className={"list-title"}>Alihankkija:</p> <p
                                        className={"list-item"}>{props.item.subcontractorsName}</p></li>
                                    <li><p className={"list-title"}>Ostohinta:</p> <p
                                        className={"list-item"}>{props.item.purchasePrice}</p></li>
                                    <li><p className={"list-title"}>Laitteisto:</p> <p
                                        className={"list-item"}>{props.item.equipments}</p></li>
                                    <p className="help">muokattu: </p>
                                </ul>
                            </td>
                        </tr>
                        : null
                }
            </>
        </>

    )
}

export default Row;
