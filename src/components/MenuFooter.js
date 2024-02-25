import React from 'react';

const MenuFooter = ({subTotal, clear_all}) => {

    return ( 
      <footer class='footer mt-auto fixed-bottom'>
        <div class="d-flex flex-row justify-content-between">
          <div class="col m-auto">
            Subtotal: ${subTotal.toFixed(2)}
          </div>
          <div class="col">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#orderPopup">Order</button>
            <button type="button" class="btn btn-secondary" onClick={clear_all} disabled={subTotal===0}>Clear All</button>
          </div>
        </div>
      </footer>
    );
};

export default MenuFooter;
