import React from 'react'
import { useState, useEffect } from 'react';
import { BsPerson } from "react-icons/fa";
import { asideLink } from './asideLink';
import { CardInfoSal, CardInfoExp, CardInfoInc ,table, customer, analytic, LightTheme, DarkTheme, AddBtnIcon, OnlineAnalytics, OfflineAnalytics, CustomerAnalytics, BackArrow, LogoutIcon, Bars, Caret} from './asideLink';
import logo from './img/logo.jpg'
import Clogo from './img/cLogo.png'

function AddButton(){
    const [dropDown,  setDropDown] = useState(false)

    function handleEdit() {
        if (dropDown) {
            // setDropDown(false)
            
        }
        else if(!dropDown){
            setDropDown(true)
        }
    }
    function closeDrop(){
        setDropDown(false)
        console.log('closing');
    }
    return(
        <button onBlur={closeDrop} onClick={handleEdit}>
            actions 
            <span><Caret /></span>
            {dropDown && <ul >
                <li>Update Invoice</li>
                <li>Edit Invoice</li>
                <li>Invoice Info</li>
                <li>Print Receipt</li>
                <li>Delete Invoice</li>
            </ul> }
        </button>
    )

}

const App = () => {
    const [size, setSize] = useState(window.innerWidth)
    const [level, setLevel] = useState(true)
    const [asideLinks, setAsideLinks] = useState(asideLink)
    const [aside, setAside] = useState(false);
    const [customers, setCustomers] = useState(customer)
    const [menuBar, setMenuBar] = useState(false)
    const [closeBar, setCloseBar] = useState(false)
    const [headerDash, setHeaderDash] = useState(true)
    const [bodyDash, setBodyDash] = useState(false)
   
    const changeSize = ()=>{
        setSize(window.innerWidth)
    }
    
    useEffect(()=>{
        window.addEventListener('resize', changeSize)
        
        // For smaller pc
        if (size >= 991) { 
            setBodyDash(false)
            setHeaderDash(true)
            setAside(true)
            setCloseBar(false)
        }
        // for tablets
        if(size <= 990){
            setHeaderDash(false)
            setBodyDash(true)
            setMenuBar(true)
            setCloseBar(true)
        }
    })
    
    const closeMenu=()=>{
            setTimeout(() => {
                setAside(false)
            }, 150);
            document.querySelector('.container').style = 'overflow: auto'

        }
    const showMenu=()=>{
        if (aside === false) {
            setAside(true)
            document.querySelector('.container').style = 'overflow: hidden'
        }}

    const toggleTheme = (e)=>{
        console.log('Theme toggler in progress...');
       
    }
   
    return (
        <div className="container">
            <header>
                <section className="left">
                     <article>
                        {menuBar && <span className='menu-bar' onClick={showMenu}><Bars /></span>}
                        <img src={Clogo} alt="" />
                        <h2>IRG-<span>CNS</span></h2>
                    </article>
                </section>
                <section className="center">
                    <section className="cont">
                    {headerDash &&
                        <div className="extra">
                            <h2>Dashboard</h2>
                            <div>
                                <input type="date" name="" id="" />
                            </div> 
                        </div>}
                    </section>
                </section>
                <section className="right-end">
                     <section className="theme" onClick={toggleTheme}>
                       <span className="light"> <LightTheme /></span>
                       <span className="dark"><DarkTheme /></span>
                    </section>
                    {level && 
                    <section className="name">
                        <h4>Hey <b> David</b></h4>
                        <small>Admin</small>
                    </section>}
                    <img src={logo} alt="" />
                </section>
            </header>
            
            <main>
                <section className="main-cont">
                    {aside && 
                    <section className={aside ? "aside active-Aside":"aside inactive-Aside" }>
                        <section className="aside-main">
                            <ul className='collection'>
                                {asideLink.map((data, index) => {
                                    const { icon, des, count } = data
                                    return (
                                            <li key={index} {...data}>
                                            <a href="#">
                                                <span className="icon"> {icon}</span> <span className='text'><h4>{des}</h4></span> {count}
                                            </a>
                                            </li>
                                        
                                    )
                                })}
                                {closeBar && <li className='back' onClick={closeMenu}>
                                    <a href="#">
                                         <span className="icon"><BackArrow /></span> <span className='text'><h4>Back</h4></span>
                                    </a>
                                </li>}
                                <li className='log-out'>
                                    <a href="#">
                                         <span className="icon"><LogoutIcon /></span> <span className='text'><h4>Logout</h4></span>
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </section>}
                    {/* End of Aside */}
                    <section className="middle">
                        <section className="main">
                            <article className='cont'>
                                {bodyDash && <section className="title">
                                    <div className="extra">
                                        <h2>Dashboard</h2>
                                        <div>
                                            <input type="date" name="" id="" />
                                        </div> 
                                    </div>
                                </section>}
                                <section className="card-cont">
                                    <article className="card" >
                                        <section className="top">
                                            <section className="left">
                                            <CardInfoSal />
                                            </section>
                                            <section className="right sales">
                                                <svg>
                                                    <circle cx="45" cy="84" r="38"></circle>
                                                </svg>
                                                <div className="number">
                                                    <p>61%</p>
                                                </div>
                                            </section>
                                        </section>
                                        <section className="foot">
                                            <small>Last 24 hrs</small>
                                        </section>
                                    </article>
                                    <article className="card">
                                        <section className="top">
                                            <section className="left">
                                            <CardInfoExp />
                                            </section>
                                            <section className="right expenses">
                                                <svg>
                                                    <circle cx="45" cy="84" r="38"></circle>
                                                </svg>
                                                <div className="number">
                                                    <p>61%</p>
                                                </div>
                                            </section>
                                        </section>
                                        <section className="foot">
                                            <small>Last 24 hrs</small>
                                        </section>
                                    </article>
                                    <article className="card">
                                        <section className="top">
                                            <section className="left">
                                            <CardInfoInc />
                                            </section>
                                            <section className="right income">
                                                <svg>
                                                    <circle cx="45" cy="84" r="38"></circle>
                                                </svg>
                                                <div className="number">
                                                    <p>61%</p>
                                                </div>
                                            </section>
                                        </section>
                                        <section className="foot">
                                            <small>Last 24 hrs</small>
                                        </section>
                                    </article>
                                </section>
                                <section className="orders">
                                    <article className="nav">
                                        <h2>Recent Orders</h2>
                                    </article>
                                    <section className="invoice">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Product ID</th>
                                                    <th>Product Name</th>
                                                    <th>Payment Mth</th>
                                                    <th>Status</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {table.map((data)=>{
                                                    const {idd, stock, payment, status, action, caret}= data
                                                    return(
                                                        <tr {...data}>
                                                            <td>{idd}</td>
                                                            <td>{stock}</td>
                                                            <td>{payment}</td>
                                                            <td>{status}</td>
                                                            <td>
                                                                <AddButton />
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </section>
                                </section>
                            </article>
                        </section>
                    </section>
                    {/* End of Main */}
                    <section className="right-area">
                        <section className="update card">
                            <article className="cont">
                                {customers.map((data) => {
                                    const { pic, name, note, time } = data
                                    return (
                                        <section className="customer">
                                            <img src={pic} alt="abcd" />
                                            <section className="right">
                                                <h4> <b>{name}</b> {note} </h4>
                                                <small>{time} minutes ago</small>
                                            </section>
                                        </section>
                                    )
                                })}
                            </article>
                        </section>
                        <section className="analytics">
                            <article className="nav">
                                <h2>Sales Analytics</h2>
                            </article>
                            <section className="main">
                                <article className="cont">
                                    <OnlineAnalytics />
                                    <OfflineAnalytics/>
                                    <CustomerAnalytics />
                                </article>
                            </section>
                            <section className="add-product">
                                <button>
                                    <span><AddBtnIcon /></span> Product
                                </button>
                            </section>
                        </section>
                    </section>
                    {/* End of Right */}
                </section>
            </main>
        </div>
    )
}

export default App
