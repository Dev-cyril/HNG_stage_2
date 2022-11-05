
import logo from '../images/logo.png'
import I4G from '../images/I4G.png'

const ContactMe = () => {

    return (
        <>
            <div id='contain'>
                <h2>Contact Me</h2>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
                <form action="">
                    <label id='f1'>
                        First Name <br />
                        <input id='first_name' type="text" placeholder="Enter your first name"/>
                    </label>
                    <label id='f2'>
                        Last Name <br />
                        <input id='last_name' type="text" placeholder="Enter your last name"/>
                    </label>
                    <label id='f3'>
                        Email <br />
                        <input id='email' type="email" placeholder="yourname@email.com"/>
                    </label>
                    <label id='f4'>
                        Message <br />
                        <textarea id='message' type="text" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                    </label>
                    <label id='f5'>
                        <input type='checkbox' />
                        <h5>You agree to providing your data to {name} who may contact you.</h5>
                    </label>
                    <button id='btn_submit'>Send message</button>
                </form>
            </div>
            <footer>
                <img src={logo} alt="" id='zuri' />
                <h5>HNG Internship 9 Frontend Task</h5>
                <img src={I4G} alt="" id='i4g' />
            </footer>
        </>
    )
}

export default ContactMe