// No module declaration needed; esbuild-loader handles imports.
import { createRecipeCycle, createButtonPanel } from "./page_util";

import dirtSlab from "../block_img/dirt_slab.webp";
import coarseDirtSlab from "../block_img/coarse_dirt_slab.webp";
import rootedDirtSlab from "../block_img/rooted_dirt_slab.webp";

import dirtBlock from "../crafting_block_img/dirt.webp";
import coarseDirtBlock from "../crafting_block_img/coarse_dirt.webp";
import rootedDirtBlock from "../crafting_block_img/rooted_dirt.webp";

import dirtSlabItem from "../crafting_block_img/dirt_slab.webp";
import coarseDirtSlabItem from "../crafting_block_img/coarse_dirt_slab.webp"
import rootedDirtSlabItem from "../crafting_block_img/rooted_dirt_slab.webp"

const craftingLists = {
    "dirt_slab": [dirtSlabItem, coarseDirtSlabItem, rootedDirtSlabItem],
    "dirt": [dirtBlock, coarseDirtBlock, rootedDirtBlock]
}
const optionList = {
    "dirt": [
        {
            "src": dirtSlab,
            "alt": "Dirt Slab"
        }
    ],
    "coarse": [
        {
            "src": coarseDirtSlab,
            "alt": "Coarse Dirt Slab"
        }
    ],
    "rooted": [
        {
            "src": rootedDirtSlab,
            "alt": "Rooted Dirt Slab"
        }
    ]
}

createRecipeCycle(craftingLists);

const imagePanel = document.getElementById('image-changer-panel');

if (imagePanel) {
    imagePanel.addEventListener('click', (event) => {
        createButtonPanel(event, optionList);
    });
}