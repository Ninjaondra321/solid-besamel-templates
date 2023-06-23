import { createSignal, onMount, createEffect } from "solid-js";
import { CarouselWrap } from "./Carousels";
import Offcanvas from "./Offcanvas";
import ModalWrap from "./Modal";


function LightBox({ children, index, opened, close }) {


    function scrollToIndex(indexx) {

        setTimeout(() => {
            let carouselRef = document.getElementById("carousel");
            carouselRef.scrollLeft = (carouselRef.clientWidth + 12) * index();
        }, 15);


    }

    createEffect(() => {
        console.log(opened())
        scrollToIndex(index()); // This input (index) is used to trigger the effect - it is not used inside the effect
    });


    return (<>
        {opened() &&

            <div className="lightbox ">


                <ModalWrap opened={opened} close={close} setOpened={close} direction="right" >



                    <CarouselWrap maximised={true}  >
                        {/* {children} */}
                        {
                            children.map((child, i) => {
                                return <div className="">
                                    {child}
                                </div>
                            }
                            )
                        }

                    </CarouselWrap>


                </ModalWrap>
                -            </div>




        }
    </>
    );
}

export default LightBox;