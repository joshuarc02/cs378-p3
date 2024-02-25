import React from 'react';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, imageName, price, count, updateCount }) => {

    function incCount(){
      updateCount(id, 1)
    }
    
    function decCount(){
      updateCount(id, -1)
    }

    return (
        <div class="row item">
        <div class="col-md-auto pic align-self-center"><img class="pic" src={require("../images/" + imageName) /* found this short way from https://stackabuse.com/importing-images-with-react/ */} alt={description}/></div>
        <div class="d-flex flex-column col item-text">
          <div class="row">
            <div class="col title">{title}</div>
          </div>
          <div class="row-md-auto">
            <div class="col desc">{description}</div>
          </div>
          <div class="d-flex flex-row justify-content-between mt-auto">
            <div class="col align-self-center cost">{"$"+price}</div>
            <div class="col-md-auto">
              <div class="row">
                <div class="col align-self-center">
                  <button type="button" class="btn btn-primary" onClick={decCount} disabled={count===0}>-</button>
                </div>
                <div class="col align-self-center">
                  <div>{count}</div>
                </div>
                <div class="col align-self-center">
                  <button type="button" class="btn btn-primary" onClick={incCount}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MenuItem;