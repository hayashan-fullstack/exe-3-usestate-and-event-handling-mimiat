import React from 'react';
import ReactDOM from 'react-dom';

const contactList = [
    {
        name: "sara",
        tel: "123456789",
        address: "israel",
        category: "family"
    },
    {
        name: "rivka",
        tel: "123456789",
        address: "israel",
        category: "work"
    },
    {
        name: "rachel",
        tel: "123456789",
        address: "israel",
        category: "class"
    },
    { 
        name: "leah",
        tel: "123456789",
        address: "israel",
        category: "family"
    },
    {
        name: "rina",
        tel: "123456789",
        address: "israel",
        category: "work"
    },
    {
        name: "bina",
        tel: "123456789",
        address: "israel",
        category: "class"
    }
];

const Header = (props) => {
    return(
        <div>
            <table border = '1'>
        <tr>
            <th width = '12.51%'>name</th>
            <th width = '12.51%'>tel</th>
            <th width = '12.51%'>address</th>
            <th width = '12.51%'>category</th>
            </tr>
            </table>
            </div>
        )
}
const Line = (props) => {
    return(
        <div>
        <table border = '1'>
        <tr>
        <td width = '15%'>{props.line.name}</td>
        <td width = '15%'>{props.line.tel}</td>
        <td width = '15%'>{props.line.address}</td>
        <td width = '15%'>{props.line.category}</td>
        </tr>
        </table>
            </div>
        )
}


const Print = (props) => {
    return(
        props.contactList.map(line =><Line  line = {line}/>)
    )
}
const App = () => {
    return (
        <div style={{margin:'10%'}}>
        <br/>
        <br/> 
            <h1>My Contact</h1>
            <Header/>
            <Print contactList = {contactList}/>
            <br/>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
