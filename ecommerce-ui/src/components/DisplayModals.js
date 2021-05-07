import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import AddRental from './AddRentalModal';
import CartItems from './ShoppingCart';

function DisplayModals(props) {
  let mTitle;
  let mBodyHdr;
  let mBody;

  if(props.type === 'cart-display') {
    mTitle = 'Shopping Cart';
    mBodyHdr = 'Cart Items';

    mBody = props.cartItems.length === 0
      ? 'Cart is Empty.  Please go shopping!'
      : <CartItems
          totalCost={props.totalCost}
          cartCost={props.cartCost}
          cartItems={props.cartItems}
          delItem={props.delItem}
        />;
  } else {
    mTitle = 'Adding New Rental';
    mBodyHdr = 'New Rental Details';
    mBody = <AddRental
              toggleForm={props.onHide}
              addRental={props.addRental}
            />;
  }

  return(
    <Modal
      show={props.visible}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>{mTitle}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{mBodyHdr}</h4>
        <div>{mBody}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DisplayModals;
