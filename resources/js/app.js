import "./bootstrap";
import "flowbite";
import { xMaska } from "maska/alpine";

document.addEventListener("alpine:init", () => {
    Alpine.plugin(xMaska);
});
