// No module declaration needed; esbuild-loader handles imports.
import { createRecipeCycle, createButtonPanel } from "./page_util";

import grassBlock from "../crafting_block_img/grass_block.webp";
import podzol from "../crafting_block_img/podzol.webp";
import mycelium from "../crafting_block_img/mycelium.webp";

import grassSlabItem from "../crafting_block_img/grass_slab.webp";
import podzolSlabItem from "../crafting_block_img/podzol_slab.webp";
import myceliumSlabItem from "../crafting_block_img/mycelium_slab.webp";

import singleGrassSlab from "../block_img/grass_slab_single.webp";
import singlePodzolSlab from "../block_img/podzol_slab_single.webp";
import singleMyceliumSlab from "../block_img/mycelium_slab_single.webp";

import doubleGrassSlab from "../block_img/grass_slab_double.webp";
import doublePodzolSlab from "../block_img/podzol_slab_double.webp";
import doubleMyceliumSlab from "../block_img/mycelium_slab_double.webp";

const optionList = {
    "grass": [
        {
            "src": singleGrassSlab,
            "alt": "Grass Slab"
        },
        {
            "src": doubleGrassSlab,
            "alt": ""
        }
    ],
    "podzol": [
        {
            "src": singlePodzolSlab,
            "alt": "Podzol Slab"
        },
        {
            "src": doublePodzolSlab,
            "alt": ""
        }
    ],
    "mycelium": [
        {
            "src": singleMyceliumSlab,
            "alt": "Mycelium Slab"
        },
        {
            "src": doubleMyceliumSlab,
            "alt": ""
        }
    ]
}

const craftingLists = {
    "grass_slab": [grassSlabItem, podzolSlabItem, myceliumSlabItem],
    "grass": [grassBlock, podzol, mycelium]
}

createRecipeCycle(craftingLists);

const imagePanel = document.getElementById('image-changer-panel');

if (imagePanel) {
    imagePanel.addEventListener('click', (event) => {
        createButtonPanel(event, optionList);
    });
}