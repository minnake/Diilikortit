import React from "react";
import "./DealStyles.css";
import {Table} from "react-bulma-components";
import 'bulma/css/bulma.min.css';
//import {BsChevronDown} from "react-icons/bs";
//import {BsChevronUp} from "react-icons/bs";
import {BsFillPencilFill} from "react-icons/bs";
import {BsFillTrashFill} from "react-icons/bs";


export default class CopyDealList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    seller: "Mikko Mallikas",
                    customer: "Herkku Oy",
                    duration: "6 kuukautta",
                    value: 10,
                    created: "01.04.2022",
                    consult: "Matti Meikäläinen",
                    appellant: "Jussi Havu",
                    hours: "37,5h/vko",
                    paymentTerm: "-",
                    date: "20.02.2022",
                    contactPerson: "Kerttu Koski",
                    subcontractorInfo: "-",
                    subcontractor: "Deal Oy",
                    purchasePrice: "-",
                    hardware: "Laitteistot asiakkaalta",
                    updated: "24.02.2022",
                },
                {
                    id: 2,
                    seller: "Kerttu Laine",
                    customer: "Sanoma Oy",
                    duration: "5 kuukautta",
                    value: 76,
                    created: "01.01.2022",
                    consult: "",
                    appellant: "",
                    hours: "",
                    paymentTerm: "",
                    date: "",
                    contactPerson: "",
                    subcontractorInfo: "",
                    subcontractor: "",
                    purchasePrice: "",
                    hardware: "",
                    updated: "",
                },
                {
                    id: 3,
                    seller: "Heikki Harju",
                    customer: "Helsingin kaupunki",
                    duration: "1 vuosi",
                    value: 20,
                    created: "01.04.2022",
                    consult: "",
                    appellant: "",
                    hours: "",
                    paymentTerm: "",
                    date: "",
                    contactPerson: "",
                    subcontractorInfo: "",
                    subcontractor: "",
                    purchasePrice: "",
                    hardware: "",
                    updated: "",
                },
                {
                    id: 4,
                    seller: "Liisa Mäki",
                    customer: "Tampereen kaupunki",
                    duration: "8 kuukautta",
                    value: 50,
                    created: "01.12.2021",
                    consult: "",
                    appellant: "",
                    hours: "",
                    paymentTerm: "",
                    date: "",
                    contactPerson: "",
                    subcontractorInfo: "",
                    subcontractor: "",
                    purchasePrice: "",
                    hardware: "",
                    updated: "",
                },
                {
                    id: 5,
                    seller: "Jaana Heikkinen",
                    customer: "Silta Oy",
                    duration: "10 kuukautta",
                    value: 65,
                    created: "10.11.2021",
                    consult: "",
                    appellant: "",
                    hours: "",
                    paymentTerm: "",
                    date: "",
                    contactPerson: "",
                    subcontractorInfo: "",
                    subcontractor: "",
                    purchasePrice: "",
                    hardware: "",
                    updated: "",
                },
            ],
            expandedRows: []
        };
    }

    handleRowClick(rowId) {
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

        const newExpandedRows = isRowCurrentlyExpanded ?
            currentExpandedRows.filter(id => id !== rowId) :
            currentExpandedRows.concat(rowId);

        this.setState({expandedRows: newExpandedRows});
    }

    renderItem(item) {
        const clickCallback = () => this.handleRowClick(item.id);

        const itemRows = [
            <tr onClick={clickCallback} key={"row-data-" + item.id}>
                <td>{item.seller}</td>
                <td>{item.customer}</td>
                <td>{item.duration}</td>
                <td>
                    <progress max="100" className="progress is-small is-primary" value={item.value}/>
                </td>
                <td>{item.created}</td>
                <td><p className={"icon-center"}><BsFillPencilFill/></p></td>
                <td><p className={"icon-center"}><BsFillTrashFill/></p></td>
            </tr>
        ];

        if (this.state.expandedRows.includes(item.id)) {
            itemRows.push(
                <tr key={"row-expanded-" + item.id}>
                    <td>
                        <ul>
                            <li><p className={"list-title"}>Konsultti:</p> <p className={"list-item"}>{item.consult}</p></li>
                            <li><p className={"list-title"}>Välittäjä:</p> <p className={"list-item"}>{item.appellant}</p></li>
                            <li><p className={"list-title"}>Tuntimäärä:</p> <p className={"list-item"}>{item.hours}</p></li>
                            <li><p className={"list-title"}>Maksuehto:</p> <p className={"list-item"}>{item.paymentTerm}</p></li>
                            <li><p className={"list-title"}>Alkamispäivämäärä:</p> <p className={"list-item"}>{item.date}</p></li>
                            <p className="help">muokattu: {item.updated}</p>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li><p className={"list-title"}>Asiakkaan/välittäjän yhteyshenkilö:</p> <p className={"list-item"}>{item.contactPerson}</p></li>
                            <li><p className={"list-title"}>Alihankkijan tiedot:</p> <p className={"list-item"}>{item.subcontractorInfo}</p></li>
                            <li><p className={"list-title"}>Alihankkija:</p> <p className={"list-item"}>{item.subcontractor}</p></li>
                            <li><p className={"list-title"}>Ostohinta:</p> <p className={"list-item"}>{item.purchasePrice}</p></li>
                            <li><p className={"list-title"}>Laitteisto:</p> <p className={"list-item"}>{item.hardware}</p></li>
                        </ul>
                    </td>
                </tr>
            );
        }

        return itemRows;
    }

    render() {
        let allItemRows = [];

        this.state.data.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
        });

        return (
            <div className="table-container">
                <Table className="table">
                    <thead>
                    <tr>
                        <th>Myyjä</th>
                        <th>Loppuasiakas</th>
                        <th>Kesto</th>
                        <th>Edistyminen</th>
                        <th>Luotu</th>
                        <th><p className={"icon-center"}>Muokkaa</p></th>
                        <th><p className={"icon-center"}>Poista</p></th>
                    </tr>
                    </thead>
                    <tbody>
                    {allItemRows}
                    </tbody>
                </Table>
            </div>
        );
    }
}
