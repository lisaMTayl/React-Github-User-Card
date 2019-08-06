import React from "react";

import { FormGroup } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Button } from "@material-ui/core";

const SearchForm = ({ value, onClick, onChange }) => (
  <div>
    <div>
      <div
        inputMode="text"
        placeholder="Search github username..."
        onChange={onChange}
        value={value}
      />
      <div>
        <Button bsSize="large" bsStyle="primary" onClick={onClick}>
          Search
        </Button>
      </div>
    </div>
  </div>
);

export default SearchForm;
