import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const Problem2 = () => {
    const [showModalA, setShowModalA] = useState(false);
    const [showModalB, setShowModalB] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [myData, setMyData] = useState([]);

    const handleCloseModalA = () => setShowModalA(false);
    const handleShowModalA = () => setShowModalA(true);

    const handleCloseModalB = () => setShowModalB(false);
    const handleShowModalB = () => setShowModalB(true);

    useEffect(() => {
        axios.get('https://contact.mediusware.com/api/contacts/')
            .then((res) => {
                setMyData(res.data.results); // Store fetched data in myData state
            })
            .catch((error) => {
                console.error('Error fetching contacts:', error);
            });
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" onClick={handleShowModalA} type="button">
                        All Contacts
                    </button>

                    <button className="btn btn-lg btn-outline-warning" onClick={handleShowModalB} type="button">
                        US Contacts
                    </button>
                </div>

                {/* Display fetched data */}
               

                {/* Modals */}
                <Modal className='' show={showModalA} onHide={handleCloseModalA}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact List - All Contacts</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                    {myData.map((data)=> {
                        return(
                            <div>{data.phone}</div>
                        )
                    })}
                </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModalA}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showModalB} onHide={handleCloseModalB}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact List - US Contacts</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Display US Contacts */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModalB}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Problem2;
