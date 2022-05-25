import {useState} from 'react';
import 'bulma/css/bulma.min.css';
import './DealStyles.css';
import {Form, Box, Heading, Button} from "react-bulma-components";

const DealForm = (props) => {
    const [state, setState] = useState({
        sellersName: "",
        consultsName: "",
        tradersName: "",
        endCustomer: "",
        numberOfHours: "",
        paymentTerm: "",
        startingDate: "",
        duration: "",
        contactPerson: "",
        subcontractorInfo: "",
        subcontractorsName: "",
        purchasePrice: "",
        equipments: "",
    });

    const onChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (!state.sellersName) {
            return;
        }
        let item = {
            ...state
        }
        props.addToList(item);
        setState({
            sellersName: "",
            consultsName: "",
            tradersName: "",
            endCustomer: "",
            numberOfHours: "",
            paymentTerm: "",
            startingDate: "",
            duration: "",
            contactPerson: "",
            subcontractorInfo: "",
            subcontractorsName: "",
            purchasePrice: "",
            equipments: "",
        })
    }
    return (
        <div>
            <Box className="formBox">
                <form onSubmit={onSubmit}>
                    <Form.Field>
                        <Form.Label htmlFor="sellersName">Myyjä</Form.Label>
                        <Form.Control>
                            <input className="input"
                                   type="text"
                                   name="sellersName"
                                   placeholder="Etunimi Sukunimi"
                                   onChange={onChange}
                                   value={state.sellersName}/>
                        </Form.Control>
                    </Form.Field>
                    <hr/>

                    <Heading>Toimeksiannon tiedot</Heading>
                    <Form.Field>
                        <Form.Label htmlFor="consultsName">Konsultti</Form.Label>
                        <Form.Control>
                            <input className="input"
                                   type="text"
                                   name="consultsName"
                                   onChange={onChange}
                                   value={state.consultsName}/>
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label htmlFor="tradersName">Välittäjä</Form.Label>
                        <Form.Control>
                            <input className="input"
                                   type="text"
                                   name="tradersName"
                                   onChange={onChange}
                                   value={state.tradersName}/>
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label htmlFor="endCustomer">Loppuasiakas</Form.Label>
                        <Form.Control>
                            <input className="input"
                                   type="text"
                                   name="endCustomer"
                                   onChange={onChange}
                                   value={state.endCustomer}/>
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label htmlFor="numberOfHours">Tuntimäärä</Form.Label>
                        <Form.Control>
                            <input className="input"
                                   type="text"
                                   name="numberOfHours"
                                   onChange={onChange}
                                   value={state.numberOfHours}/>
                        </Form.Control>
                        <Form.Help>37,5h/vko tai jotain muuta</Form.Help>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label htmlFor="paymentTerm">Maksuehto</Form.Label>
                        <Form.Control>
                            <input className="input"
                                   type="text"
                                   name="paymentTerm"
                                   onChange={onChange}
                                   value={state.paymentTerm}/>
                        </Form.Control>
                        <Form.Help>jos on sovittu</Form.Help>
                    </Form.Field>

                    <hr/>
                    <Heading>Muut ehdot</Heading>
                    <Form.Field>
                        <Form.Label htmlFor="startingDate">Toimeksiannon alkamispäivämäärä</Form.Label>
                        <Form.Control>
                            <input className="input"
                                   type="text"
                                   placeholder="DD.MM.YYYY"
                                   name="startingDate"
                                   onChange={onChange}
                                   value={state.startingDate}/>
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label htmlFor="duration">Kesto</Form.Label>
                        <Form.Control>
                            <input className="input"
                                   type="text"
                                   name="duration"
                                   onChange={onChange}
                                   value={state.duration}/>
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label htmlFor="contactPerson">Asiakkaan/Välittäjän yhteyshenkilö</Form.Label>
                        <Form.Control>
                            <input className="input"
                                   type="text"
                                   name="contactPerson"
                                   onChange={onChange}
                                   value={state.contactPerson}/>
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label htmlFor="subcontractorInfo">Alihankkijan tiedot</Form.Label>
                        <Form.Control>
                            <input className="input"
                                   type="text"
                                   name="subcontractorInfo"
                                   onChange={onChange}
                                   value={state.subcontractorInfo}/>
                        </Form.Control>
                        <Form.Help>jos ei ole oma konsultti kyseessä</Form.Help>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label htmlFor="subcontractorsName">Alihankkija</Form.Label>
                        <Form.Control>
                            <input className="input"
                                   type="text"
                                   name="subcontractorsName"
                                   onChange={onChange}
                                   value={state.subcontractorsName}/>
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label htmlFor="purchasePrice">Ostohinta</Form.Label>
                        <Form.Control>
                            <input className="input"
                                   type="text"
                                   name="purchasePrice"
                                   onChange={onChange}
                                   value={state.purchasePrice}/>
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label htmlFor="equipments">Laitteisto</Form.Label>
                        <Form.Control>
                            <input className="input"
                                   type="text"
                                   name="equipments"
                                   onChange={onChange}
                                   value={state.equipments}/>
                        </Form.Control>
                        <Form.Help>BYOC tai laitteisto asiakkaalta</Form.Help>
                    </Form.Field>

                    <hr/>
                    <Form.Field kind="group">
                        <Form.Control>
                            <Button className="submit-btn" type="submit">Lähetä</Button>
                        </Form.Control>
                    </Form.Field>
                </form>
            </Box>
        </div>
    )
}

export default DealForm;
