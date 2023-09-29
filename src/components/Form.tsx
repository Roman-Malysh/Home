import { FormEvent, useState } from 'react';
import classNames from 'classnames';
import '../styles/Form.scss';

export const Form = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [textArea, setTextArea] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [textAreaError, setTextError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  
  const emailPattern = email.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setEmailError(false);
    setNameError(false);
    setTextError(false);
    setIsSuccess(false);

    setTimeout(() => {
      if (!name.length) {
        setNameError(true);
        setIsLoading(false);
        return;
      }
      if (!emailPattern) {
        setEmailError(true);
        setIsLoading(false);
        return;
      }
      if (textArea.length < 10) {
        setTextError(true);
        setIsLoading(false);
        return;
      }

      setEmail('');
      setName('');
      setTextArea('');
      setIsSuccess(true);
      setIsLoading(false);
    }, 2000);
  }

  return (
    <section className='form-back'>
      <h1 className='form-back__title'>
        Are you ready <br />
        to board this rocket ship?
      </h1>
      <p className='form-back__p'>Share your excitement with us.</p>
      <form action='' className='form'>
        <input type="text" className="form__input" placeholder='Name*' maxLength={10} value={name} onChange={(e) => setName(e.target.value)}/>
        <p className={classNames({"form__error": nameError, "form__error-hidden": !nameError})}>Your name has to have from 1 to 10 digits</p>
        <input type="text" className="form__input" placeholder='Email*' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <p className={classNames({"form__error": emailError, "form__error-hidden": !emailError})}>Enter valid email</p>
        <textarea className="form__textArea" placeholder='Message*' value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
        <p className={classNames({"form__error": textAreaError, "form__error-hidden": !textAreaError})}>Your message has to have at least 10 digits</p>
        <button className={classNames('form__button', {'form__button-ty' : isSuccess })} onClick={(e) => HandleSubmit(e)}>
          {isLoading ? (<div className="lds-ring"><div></div><div></div><div></div><div></div></div>) : (!isSuccess ? ('Shoot us a message') : ('Thank you!'))}
          </button>
      </form>
    </section>
  );
};
