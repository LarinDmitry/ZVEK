import React from 'react';
import {useParams} from 'react-router-dom';

const CompareView = () => {
  const {id} = useParams<{id: string}>();

  return id && id.split('%').map((item) => <div>{item}</div>);
};

export default CompareView;
