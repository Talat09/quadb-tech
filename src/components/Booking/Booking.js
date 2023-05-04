import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./Booking.css";
const Booking = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  const handleBookingClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const addToDb = (event) => {
    event.preventDefault();
    const name = event.target.elements?.name?.value;
    const bookingDetails = {
      showName: show?.name,
      userName: name,
      bookingTime: new Date(),
    };
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
  };
  return (
    <div className="show">
      <img src={show?.image?.original} alt="movie" />
      <h1>{show?.name}</h1>
      <p className="fs-3">Show Time : {show?.schedule?.time} Pm</p>
      <p className="fs-4">Status : {show?.status}</p>
      <p className="fs-6">Show Day: {show?.schedule?.days[0]}</p>
      <Button variant="primary" onClick={handleBookingClick}>
        Booking
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Booking Details</Modal.Title>
          <p className="close-btn" onClick={handleClose}>
            X
          </p>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={addToDb}>
            <input
              type="text"
              className="w-100 text-center my-2"
              value={show?.name}
              readOnly
            />
            <input
              type="text"
              name="name"
              className="w-100 text-center"
              placeholder="Enter your Name"
            />
            <Button variant="primary" className="my-2" type="submit">
              Booking Confirm
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Booking;
