import cindersnapBerries from "../item_img/cindersnap_berries.png";
import frostbiteBerries from "../item_img/frostbite_berries.png";

import cindersnapBerryBush from "../block_img/cindersnap_berry_bush.webp";
import frostbiteBerryBush from "../block_img/frostbite_berry_bush.webp";

import cindersnapBerryCrate from "../block_img/cindersnap_berry_crate.webp";
import frostbiteBerryCrate from "../block_img/frostbite_berry_crate.webp";

// No module declaration needed; esbuild-loader handles imports.
import { createButtonPanel } from "./page_util";

const optionList = {
    "cindersnap": [
        {
            "src": cindersnapBerries,
            "alt": "Cindersnap Berries, orange berries with red stems."
        },
        {
            "src": cindersnapBerryBush,
            "alt": "Cindersnap Berry Bush, a red bush with orange berries."
        },
        {
            "src": cindersnapBerryCrate,
            "alt": "Cindersnap Berry Crate, a purple crate filled with orange berries and red leaves."
        }
    ],
    "frostbite": [
        {
            "src": frostbiteBerries,
            "alt": "Frostbite Berries. Purple berries with cyan stems."
        },
        {
            "src": frostbiteBerryBush,
            "alt": "Frostbite Berry Bush. A cyan bush with purple berries."
        },
        {
            "src": frostbiteBerryCrate,
            "alt": "Frostbite Berry Crate. A purple crate filled with purple berries and cyan leaves."
        }
    ]
}

const imagePanel = document.getElementById('image-changer-panel');

if (imagePanel) {
    imagePanel.addEventListener('click', (event) => {
        createButtonPanel(event, optionList);
    });
}