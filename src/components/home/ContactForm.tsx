const SubmitButton = () => {


  // useEffect(() => {
  //   console.log({ pending });
  // }, [pending]);

  return (
    <button className={`btn rounded-pill`}
    >
      Submit
    </button>
  )
}


const ContactForm = () => {

  return (
    <form className='contact-form'>

      <div className="mt-5 mt-md-0">
        <h3>Speak to Sales</h3>

        <aside className='d-flex flex-column justify-content-center'>
          <div className='my-2'>
            <label htmlFor="email">Email</label>
            <input
              id='email'
              name='email'
              type='text'
              className=''
            />
          </div>
          <div className="my-2">
            <label htmlFor="firstName">First Name</label>
            <input
              id='firstName'
              name='firstName'
              type='text'
              className=''
            />
          </div>
          <div className="my-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              id='lastName'
              name='lastName'
              type='text'
              className=''
            />
          </div>
          <div className='my-2'>
            <label htmlFor="message">Message</label>
            <textarea
              id='message'
              name='message'
              placeholder='Message'
              className=''
              rows={4}
            />
          </div>

          <div className="row">
            <div className="col-1">
              <input type="checkbox" name="termsAndConditions" id="termsAndConditions" />
            </div>
            <div className="col-11">
              <p>
                I agree to receiving payment news and trends from Inpay, including updates to our products and services. I am aware that I can withdraw this consent at any time by contacting Inpay or unsubscribing via email. I agree to Inpay processing my personal data in accordance with its Privacy Policy.
              </p>
            </div>
          </div>

          <div className='mt-4 mb-5 my-md-5'>
            <SubmitButton />
          </div>
        </aside>
      </div>

    </ form>
  )
}

export default ContactForm