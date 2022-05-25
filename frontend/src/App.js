import './App.css';
import 'bulma/css/bulma.min.css';
import {Routes, Route} from "react-router-dom";
import {useState, useEffect} from 'react';
import DealForm from "./components/DealForm";
import DealList from "./components/DealList";
import Navigation from "./components/Navbar";

function App() {
    const [urlRequest, setUrlRequest] = useState({
        url: "",
        request: {},
        action: ""
    });

    const [state, setState] = useState({
        list: []
    });

    useEffect(() => {
        getList();
    }, [])

    useEffect(() => {
        if (urlRequest.url === "") {
            return;
        }

        const fetchData = async () => {
            const response = await fetch(urlRequest.url, urlRequest.request);
            if (response.ok) {
                if (urlRequest.action === "getlist") {
                    const data = await response.json();
                    setState({
                        list: data
                    })
                    return;
                }
                if (urlRequest.action === "additem") {
                    getList();
                    return;
                }
                if (urlRequest.action === "removeitem") {
                    getList();
                    return;
                }
                if (urlRequest.action === "edititem") {
                    getList();
                    return;
                }
            } else {
                if (urlRequest.action === "getlist") {
                    console.log("Server responded with a status", response.status)
                }
                if (urlRequest.action === "additem") {
                    console.log("Server responded with a status", response.status)
                }
                if (urlRequest.action === "removeitem") {
                    console.log("Server responded with a status", response.status)
                }
                if (urlRequest.action === "edititem") {
                    console.log("Server responded with a status", response.status)
                }
            }
        }

        fetchData();
    }, [urlRequest]);

    const getList = () => {
        setUrlRequest({
            url: "/api/deal",
            request: {
                method: "GET",
                mode: "cors",
                headers: {"Content-type": "application/json"}
            },
            action: "getlist"
        })
    }

    const addToList = (item) => {
        setUrlRequest({
            url: "/api/deal",
            request: {
                method: "POST",
                mode: "cors",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(item)
            },
            action: "additem"
        })
    }

    const removeFromList = (id) => {
        setUrlRequest({
            url: "/api/deal/" + id,
            request: {
                method: "DELETE",
                mode: "cors",
                headers: {"Content-type": "application/json"}
            },
            action: "removeitem"
        })
    }

    const editItem = (item) => {
        setUrlRequest({
            url: "/api/deal/" + item.id,
            request: {
                method: "PUT",
                mode: "cors",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(item)
            },
            action: "edititem"
        })
    }

    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route exact path="/"
                       element={<DealList
                           list={state.list}
                           removeFromList={removeFromList}
                           editItem={editItem}
                       />}
                />
                <Route path="/form"
                       element={<DealForm
                           addToList={addToList}
                       />}
                />
            </Routes>
        </div>
    );
}

export default App;
