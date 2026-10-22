import blueberryJuice from "../item_img/blueberry_juice.png";
import sweetBerryJuice from "../item_img/sweet_berry_juice.png";

// No module declaration needed; esbuild-loader handles imports.
import { createButtonPanel } from "./page_util";

const optionList = {
    "blueberry": [
        {
            "src": blueberryJuice,
            "alt": "Blueberry juice, a blue juice tied with a tan thread."
        }
    ],
    "sweet_berry": [
        {
            "src": sweetBerryJuice,
            "alt": "Sweet berry juice, a red juice tied with a tan thread."
        }
    ]
}

const imagePanel = document.getElementById('image-changer-panel');

if (imagePanel) {
    imagePanel.addEventListener('click', (event) => {
        createButtonPanel(event, optionList);
    });
}