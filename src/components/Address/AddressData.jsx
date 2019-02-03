import React from 'react';
import './AddressData.scss';

const AddressData = ({
  address: { name, street, city, state, postal, country }
}) => (
  <div className="elr-address">
    <h3 className="elr-address-name">{name}</h3>
    <p className="elr-address-street">{street}</p>
    <p className="elr-address-city">
      {city}, {state} {postal}
    </p>
    <p className="elr-address-country">{country}</p>
  </div>
);

export default AddressData;
