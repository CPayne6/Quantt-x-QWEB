import React from 'react';
import "../res/styles/contact.css";

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <div className="row contact-container">
                <div className="col-lg-6">
                    <div className="title-container contact-left">
                        <h1 className="contact-heading">GET IN TOUCH</h1>
                    </div>
                </div>
                <div className="col-lg-6 contact-right">
                    <div className="form-container">
                        <form className="contact-form">
                            <div className="form-group form-group-left">
                                <label for="emailInput"> Email Address </label>
                                <input class="form-control" type="text" name="email" id="emailInput" aria-describedby="emailHelp" placeHolder="Your Email" />
                                <small id="emailHelp"> So we can respond to your message </small>
                            </div>
                            <div class="form-group form-group-left">
                                <label for="name"> Full Name </label>
                                <input class="form-control" type="text" name="name" id="name" placeholder="Your Full Name" />
                            </div>
                            <div class="form-group form-group-left">
                                <label for="message">Message</label>
                                <textarea class="form-control" id="message" rows="5"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;