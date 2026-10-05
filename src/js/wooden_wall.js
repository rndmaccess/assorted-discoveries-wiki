import oakWall from "../block_img/oak_wall.webp";
import spruceWall from "../block_img/spruce_wall.webp";
import birchWall from "../block_img/birch_wall.webp";
import jungleWall from "../block_img/jungle_wall.webp";
import acaciaWall from "../block_img/acacia_wall.webp";
import darkOakWall from "../block_img/dark_oak_wall.webp";
import mangroveWall from "../block_img/mangrove_wall.webp";
import cherryWall from "../block_img/cherry_wall.webp";
import paleOakWall from "../block_img/pale_oak_wall.webp";
import bambooWall from "../block_img/bamboo_wall.webp";
import poplarWall from "../block_img/poplar_wall.webp";
import crimsonWall from "../block_img/crimson_wall.webp";
import warpedWall from "../block_img/warped_wall.webp";

import oakLog from "../item_block_img/oak_log_item.webp";
import spruceLog from "../item_block_img/spruce_log_item.webp";
import birchLog from "../item_block_img/birch_log_item.webp";
import jungleLog from "../item_block_img/jungle_log_item.webp";
import acaciaLog from "../item_block_img/acacia_log_item.webp";
import darkOakLog from "../item_block_img/dark_oak_log_item.webp";
import mangroveLog from "../item_block_img/mangrove_log_item.webp";
import cherryLog from "../item_block_img/cherry_log_item.webp";
import paleOakLog from "../item_block_img/pale_oak_log_item.webp";
import poplarLog from "../item_block_img/poplar_log_item.webp";
import crimsonStem from "../item_block_img/crimson_stem_item.webp";
import warpedStem from "../item_block_img/warped_stem_item.webp";

import oakWood from "../item_block_img/oak_wood_item.webp";
import spruceWood from "../item_block_img/spruce_wood_item.webp";
import birchWood from "../item_block_img/birch_wood_item.webp";
import jungleWood from "../item_block_img/jungle_wood_item.webp";
import acaciaWood from "../item_block_img/acacia_wood_item.webp";
import darkOakWood from "../item_block_img/dark_oak_wood_item.webp";
import mangroveWood from "../item_block_img/mangrove_wood_item.webp";
import cherryWood from "../item_block_img/cherry_wood_item.webp";
import paleOakWood from "../item_block_img/pale_oak_wood_item.webp";
import poplarWood from "../item_block_img/poplar_wood_item.webp";
import crimsonHyphae from "../item_block_img/crimson_hyphae_item.webp";
import warpedHyphae from "../item_block_img/warped_hyphae_item.webp";

import strippedOakWall from "../block_img/stripped_oak_wall.webp";
import strippedSpruceWall from "../block_img/stripped_spruce_wall.webp";
import strippedBirchWall from "../block_img/stripped_birch_wall.webp";
import strippedJungleWall from "../block_img/stripped_jungle_wall.webp";
import strippedAcaciaWall from "../block_img/stripped_acacia_wall.webp";
import strippedDarkOakWall from "../block_img/stripped_dark_oak_wall.webp";
import strippedMangroveWall from "../block_img/stripped_mangrove_wall.webp";
import strippedCherryWall from "../block_img/stripped_cherry_wall.webp";
import strippedPaleOakWall from "../block_img/stripped_pale_oak_wall.webp";
import strippedBambooWall from "../block_img/stripped_bamboo_wall.webp";
import strippedPoplarWall from "../block_img/stripped_poplar_wall.webp";
import strippedCrimsonWall from "../block_img/stripped_crimson_wall.webp";
import strippedWarpedWall from "../block_img/stripped_warped_wall.webp";

import strippedOakLog from "../item_block_img/stripped_oak_log_item.webp";
import strippedSpruceLog from "../item_block_img/stripped_spruce_log_item.webp";
import strippedBirchLog from "../item_block_img/stripped_birch_log_item.webp";
import strippedJungleLog from "../item_block_img/stripped_jungle_log_item.webp";
import strippedAcaciaLog from "../item_block_img/stripped_acacia_log_item.webp";
import strippedDarkOakLog from "../item_block_img/stripped_dark_oak_log_item.webp";
import strippedMangroveLog from "../item_block_img/stripped_mangrove_log_item.webp";
import strippedCherryLog from "../item_block_img/stripped_cherry_log_item.webp";
import strippedPaleOakLog from "../item_block_img/stripped_pale_oak_log_item.webp";
import strippedPoplarLog from "../item_block_img/stripped_poplar_log_item.webp";
import strippedCrimsonStem from "../item_block_img/stripped_crimson_stem_item.webp";
import strippedWarpedStem from "../item_block_img/stripped_warped_stem_item.webp";

