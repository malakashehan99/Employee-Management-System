import React from 'react';

const FooterComponent = () => {
  return (
    <div>
      <footer className='footer bg-primary text-white text-center py-3'>
        <p className='mb-1'>&copy; {new Date().getFullYear()} Employee Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default FooterComponent;
