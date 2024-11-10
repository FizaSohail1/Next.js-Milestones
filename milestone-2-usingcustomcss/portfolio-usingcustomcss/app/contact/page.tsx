'use client';
import React from 'react';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import Img from '/public/contactImage.jpg';
import Link from 'next/link';
import styles from './contact.module.css'


function Page() {
  const [state, handleSubmit] = useForm("mgvewder");

  if (state.succeeded) {
    return (
       <div className={styles.succeedContainer}>
        <h1>Thanks for contacting me!</h1>
        <Link href="/" className={styles.goBackBtn}>Go Back</Link>
      </div>
    );
  }

  return (
    <>
      <h1 className={styles.mainHeading}>Get In<span>Touch!</span></h1>

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.displayImage}>
            <Image
              src={Img}
              alt="Contact Image"
              width={600}
              height={400}
              className={styles.styleImage}
            />
          </div>
        </div>
        <div className={styles.secoundSec}>
          <div className={styles.formContainer}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your Name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Your Email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" placeholder="Your Message" rows={5} required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button type="submit" className= {styles.sendBtn} disabled={state.submitting}> Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
