<script>
  import logo from './assets/weblogo.svg'
  import card1 from './assets/card.jpg'

</script>

<main>

<header>
  <nav>
    <img src={logo} class="logo" alt="logo" />
  </nav>
  <section class="header-text">
    <h1>Your Local Plumbing Experts</h1>
    <!-- <p>From minor leaks to major repairs, we have you covered. Your trusted family-owned business for reliable plumbing solutions.</p> -->
    <p>From minor leaks to major repairs, we have you covered. As a trusted, family-owned business, we provide reliable and professional plumbing solutions to meet all your needs.</p>
  </section>
  <a href="/" class="action-button">Get a Free Estimate</a>
</header>

<section class="text-container">
  <h2>Why Choose KNOCKOUT?</h2>
  <p>With over 27 years of expirience in the plumbing industry, we bring unmatched expertise to every job. As a family-owned business, we care deeply about our community and strive to offer reliable, efficient, and affordable plumbing solutions.</p>
</section>

<section class="text-container">
  <h2>Our Services</h2>
  <div class="services">
      <div class="service-item">
        <div class="img-container"></div>
        <section>
          <h3>Residential Plumbing</h3>
          <p>Efficient and reliable plumbing solutions for your home.</p>
        </section>
        <!-- <img src={card1} alt="card_1_img"> -->
      </div>
      <div class="service-item">
        <div class="img-container"></div>
        <section>
          <h3>Commercial Plumbing</h3>
          <p>Professional services tailored to your business needs.</p>
        </section>

        <!-- <img src={card1} alt="card_1_img"> -->
      </div>
      <div class="service-item">
        <div class="img-container"></div>
        <section>
          <h3>Water Heater Services</h3>
          <p>Installation, repair, and maintenance of energy-efficient water heaters.</p>
        </section>

        <!-- <img src={card1} alt="card_1_img"> -->

    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="testimonials">
  <h2>What Our Customers Say</h2>
  <div class="testimonial">
      <p>"John and his team were amazing! They came quickly, fixed the leak with no hassle, and at a reasonable price. Highly recommend!"</p>
      <span>– Sarah, Local Homeowner</span>
  </div>
  <div class="testimonial">
      <p>"Excellent service, great attention to detail. Highly skilled and very professional. I won’t go anywhere else for plumbing!"</p>
      <span>– Mike, Small Business Owner</span>
  </div>
</section>

<!-- Contact Form Section -->
<section id="contact">
  <h2>Get in Touch Today!</h2>
  <form action="#" method="POST" class="contact-form">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <input type="tel" name="phone" placeholder="Your Phone Number" required>
      <textarea name="message" rows="4" placeholder="How can we help you?" required></textarea>
      <button type="submit">Submit</button>
  </form>
</section>

<!-- Footer Section -->
<footer>
  <p>&copy; 2025 [Company Name]. All Rights Reserved.</p>
  <p>
      <a href="#">About Us</a> |
      <a href="#">Services</a> |
      <a href="#">Contact Us</a> |
      <a href="#">Testimonials</a>
  </p>
</footer>

</main>

