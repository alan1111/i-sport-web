/* eslint-disable */
import { useState, useCallback } from 'react';
import { renderRoutes } from "react-router-config";
import {
  preCls,
} from './constant';

const Discern = (props) => {
  const {route} = props;

  return (
    <div className={preCls}>
      test discern
      {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
    </div>
  );
};

export default Discern;
