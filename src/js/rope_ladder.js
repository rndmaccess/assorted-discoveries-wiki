// No module declaration needed; esbuild-loader handles imports.
import { createRecipeCycle, createButtonPanel } from "./page_util";

import oakRopeLadder from "../item_img/oak_rope_ladder.png";
import spruceRopeLadder from "../item_img/spruce_rope_ladder.png";
import birchRopeLadder from "../item_img/birch_rope_ladder.png";
import jungleRopeLadder from "../item_img/jungle_rope_ladder.png";
import acaciaRopeLadder from "../item_img/acacia_rope_ladder.png";
import darkOakRopeLadder from "../item_img/dark_oak_rope_ladder.png";
import mangroveRopeLadder from "../item_img/mangrove_rope_ladder.png";
import cherryRopeLadder from "../item_img/cherry_rope_ladder.png";
import paleOakRopeLadder from "../item_img/pale_oak_rope_ladder.png";
import bambooRopeLadder from "../item_img/bamboo_rope_ladder.png";
import warpedRopeLadder from "../item_img/warped_rope_ladder.png";
import crimsonRopeLadder from "../item_img/crimson_rope_ladder.png";

import oakPlanks from "../item_block_img/oak_planks_item.webp";
import sprucePlanks from "../item_block_img/spruce_planks_item.webp";
import birchPlanks from "../item_block_img/birch_planks_item.webp";
import junglePlanks from "../item_block_img/jungle_planks_item.webp";
import acaciaPlanks from "../item_block_img/acacia_planks_item.webp";
import darkOakPlanks from "../item_block_img/dark_oak_planks_item.webp";
import mangrovePlanks from "../item_block_img/mangrove_planks_item.webp";
import cherryPlanks from "../item_block_img/cherry_planks_item.webp";
import paleOakPlanks from "../item_block_img/pale_oak_planks_item.webp";
import bambooPlanks from "../item_block_img/bamboo_planks_item.webp";
import warpedPlanks from "../item_block_img/warped_planks_item.webp";
import crimsonPlanks from "../item_block_img/crimson_planks_item.webp";

const craftingLists = {
    "rope_ladder": [oakRopeLadder, spruceRopeLadder, birchRopeLadder, jungleRopeLadder, acaciaRopeLadder,
        darkOakRopeLadder, mangroveRopeLadder, cherryRopeLadder, paleOakRopeLadder, bambooRopeLadder,
        warpedRopeLadder, crimsonRopeLadder],
    "planks": [oakPlanks, sprucePlanks, birchPlanks, junglePlanks, acaciaPlanks, darkOakPlanks, mangrovePlanks,
        cherryPlanks, paleOakPlanks, bambooPlanks, warpedPlanks, crimsonPlanks]
}
const optionList = {
    "oak": [
        {
            "src": oakRopeLadder,
            "alt": "Oak Rope Ladder"
        }
    ],
    "spruce": [
        {
            "src": spruceRopeLadder,
            "alt": "Spruce Rope Ladder"
        }
    ],
    "birch": [
        {
            "src": birchRopeLadder,
            "alt": "Birch Rope Ladder"
        }
    ],
    "jungle": [
        {
            "src": jungleRopeLadder,
            "alt": "Jungle Rope Ladder"
        }
    ],
    "acacia": [
        {
            "src": acaciaRopeLadder,
            "alt": "Acacia Rope Ladder"
        }
    ],
    "dark_oak": [
        {
            "src": darkOakRopeLadder,
            "alt": "Dark Oak Rope Ladder"
        }
    ],
    "mangrove": [
        {
            "src": mangroveRopeLadder,
            "alt": "Mangrove Rope Ladder"
        }
    ],
    "cherry": [
        {
            "src": cherryRopeLadder,
            "alt": "Cherry Rope Ladder"
        }
    ],
    "pale_oak": [
        {
            "src": paleOakRopeLadder,
            "alt": "Pale Oak Rope Ladder"
        }
    ],
    "bamboo": [
        {
            "src": bambooRopeLadder,
            "alt": "Bamboo Rope Ladder"
        }
    ],
    "warped": [
        {
            "src": warpedRopeLadder,
            "alt": "Warped Rope Ladder"
        }
    ],
    "crimson": [
        {
            "src": crimsonRopeLadder,
            "alt": "Crimson Rope Ladder"
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