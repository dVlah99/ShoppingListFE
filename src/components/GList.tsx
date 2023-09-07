import React, { useState } from "react";
import { List } from "models/GListModel";
import { Item } from "models/ItemModel";
function GList() {
    const [state, setState] = useState([] as unknown as List[])

    const getSomething = () => {
        fetch('https://localhost:7249/api/List/GetLists')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setState(json)
            })
    }

    return (
        <div>
            <button onClick={getSomething}>Fetch Data</button>
            {state.map((store) => (
                <div key={store.id}>
                    <h1>{store.storeName}</h1>
                    <ul>
                        {store.items.map((item: Item) => (
                            <li key={item.name}>
                                <p>Name: {item.name}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Check: {item.check.toString()}</p>
                                <p>Measurement: {item.measurement}</p>
                                <p>Description: {item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default GList; 