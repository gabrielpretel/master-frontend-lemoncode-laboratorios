import "./mystyles.scss";
import logoImg from "./images/house-targaryen.png";

const $appContainer: HTMLDivElement = document.querySelector(".appContainer");
const logoTargaryan: HTMLImageElement = document.createElement("img");
logoTargaryan.src = logoImg;
$appContainer?.appendChild(logoTargaryan);
