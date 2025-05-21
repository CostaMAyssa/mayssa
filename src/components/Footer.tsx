import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-golden/30">
      <div className="container">
        <div className="flex justify-center items-center">
          <div>
            <p className="text-grayText">
              &copy; {currentYear} Mayssa Ferreira Costa. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
