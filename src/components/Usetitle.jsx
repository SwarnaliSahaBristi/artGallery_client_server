import React, { useEffect } from 'react';

const Usetitle = (title) => {
    useEffect(() => {
    document.title = `${title} | Artify`;
  }, [title]);
};

export default Usetitle;