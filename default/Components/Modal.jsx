import { createSignal, mergeProps, Match, onMount } from "solid-js";


function ModalWrap(props) {
    // Merge props
    const merged = mergeProps({
        closeOnClickAway: true,
        opened: false,
    }, props);



    function handleClose() {
        if (merged.closeOnClickAway) {
            merged.setOpened(false);
        }
    }

    return (<>
        {merged.opened() &&
            <div class="offcanvas-parent" >
                <button className="" onclick={handleClose}  >
                </button>
                <div className="offcanvas modal">
                    {props.children}
                </div>
            </div>
        }
    </>
    );
}

export default ModalWrap;