import React from 'react';
import {Helmet} from 'react-helmet'; 

function HeadMetadata({children}) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="app_name" content="life_lifters" />
        <meta name="author" content="Bruno Edoh" /> 
        <title>Life Lifters: Empowering Generations</title>
        {children ? children : null}
      </Helmet>
    </>
  );
}

export default HeadMetadata;
