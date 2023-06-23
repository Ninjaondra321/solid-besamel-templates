import { A, } from "@solidjs/router"
import { createSignal, createEffect } from "solid-js";

import Img_26 from "../Imgs/Img_18.png";


function NavBar() {

    const [showBanner, setShowBanner] = createSignal(true);

    const [drawerShown, setDrawerShown] = createSignal(false);

    function updateHeight(useLessProps = undefined) {
        // Navbar height + banner height
        if (showBanner()) {

            document.documentElement.style.setProperty('--navbar-height', `${document.querySelector(".navbar").clientHeight + document.querySelector(".banner").clientHeight}px`);
        } else {
            document.documentElement.style.setProperty('--navbar-height', `${document.querySelector(".navbar").clientHeight}px`);
        }

    }

    createEffect(() => {
        updateHeight(showBanner());
    });



    return (<>

        <nav class='always-on-top '>

            {showBanner() &&
                <div className="banner">

                    <div className="left">
                    </div>
                    <div className="center">
                        <header>Nové menu najdete <a href="#">zde</a>

                        </header>
                    </div>

                    <div className="right">

                        <button className="icon small " onClick={() => setShowBanner(false)}>
                            close
                        </button>
                    </div>

                </div>
            }

            <div className="navbar ">

                <div className="left">
                    <A href="/#" end={true}>
                        <span className="icon-btn ">
                            coffee
                        </span>
                        <header>Kavárna ZadeK</header>

                    </A>
                </div>
                <div className="center"></div>
                <div className="right">
                    <div className="m-hidden">
                        <A href="/" end={true}>
                            Home
                        </A>
                        <A href="/abc" >
                            abc
                        </A>
                        <A href="/components">componentss</A>
                        <A href="/form">Form</A>
                        <div className="nav-dropdown">

                            <A href="/sections" className="dropdown-heading">Sections</A>
                            <div className="dropdown-window">
                                <A href="/sections/footers">Footers</A>
                                <A href="/dropdown">Dropdown</A>
                                <A href="sections/backgrounds">Backgrounds</A>
                            </div>
                        </div>
                        <div className="nav-dropdown">
                            <p className="dropdown-heading">Dropdown</p>
                            <div className="dropdown-window">
                                <A href="/dropdown">Dropdown</A>
                                <A href="/dropdown">Dropdown</A>
                            </div>
                        </div>

                    </div>
                    <div className="pc-hidden">
                        <button className="icon-btn large " style="margin-right:-15px" id="menu-opener" onclick={() => setDrawerShown(!drawerShown())}>

                            menu

                        </button>
                    </div>
                </div>

            </div>


            <div className="toolbar">

                <div className="left ">
                    <div className="m-hidden row">

                        <button class="tool">Ahoj</button>

                        <A href="#">Ahoj</A>
                        <A href="#"><p class="g-icon">search</p></A>
                        <A href="#"><p class="g-icon">cookie</p></A>
                        {/* <A href="#"><p class="g-icon">mail </p></A> */}
                        <button className="icon tool">edit</button>
                    </div>

                </div>


                <div className="middle">
                    <input type="text" name="ads" id="afds" placeholder="FileName" class="editable" />
                </div>

                <div className="right">
                    <div className="m-hidden">
                        <A href="#">Ahoj</A>
                        <A href="#"><p class="g-icon">search</p></A>
                        <A href="#"><p class="g-icon">cookie</p></A>
                    </div>

                    <div className="pc-hidden">
                        <A href="#"><p class="g-icon">expand</p></A>
                    </div>

                </div>
            </div>


            {/* <div
                className={drawerShown() ? "drawer pc-hidden opened" : "drawer pc-hidden closed"}
            >
                <A href="/">Home</A>
                <A href="/abc">abc</A>
                <div className="accordion">
                    <div className="accordion-item closed" >

                        <button className="accordion-header"
                            onTouch={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                            onClick={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                        >
                            Accordion
                        </button>
                        <div className="accordion-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!
                            </p>
                        </div>
                    </div>
                </div>

            </div> */}

            <div
                // className={drawerShown() ? " nav-drawer drawer pc-hidden opened" : "nav-drawer drawer pc-hidden closed"}
                className={"nav-drawer fullscreen  bg" + (drawerShown() ? " opened" : " closed")}
            >
                <img src={Img_26} style={{ filter: "opacity(0.4)" }} class="make-section-bg  default darken-more" />

                <div className="drawer-content to-left">

                    <A href="/">Home</A>
                    <A href="/abc">abc</A>
                    <A href="/components">Components</A>
                    <div className="accordion-plain">
                        <div className="accordion-item closed center " >

                            <button className="accordion-header h4"
                                onTouch={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                                onClick={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                            >
                                Accordion

                            </button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </nav >
    </>);
}

export default NavBar;