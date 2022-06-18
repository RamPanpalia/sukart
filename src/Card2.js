import React, { useState, useEffect } from 'react';
import './Card2.css'
import { useParams } from 'react-router-dom'
import { auth, db } from './FirebaseConfigs/firebaseConfig'
import { doc, getDoc, collection, query, where, getDocs, addDoc } from "firebase/firestore";

export default function Card2(props) {
    const [count, setCount] = useState(1)
    const [isFav, setBool] = useState(false)
    const { type, id } = useParams()
    const [product, setProduct] = useState([]);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    function GetCurrentUser() {
        const [user, setUser] = useState("");
        const usersCollectionRef = collection(db, "user");
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    const getUsers = async () => {
                        const q = query(
                            collection(db, "user"),
                            where("uid", "==", userlogged.uid)
                        );
                        // console.log(q);
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    };
                    getUsers();
                } else {
                    setUser(null);
                }
            });
        }, []);
        return user
    }
    const loggeduser = GetCurrentUser();

    function GetCurrentProduct() {
        // const productCollectionRef = collection(db, `product-BITS MERCHANDISE`);

        useEffect(() => {
            const getProduct = async () => {
                const docRef = doc(db, `product-BITS MERCHANDISE`, id);
                const docSnap = await getDoc(docRef);
                setProduct(docSnap.data());
            };
            getProduct();
        }, [])
        return product
    }

    // GetCurrentProduct();

    const buyIt=()=>{
        if (loggeduser) {
            console.log(loggeduser[0].uid)
            addDoc(collection(db, `history-${loggeduser[0].uid}`), {
                brand:props.product.brand,
                customersupport:props.product.customersupport,
                description:props.product.description,
                price:props.product.price,
                productimage:props.product.productimage,
                producttittle:props.product.producttittle,
                producttype:props.product.producttype,
                warranty:props.product.warranty,
                quantity: count
            }).then(() => {
                setSuccessMsg('Product added to cart');
                alert('Product purchase request sent will be dilivered within 7 days to your default home address');

            }).catch((error) => { setErrorMsg(error.message) });
        }
        else {
            setErrorMsg('You need to login first')
            alert('You need to login first')
        }

    }

    const addToCart = () => {
        if (loggeduser) {
            console.log(loggeduser[0].uid)
            addDoc(collection(db, `cart-${loggeduser[0].uid}`), {
                brand:props.product.brand,
                customersupport:props.product.customersupport,
                description:props.product.description,
                price:props.product.price,
                productimage:props.product.productimage,
                producttittle:props.product.producttittle,
                producttype:props.product.producttype,
                warranty:props.product.warranty,
                quantity: count
            }).then(() => {
                setSuccessMsg('Product added to cart');
                alert('Product added to cart');

            }).catch((error) => { setErrorMsg(error.message) });
        }
        else {
            setErrorMsg('You need to login first')
            alert('You need to login first')
        }

    }

    function toggleFav() { }

    function add() {
        setCount(function (oldValue) {
            return oldValue + 1
        })
    }

    function subtract() {
        setCount(oldValue => {
            return (oldValue>1?oldValue-1:oldValue)
        })
    }

    function toggle() {
        if (isFav === true) {
            setBool(t => false);
            toggleFav();
        }
        else {
            setBool(t => true);
        }
    }

    return (
        <>
            <div className="Card">
                <div className="card-img">
                    <img src={props.product.productimage} alt="" />
                </div>
                <div className="number buy-opt">
                    <div className="minus" onClick={subtract}>
                        -
                    </div>
                    <div className={"count" + props.cardid}>{count}</div>
                    <div className="add" onClick={add}>
                        +
                    </div>
                </div>
                <div className="BN buy-opt" onClick={buyIt}>
                    Buy Now
                </div>
                <div className="ATC buy-opt" onClick={addToCart}>
                    Add to Cart
                </div>
                <div className="name">{props.product.producttittle}</div>
                <div className="name price">Rs. {props.product.price}</div>
                <div className="ATF" onClick={toggle}>
                    {isFav ? (
                        <>
                            <span className="red">♥</span>
                        </>
                    ) : (
                        <>♥</>
                    )}
                </div>
                <div className="SD">{props.product.description}</div>
            </div>
        </>
    );
}