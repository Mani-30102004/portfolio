import React, { useRef } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // service ID from env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // template ID from env
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // public key from env
        {
          time: currentTime,
        }
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset(); // clear form after successful send
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold section-title inline-block">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat about engineering and technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="mr-4 mt-1 contact-icon" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:manipabba30@gmail.com" className="hover:underline">
                    manipabba30@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-4 mt-1 contact-icon" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+91 9494463100" className="hover:underline">
                    +91 9494463100
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-4 mt-1 contact-icon" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p>Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/pabba-mani-guptha-114a69249/"
                  className="bg-white text-indigo-600 p-3 rounded-full hover:bg-indigo-100 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Mani-30102004"
                  className="bg-white text-indigo-600 p-3 rounded-full hover:bg-indigo-100 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:manipabba30@gmail.com"
                  className="bg-white text-indigo-600 p-3 rounded-full hover:bg-indigo-100 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="youremail@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
