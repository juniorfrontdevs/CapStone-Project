import "./PlanetaryContactForm.css";

function PlanetaryContactForm() {
  return (
    <main className="page-content">
      <section className="section" aria-labelledby="contact-heading">
        <header className="section-header">
          <h1 id="contact-heading" className="heading">
            Have Questions About Planetary Science?
          </h1>

          <p className="subtext">
            Interested in learning more about space, astronomy, or how planetary
            data is collected and analyzed?
            <br />
            Reach out and we’ll get back to you.
          </p>
        </header>

        <form className="form">
          {/* form fields go here */}
        </form>
      </section>
    </main>
  );
}

export default PlanetaryContactForm;