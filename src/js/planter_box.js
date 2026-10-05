// Image imports so that webpack knows about them
import oakPlanterBox from '../block_img/oak_planter_box.webp';
import sprucePlanterBox from '../block_img/spruce_planter_box.webp';
import birchPlanterBox from '../block_img/birch_planter_box.webp';
import junglePlanterBox from '../block_img/jungle_planter_box.webp';
import acaciaPlanterBox from '../block_img/acacia_planter_box.webp';
import darkOakPlanterBox from '../block_img/dark_oak_planter_box.webp';
import mangrovePlanterBox from '../block_img/mangrove_planter_box.webp';
import cherryPlanterBox from '../block_img/cherry_planter_box.webp';
import paleOakPlanterBox from '../block_img/pale_oak_planter_box.webp';
import bambooPlanterBox from '../block_img/bamboo_planter_box.webp';
import poplarPlanterBox from '../block_img/poplar_planter_box.webp';
import warpedPlanterBox from '../block_img/warped_planter_box.webp';
import crimsonPlanterBox from '../block_img/crimson_planter_box.webp';

import oakPlanterBoxItem from '../item_block_img/oak_planter_box_item.webp';
import sprucePlanterBoxItem from '../item_block_img/spruce_planter_box_item.webp';
import birchPlanterBoxItem from '../item_block_img/birch_planter_box_item.webp';
import junglePlanterBoxItem from '../item_block_img/jungle_planter_box_item.webp';
import acaciaPlanterBoxItem from '../item_block_img/acacia_planter_box_item.webp';
import darkOakPlanterBoxItem from '../item_block_img/dark_oak_planter_box_item.webp';
import mangrovePlanterBoxItem from '../item_block_img/mangrove_planter_box_item.webp';
import cherryPlanterBoxItem from '../item_block_img/cherry_planter_box_item.webp';
import paleOakPlanterBoxItem from '../item_block_img/pale_oak_planter_box_item.webp';
import bambooPlanterBoxItem from '../item_block_img/bamboo_planter_box_item.webp';
import poplarPlanterBoxItem from '../item_block_img/poplar_planter_box_item.webp';

import oakSlab from '../item_block_img/oak_slab_item.webp';
import spruceSlab from '../item_block_img/spruce_slab_item.webp';
import birchSlab from '../item_block_img/birch_slab_item.webp';
import jungleSlab from '../item_block_img/jungle_slab_item.webp';
import acaciaSlab from '../item_block_img/acacia_slab_item.webp';
import darkOakSlab from '../item_block_img/dark_oak_slab_item.webp';
import mangroveSlab from '../item_block_img/mangrove_slab_item.webp';
import cherrySlab from '../item_block_img/cherry_slab_item.webp';
import paleOakSlab from '../item_block_img/pale_oak_slab_item.webp';
import bambooSlab from '../item_block_img/bamboo_slab_item.webp';
import poplarSlab from '../item_block_img/poplar_slab_item.webp';

import soulSoil from '../item_block_img/soul_soil_item.webp';
import soulSand from '../item_block_img/soul_sand_item.webp';

// No module declaration needed; esbuild-loader handles imports.
import { createRecipeCycle, createButtonPanel } from "./page_util";

const optionList = {
    "oak": [
        {
            "src": oakPlanterBox,
            "alt": "Oak Planter Box"
        }
    ],
    "spruce": [
        {
            "src": sprucePlanterBox,
            "alt": "Spruce Planter Box"
        }
    ],
    "birch": [
        {
            "src": birchPlanterBox,
            "alt": "Birch Planter Box"
        }
    ],
    "jungle": [
        {
            "src": junglePlanterBox,
            "alt": "Jungle Planter Box"
        }
    ],
    "acacia": [
        {
            "src": acaciaPlanterBox,
            "alt": "Acacia Planter Box"
        }
    ],
    "dark_oak": [
        {
            "src": darkOakPlanterBox,
            "alt": "Dark Oak Planter Box"
        }
    ],
    "mangrove": [
        {
            "src": mangrovePlanterBox,
            "alt": "Mangrove Planter Box"
        }
    ],
    "cherry": [
        {
            "src": cherryPlanterBox,
            "alt": "Cherry Planter Box"
        }
    ],
    "pale_oak": [
        {
            "src": paleOakPlanterBox,
            "alt": "Pale Oak Planter Box"
        }
    ],
    "bamboo": [
        {
            "src": bambooPlanterBox,
            "alt": "Bamboo Planter Box"
        }
    ],
    "poplar": [
        {
            "src": poplarPlanterBox,
            "alt": "Poplar Planter Box"
        }
    ],
    "warped": [
        {
            "src": warpedPlanterBox,
            "alt": "Warned Planter Box"
        }
    ],
    "crimson": [
        {
            "src": crimsonPlanterBox,
            "alt": "Crimson Planter Box"
        }
    ]
}

const craftingLists = {
    "planter_box": [oakPlanterBoxItem, sprucePlanterBoxItem, birchPlanterBoxItem, junglePlanterBoxItem,
        acaciaPlanterBoxItem, darkOakPlanterBoxItem, mangrovePlanterBoxItem, cherryPlanterBoxItem,
        paleOakPlanterBoxItem, bambooPlanterBoxItem, poplarPlanterBoxItem],
    "slab": [oakSlab, spruceSlab, birchSlab, jungleSlab, acaciaSlab, darkOakSlab, mangroveSlab,
        cherrySlab, paleOakSlab, bambooSlab, poplarSlab],
    "soul_soil": [soulSoil, soulSand]
}

createRecipeCycle(craftingLists);

const imagePanel = document.getElementById('image-changer-panel');

if (imagePanel) {
    imagePanel.addEventListener('click', (event) => {
        createButtonPanel(event, optionList);
    });
}