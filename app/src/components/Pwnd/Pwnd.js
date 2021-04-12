import React from "react";

const Pwnd = (props) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="myaddress" aria-label="Address"/>
      <span class="input-group-text">@</span>
      <input type="text" class="form-control" placeholder="email.com" aria-label="Service"/>
    </div>
  );

  export default Pwnd;