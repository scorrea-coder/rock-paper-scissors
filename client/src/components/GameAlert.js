import React from 'react';

const GameAlert = ({ message, className }) => <div className={`alert alert-${className}`}>{message}</div>;

export default GameAlert;
