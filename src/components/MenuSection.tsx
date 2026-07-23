import { mainDishes, rollsAndBurgers } from "../data/menu";

const rupees = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function MenuSection() {
  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-title">
      <div className="menu-shell">
        <header className="menu-heading">
          <h2 id="menu-title">Shawaya Shack Menu</h2>
        </header>

        <div className="menu-category">
          <h3>Main Dishes</h3>
          <ul className="portioned-items">
            {mainDishes.map((item) => (
              <li className="portioned-item" key={item.name}>
                <h4>{item.name}</h4>
                <dl aria-label={`${item.name} portions`}>
                  {item.portions.map((portion) => (
                    <div className="portion-row" key={portion.label}>
                      <dt>{portion.label}</dt>
                      <dd>{rupees.format(portion.price)}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>

        <div className="menu-category">
          <h3>Rolls &amp; Burgers</h3>
          <ul className="single-price-items">
            {rollsAndBurgers.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <strong>{rupees.format(item.price)}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