<style>
  .logo{
    width: 380px;
  }

  nav{
    display: flex;
    align-items: center;
    position: absolute;
    top: 1rem;
    left:0rem;
  }

  header {
    background-image: url('assets/7.jpg');
    background-image: url('assets/7.jpg');
    background-image: url('assets/hero1.jpg');
    background-color: black;
    background-size: cover;
    background-position: center;
    padding: 3rem;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 95vh;
    color: rgb(245, 245, 245);
    box-shadow: inset 35rem 0 10rem 2rem rgb(0, 0, 0);
    position: relative;
    border-bottom: #C92B1E 2rem solid;
}


  .header-text h1 {
    font-size: 2.2rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.2;
    animation: fadeInUp 1s ease-out;
    padding-bottom: 1rem;
  }

  .header-text p {
    font-size: 1.2rem;
    font-weight: 300;
    animation: fadeInUp 1.2s ease-out;
    color: #a5a5a5;
    max-width: 42ch;
  }

  .action-button {
    background-color: #468FC4;
    background-color: #C92B1E;
    background-color: #c92c1e;

    color: white;
    font-weight: 600;
    transition: 0.3s;
    animation: fadeInUp 1.5s ease-out;
    width: fit-content;
    padding: 0.4em 0.6em;
    border-radius: 0.4em;
    border: 1px solid rgba(255, 255, 255, 0.24)
  }

  .action-button:hover {
    background-color: #0e0c0c;
  }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .text-container{
      padding: 4rem 0px;
      text-align: center;
    }

    .text-container h2 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: #333;
    }

    .text-container p {
        font-size: 1rem;
        color: #555;
        line-height: 1.8;
        max-width: 66ch;
        margin: auto;
        font-weight: 600;
    }

    .services {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .service-item {
      background-color: white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      display: flex;
      /* justify-content: space-between; */
      align-items: center;
      width: 100%;
      height: 40rem;
      overflow: hidden;
      position: relative;
    }

    .img-container{
      background-image: url('assets/card.jpg');
      background-color: black;
      /* background-size: cover; */
      background-position: center;
      /* padding: 3rem; */
      background-size: contain;
      background-repeat: no-repeat;
      gap: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
      color: rgb(245, 245, 245);
      box-shadow: inset -21rem 0 10rem 3rem rgb(255, 255, 255);
    }
    .service-item img{
      position: absolute;
      width: 58%;
      box-shadow: inset 35rem 0 20rem 10rem rgb(0, 0, 0);
    }

    .services .service-item:nth-child(2) .img-container{
      box-shadow: inset 35rem 0 20rem 10rem rgb(255, 255, 255);
    }

    .services .service-item:nth-child(2){
      flex-direction: row-reverse;
    }

    .service-item section p,
    .service-item section h3{
      margin: 0;
      line-height: 1;
      text-align: left;
    }

  

        .service-item h3 {
            font-size: 1.8rem;
            color: #009CFF;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .service-item p {
            color: #666;
            font-size: 1.1rem;
        }

        /* Testimonials Section */
        .testimonials {
            background-color: #e3f2fd;
            padding: 60px 20px;
            text-align: center;
        }

        .testimonial {
            font-size: 1.2rem;
            color: #444;
            font-style: italic;
            margin-bottom: 25px;
            max-width: 800px;
            margin: auto;
        }

        .testimonial span {
            font-weight: bold;
            color: #009CFF;
            display: block;
            margin-top: 10px;
        }

        /* Contact Section */
        .contact-form {
            background-color: white;
            padding: 40px 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            max-width: 650px;
            margin: 40px auto;
            transition: transform 0.3s ease;
        }

        .contact-form input,
        .contact-form textarea {
            width: 100%;
            padding: 15px;
            margin: 10px 0;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
            border-color: #009CFF;
            outline: none;
        }

        .contact-form button {
            background-color: #009CFF;
            color: white;
            padding: 15px 35px;
            font-size: 1.1rem;
            border-radius: 30px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .contact-form button:hover {
            background-color: #005f8c;
            transform: translateY(-5px);
        }

        /* Footer Section */
        footer {
            background-color: #333;
            color: white;
            padding: 40px 20px;
            text-align: center;
        }

        footer p {
            margin: 10px 0;
        }

        footer a {
            color: #009CFF;
            text-decoration: none;
            margin: 0 10px;
            transition: color 0.3s ease;
        }

        footer a:hover {
            color: #007bb5;
        }

        /* Responsive Design */
        @media screen and (max-width: 768px) {
            .services {
                flex-direction: column;
                align-items: center;
            }

            .service-item {
                width: 80%;
                margin-bottom: 20px;
            }
        }

</style>
