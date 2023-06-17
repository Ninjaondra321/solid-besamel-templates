import { createSignal, createEffect } from "solid-js";
import { A, useNavigate } from "@solidjs/router";


function NavBar() {
    const navigate = useNavigate();

    const [showBanner, setShowBanner] = createSignal(true);
    const [drawerShown, setDrawerShown] = createSignal(false);

    // TODO: When adding banner:
    // 1. Set Drawer signal to true (line 9)
    // 2. In line cca 38, there should be a banner - edit it

    // TODO: When removing banner:
    // 1. Set Drawer signal to false (line 9)
    // 2. It's preferred to keep the banner code in line cca 38, but you can remove it

    function updateHeight() {
        document.documentElement.style.setProperty('--navbar-height', `${document.querySelector("nav").clientHeight - 6}px`);
    }

    createEffect(() => {
        updateHeight(showBanner());
    });


    // Used to close drawer (on mobile) when user clicks on a link
    function myRedirect(url) {
        // CLose the drawer
        setDrawerShown(false);

        // Redirect
        navigate(url);
    }

    return (<>
        <nav class='always-on-top '> {/* If always on top - put class "always-on-top" */}
            {showBanner() &&
                <div className="banner">
                    <div className="left">
                    </div>
                    <div className="center">
                        <p>
                            Banner txt
                        </p>
                    </div>
                    <div className="right row">
                        <button className="icon-btn icon small " onClick={() => setShowBanner(false)} >
                            close
                        </button>
                    </div>
                </div>
            }

            <div className="navbar ">
                <div className="left " >
                    <A href={"/"} active="adfsghjklkjh">
                        LOGO
                    </A>
                </div>

                <div className="center"></div>

                <div className="right">
                    <div className="m-hidden">
                        <A href={"/"} end={true}>Home</A>
                        <A href={"/docs"} > Link one</A>
                        <A href={"/examples"} >Link 2</A>
                        <A href={"/theme-creator"}>Link 3</A>
                    </div>
                    <div className="pc-hidden">
                        <button className="icon-btn large " id="menu-opener" style="color:var(--secondary-color)" onclick={() => setDrawerShown(!drawerShown())}>
                            menu
                        </button>
                    </div>
                </div>

            </div >
            <div className={"nav-drawer fullscreen center pos " + (drawerShown() ? " opened" : " closed")}>
                <div className="drawer-content center " >

                    <ul class="responsive">
                        <li>
                            <A href={"/"} onclick={() => myRedirect("/")} end={true}>Home</A>
                        </li>
                        <li>
                            <A href={"/docs"} onclick={() => myRedirect("/docs")} > Docs </A>
                        </li>
                        <li>
                            <A href={"/examples"} >Examples</A>
                        </li>
                        <li>
                            <A href={"/theme-creator"}>Theme creator</A>
                        </li>
                    </ul>

                </div>

                {/* <div className="to-s padding-large" style="height: fit-content !important;">
                    <A href="https://github.com/Ninjaondra321/Besamel" class="">Github</A>
                </div> */}
            </div>
        </nav >

    </>);
}

export default NavBar;