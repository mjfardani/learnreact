import React from 'react';
import ContactItem from './ContactItem';
 
function ContactList({ contacts }) {
 return (
   <div className="contact-list">
     {
       contacts.map((contact) => (
         <ContactItem key={contact.id} {...contact} /> // {...contact} digunakan untuk melanjutkan setelah id={contact.id} yaitu  name={contact.name} email={contact.email} />
       ))
     }
   </div>
 );
}
 
export default ContactList;