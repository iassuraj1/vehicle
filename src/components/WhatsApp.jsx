import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  return (
    <div>

      <FloatingWhatsApp
        phoneNumber="+211912345678"   
        accountName="Support"
        chatMessage="Hello! How can we help you?"
        placeholder="Type a message.."
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
};

export default WhatsApp;
