import crimsonForageMix from "../item_img/crimson_forage_mix.png";
import warpedForageMix from "../item_img/warped_forage_mix.png";

// No module declaration needed; esbuild-loader handles imports.
import { createButtonPanel } from "./page_util";

const optionList = {
    "warped": [
        {
            "src": warpedForageMix,
            "alt": "Warped Forage Mix. A nether food with orange berries and red foliage."
        }
    ],
    "crimson": [
        {
            "src": crimsonForageMix,
            "alt": "Crimson Forage Mix. A nether food with purple berries and cyan foliage."
        }
    ]
}

const imagePanel = document.getElementById('image-changer-panel');

if (imagePanel) {
    imagePanel.addEventListener('click', (event) => {
        createButtonPanel(event, optionList);
    });
}