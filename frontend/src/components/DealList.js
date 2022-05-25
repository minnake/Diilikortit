import {useState} from 'react';
import {Table} from "react-bulma-components";
import 'bulma/css/bulma.min.css';
import "./DealStyles.css";
import Row from './Row';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';

const DealList = (props) => {
    const [state, setState] = useState({
          removeIndex: -1,
          editIndex: -1
      })

        const changeToRemoveMode = (index) => {
          setState({
              removeIndex: index,
              editIndex: -1
          })
      }

      const changeToEditMode = (index) => {
          setState({
              removeIndex: -1,
              editIndex: index
          })
      }

      const cancel = () => {
          setState({
              removeIndex: -1,
              editIndex: -1
          })
      }

      const removeFromList = (id) => {
          props.removeFromList(id);
          cancel();
      }

      const editItem = (item) => {
          props.editItem(item);
          cancel();
      }

    let items = props.list.map((item, index) => {
         if (index === state.editIndex) {
             return (
                 <EditRow
                     key={item.id}
                     item={item}
                     cancel={cancel}
                     editItem={editItem}
                 />
             )
         }
         if (index === state.removeIndex) {
             return (
                 <RemoveRow
                     key={item.id}
                     item={item}
                     cancel={cancel}
                     removeFromList={removeFromList}
                 />
             )
         }

        return (
            <Row
                key={item.id}
                item={item}
                index={index}
                //changeToEditMode={changeToEditMode}
                changeToRemoveMode={changeToRemoveMode}
            />
        )
    })

    return (
        <Table className="table is-bordered">
            <thead>
            <th className="header-title-btn"></th>
            <th className="header-title-20"><h3>Myyjä</h3></th>
            <th className="header-title-20"><h3>Loppuasiakas</h3></th>
            <th className="header-title-20"><h3>Kesto</h3></th>
            <th className="header-title-10"><h3>Muokkaa/Poista</h3></th>
            </thead>
            <tbody>
            {items}
            </tbody>
        </Table>
    )
}

export default DealList;
