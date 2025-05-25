const Showcase = () => {
  const links = ["Screens", "Signals", "Files", "Dashboard", "Signals"];

  return (
    <section className="showcase">
      <div className="showcase__links">
        {links.map((link, index) => (
          <p key={index}><strong>{link}</strong></p>
        ))}
      </div>
      <p className="showcase__description">
        Explore a variety of Projects tailored to<br />
        Your Developer Portfolio.
      </p>
    </section>
  );
};

export default Showcase;