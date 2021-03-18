import React from 'react';
import IndexHead from '../components/IndexHead';
import IndexContent from '../components/IndexConent';
import IndexFooter from '../components/IndexFooter';
import HeadMeta from '../components/HeadMetadata';

function index() {
  return (
    <>
      <HeadMeta />
      <IndexHead />
      <IndexContent />
      <IndexFooter />
    </>
  );
}

export default index; 