import strippedOakWood from "../item_block_img/stripped_oak_wood_item.webp";
import strippedSpruceWood from "../item_block_img/stripped_spruce_wood_item.webp";
import strippedBirchWood from "../item_block_img/stripped_birch_wood_item.webp";
import strippedJungleWood from "../item_block_img/stripped_jungle_wood_item.webp";
import strippedAcaciaWood from "../item_block_img/stripped_acacia_wood_item.webp";
import strippedDarkOakWood from "../item_block_img/stripped_dark_oak_wood_item.webp";
import strippedMangroveWood from "../item_block_img/stripped_mangrove_wood_item.webp";
import strippedCherryWood from "../item_block_img/stripped_cherry_wood_item.webp";
import strippedPaleOakWood from "../item_block_img/stripped_pale_oak_wood_item.webp";
import strippedPoplarWood from "../item_block_img/stripped_poplar_wood_item.webp";
import strippedCrimsonHyphae from "../item_block_img/stripped_crimson_hyphae_item.webp";
import strippedWarpedHyphae from "../item_block_img/stripped_warped_hyphae_item.webp";

// No module declaration needed; esbuild-loader handles imports.
import { createButtonPanel, createRecipeCycle} from "./page_util";

const optionList = {
    "oak": [
        {
            "src": oakWall,
            "alt": "Oak Wall"
        },
        {
            "src": strippedOakWall,
            "alt": ""
        }
    ],
    "spruce": [
        {
            "src": spruceWall,
            "alt": "Spruce Wall"
        },
        {
            "src": strippedSpruceWall,
            "alt": ""
        }
    ],
    "birch": [
        {
            "src": birchWall,
            "alt": "Birch Wall"
        },
        {
            "src": strippedBirchWall,
            "alt": ""
        }
    ],
    "jungle": [
        {
            "src": jungleWall,
            "alt": "Jungle Wall"
        },
        {
            "src": strippedJungleWall,
            "alt": ""
        }
    ],
    "acacia": [
        {
            "src": acaciaWall,
            "alt": "Acacia Wall"
        },
        {
            "src": strippedAcaciaWall,
            "alt": ""
        }
    ],
    "dark_oak": [
        {
            "src": darkOakWall,
            "alt": "Dark Oak Wall"
        },
        {
            "src": strippedDarkOakWall,
            "alt": ""
        }
    ],
    "mangrove": [
        {
            "src": mangroveWall,
            "alt": "Mangrove Wall"
        },
        {
            "src": strippedMangroveWall,
            "alt": ""
        }
    ],
    "cherry": [
        {
            "src": cherryWall,
            "alt": "Cherry Wall"
        },
        {
            "src": strippedCherryWall,
            "alt": ""
        }
    ],
    "pale_oak": [
        {
            "src": paleOakWall,
            "alt": "Pale Oak Wall"
        },
        {
            "src": strippedPaleOakWall,
            "alt": ""
        }
    ],
    "bamboo": [
        {
            "src": bambooWall,
            "alt": "Bamboo Wall"
        },
        {
            "src": strippedBambooWall,
            "alt": ""
        }
    ],
    "poplar": [
        {
            "src": poplarWall,
            "alt": "Poplar Wall"
        },
        {
            "src": strippedPoplarWall,
            "alt": ""
        }
    ],
    "crimson": [
        {
            "src": crimsonWall,
            "alt": "Crimson Wall"
        },
        {
            "src": strippedCrimsonWall,
            "alt": ""
        }
    ],
    "warped": [
        {
            "src": warpedWall,
            "alt": "Warped Wall"
        },
        {
            "src": strippedWarpedWall,
            "alt": ""
        }
    ]
}

const craftingLists = {
    "oak": [oakLog, oakWood],
    "spruce": [spruceLog, spruceWood],
    "birch": [birchLog, birchWood],
    "jungle": [jungleLog, jungleWood],
    "acacia": [acaciaLog, acaciaWood],
    "dark_oak": [darkOakLog, darkOakWood],
    "mangrove": [mangroveLog, mangroveWood],
    "cherry": [cherryLog, cherryWood],
    "pale_oak": [paleOakLog, paleOakWood],
    "poplar": [poplarLog, poplarWood],
    "crimson": [crimsonStem, crimsonHyphae],
    "warped": [warpedStem, warpedHyphae],

    "stripped_oak": [strippedOakLog, strippedOakWood],
    "stripped_spruce": [strippedSpruceLog, strippedSpruceWood],
    "stripped_birch": [strippedBirchLog, strippedBirchWood],
    "stripped_jungle": [strippedJungleLog, strippedJungleWood],
    "stripped_acacia": [strippedAcaciaLog, strippedAcaciaWood],
    "stripped_dark_oak": [strippedDarkOakLog, strippedDarkOakWood],
    "stripped_mangrove": [strippedMangroveLog, strippedMangroveWood],
    "stripped_cherry": [strippedCherryLog, strippedCherryWood],
    "stripped_pale_oak": [strippedPaleOakLog, strippedPaleOakWood],
    "stripped_poplar": [strippedPoplarLog, strippedPoplarWood],
    "stripped_crimson": [strippedCrimsonStem, strippedCrimsonHyphae],
    "stripped_warped": [strippedWarpedStem, strippedWarpedHyphae]
};

createRecipeCycle(craftingLists)

const imagePanel = document.getElementById('image-changer-panel');

if (imagePanel) {
    imagePanel.addEventListener('click', (event) => {
        createButtonPanel(event, optionList);
    });
}