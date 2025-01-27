import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ThankYouPage = ({ clearCart }) => {
  const navigate = useNavigate();
  const location = useLocation();
  

  const items = location.state?.cartItems ?? [];

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  
  const handleBackToCatalog = () => {
    clearCart(); 
    navigate("/"); 
  };

  return (
    <div className="thank-you-page">
      <h1>Obrigado por sua compra!</h1>
      <p>Seu pedido foi concluído com sucesso.</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={handleBackToCatalog}>Voltar ao Catálogo</button>
    </div>
  );
};

export default ThankYouPage;
