
import { useLocation, useNavigate } from "@solidjs/router";



function Redirecting() {
    // ! MUSÍ BÝT ZVLAŠTNÍ COMPONENT - ABY TENTO KÓD BYL UVNITŘ ROUTERU
    const location = useLocation();
    const navigate = useNavigate();

    let s = location.search;
    if (location.search.startsWith("?redirect=")) {
        s = s.substring(10);

        const urlWithoutRedirect = s + location.hash;
        window.history.replaceState(null, "", urlWithoutRedirect); // Clear the redirect parameter from the URL
        navigate(s); // Redirect to the specified URL

    }

    return (<>
    </>);
}

export default Redirecting;