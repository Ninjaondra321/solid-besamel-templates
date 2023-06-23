
import { A } from "@solidjs/router";

function Footer() {
    return (<>

        {/* <footer  >
            <div className="content">
                <div className="left">
                    <h5>Info</h5>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Order</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div className="middle">
                    <h5>Kontakt</h5>

                    <table>
                        <thead style={{ display: "none" }}>
                            <tr>
                                <th>x</th>
                                <th>x</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td><span class="g-icon ">
                                    call
                                </span></td>
                                <td>+420 123 456 789</td>
                            </tr>

                            <tr>
                                <td><span class="g-icon">
                                    mail
                                </span></td>
                                <td> example@gmail.com </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="right">
                    <h5>Adresa</h5>


                </div>

            </div>
        </footer> */}


        <footer className="boruvka ">
            <div className="center responsive-rotate">
                <A href="/">Domů</A>
                <A href="/">Kariéra</A>
                <A href="/">Kontakt</A>
            </div>

            <div className="center row ">
                <A href="/"><span class="g-icon">facebook</span></A>
                <A href="/"><span class="g-icon">expand</span></A>
                {/* <A href="/"><span class="g-icon">instagram</span></A> */}
                <A href="/"><span class="g-icon">phone</span></A>
                <A href="/"><span class="g-icon">mail</span></A>
            </div>
            <div className="row space-between last-line ">
                <div className="row">
                    <A href="/sitemap">Sitemap</A>
                    <A href="/cookies">Cookies</A>
                </div>
                <div className="row ">
                    <p>
                        © 2023 Všechna práva vyhrazena.
                    </p>
                </div>
            </div>
        </footer>

        <footer class="malina row wrap">
            <div className="">
                <h4 style={{ width: "min-content" }}>Kavárna ZadeK</h4>
                <p class="pc-w-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </p>

                <p class="muted  "  >
                    © 2023 Všechna práva vyhrazena.
                </p>

            </div>

            <div className="column center">
                <h6>Stránky</h6>
                <ul className="plain center">
                    <li><A href="/">Domů</A></li>
                    <li><A href="/career">Kariera</A></li>
                    <li><A href="/contact">Kontakt</A></li>
                    <li><A href="/sitemap">Sitemap</A></li>
                </ul>
            </div>

            <div className="column center">
                <h6>Kontakt</h6>
                <ul className="plain">
                    <li><A href="/"> <span className="icon" >phone</span> +420 123 456 789</A></li>
                    <li><A href="/"> <span className="icon" >mail</span>example@email.com</A></li>
                    <li><A href="/"> <span className="icon" >map</span>Ulice 123, 123 45 Město</A></li>
                    <li><A href="/"> <span className="icon" >schedule</span> Po - Pá: 9:00 - 17:00</A></li>
                </ul>
            </div>
            <div className="map">

                <iframe width="100% !important" height="100% !important" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1076.3430660172342!2d14.410897826216788!3d50.086480372575636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e5e58eb59f%3A0x75209738d1d3b126!2sKarl%C5%AFv%20most!5e0!3m2!1scs!2scz!4v1686330586981!5m2!1scs!2scz" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="pos-w w-12">
                <ul className="plain row">
                    <li><A href="/">Sitemap</A></li>
                    <li><A href="/">Cookies</A></li>
                    <li><A href="/">Osoní údaje</A></li>
                </ul>
            </div>





        </footer>

        <div className="padding-large">
            <hr />
        </div>

        <footer class="cerny-bez dark center column ">

            <ul className="content responsive ">
                <li><A href="/"> <span className="icon" >phone</span> +420 123 456 789</A></li>
                <li><A href="/"> <span className="icon" >mail</span>example@email.com</A></li>
                <li><A href="/"> <span className="icon" >map</span>Ulice 123, 123 45 Město</A></li>
                <li><A href="/"> <span className="icon" >schedule</span> Po - Pá: 9:00 - 17:00</A></li>
            </ul>

            <ul className="row plain">
                <li><A href="/"><span class="g-icon">facebook</span></A></li>

                <li><A href="/"><span class="g-icon">instagram</span></A></li>
                <li><A href="/"><span class="g-icon">phone</span></A></li>

            </ul>

            <div className="pos-w w-12">
                <ul className="plain row">
                    <li><A href="/">Sitemap</A></li>
                    <li><A href="/">Cookies</A></li>
                    <li><A href="/">Osoní údaje</A></li>
                </ul>
            </div>


        </footer>



    </>);
}

export default Footer;