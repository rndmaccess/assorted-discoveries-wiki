import cindersnapBerryJuice from "../item_img/cindersnap_berry_juice.png";
import frostbiteBerryJuice from "../item_img/frostbite_berry_juice.png";

// No module declaration needed; esbuild-loader handles imports.
import { createButtonPanel } from "./page_util";

const optionList = {
    "cindersnap": [
        {
            "src": cindersnapBerryJuice,
            "alt": "Cindersnap berry juice, an orange juice tied with a red thread."
        }
    ],
    "frostbite": [
        {
            "src": frostbiteBerryJuice,
            "alt": "Frostbite berry juice, a purple juice tied with a blue thread."
        }
    ]
}

const imagePanel = document.getElementById('image-changer-panel');

if (imagePanel) {
    imagePanel.addEventListener('click', (event) => {
        createButtonPanel(event, optionList);
    });
}