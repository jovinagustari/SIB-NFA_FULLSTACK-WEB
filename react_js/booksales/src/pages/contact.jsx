const Contact = () => {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        {/* Contact Info */}
        <div className="col-md-6 mb-4">
          <h5>Get in Touch</h5>
          <p>If you have any questions or need help, feel free to reach out to us.</p>
          <ul className="list-unstyled">
            <li><strong>Email:</strong> info@bookies.com</li>
            <li><strong>Phone:</strong> +62 812 3456 7890</li>
            <li><strong>Address:</strong> Jl. Kenangan No. 404, Wakanda</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Write your message"></textarea>
            </div>
            <button type="submit" className="btn b-btn-fill">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
