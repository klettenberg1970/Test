import './impressum.css';

export default function Impressum() {

    return (
        <div className="impressum-container">
            <h1>Impressum</h1>

            <section>
                <h2>Angaben gemäß § 5 TMG</h2>
                <p>
                    Max Mustermann<br />
                    Musterstraße 123<br />
                    12345 Musterstadt<br />
                    Deutschland
                </p>
            </section>

            <section>
                <h2>Kontakt</h2>
                <p>
                    Telefon: 01234 567890<br />
                    E-Mail: info@musterwebseite.de<br />
                    Website: www.musterwebseite.de
                </p>
            </section>

            <section>
                <h2>Vertreten durch</h2>
                <p>Max Mustermann (Geschäftsführer)</p>
            </section>

            <section>
                <h2>Registereintrag</h2>
                <p>
                    Registergericht: Amtsgericht Musterstadt<br />
                    Registernummer: HRB 123456
                </p>
            </section>

            <section>
                <h2>Umsatzsteuer-ID</h2>
                <p>
                    Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
                    DE 123 456 789
                </p>
            </section>

            <section>
                <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                    Max Mustermann<br />
                    Musterstraße 123<br />
                    12345 Musterstadt
                </p>
            </section>

            <section>
                <h2>Haftungsausschluss</h2>
                <h3>Haftung für Inhalte</h3>
                <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                    Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                    Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                    Tätigkeit hinweisen.
                </p>

                <h3>Haftung für Links</h3>
                <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                    Seiten verantwortlich.
                </p>

                <h3>Urheberrecht</h3>
                <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
                    des jeweiligen Autors bzw. Erstellers.
                </p>
            </section>

            <section>
                <h2>Datenschutzerklärung</h2>
                <p>
                    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
                    Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder 
                    E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. 
                    Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                </p>
            </section>

            <p className="stand">
                <strong>Stand: März 2026</strong>
            </p>
        </div>
    )
}