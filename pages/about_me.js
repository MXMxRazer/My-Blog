import HTML from "../components/HTML/basicHTML";
import TitleChanger from "../components/titleChanger/titleChanger";
import WhoAmI from "../components/whoAmI";

export default function AboutMe() {

    const title = "About me";

    TitleChanger({
        title: title
    });

    return (
        <HTML>
            <WhoAmI />
        </ HTML>
    );
}