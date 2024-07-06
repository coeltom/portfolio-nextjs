'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      await emailjs.send(
        serviceId,
        templateId,
        { name, email, message },
        userId
      );
      setIsSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-7">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {isSuccess && (
        <p className="text-green-500 mb-4">Message sent successfully!</p>
      )}
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#f2f2f2]">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#f2f2f2]">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#f2f2f2]">
            Message
          </label>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            className="resize-none mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-900"
            rows="4"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        <p className="text-center">
          or contact me at{' '}
          <a href="mailto:work@tomascoe.dev">work@tomascoe.dev</a>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
