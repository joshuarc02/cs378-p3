import React from 'react';

const MenuHeader = ({}) => {
    return ( 
      <div>
        <div class="row logo-row justify-content-center">
          <img id="logo" src={require("../images/logo.png")} alt="Logo for Human Food Place. The letters look like wheat."/>
        </div>
        <div class="row">
          <div class="col">
            <div class="row text-center">
              <div class="col" id="fancy_catchline">Making you full for 50 years</div>
            </div>
            <div class="row text-center">
              <div class="col" id="review_catchline">"Our favorite place to eat at" - Rob Boss</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MenuHeader;
