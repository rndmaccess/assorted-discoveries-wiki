// No module declaration needed; esbuild-loader handles imports.
import { createRecipeCycle, createButtonPanel } from "./page_util";

import whiteLanternAnim from "../block_img/white_lantern_anim.webp";
import lightGrayLanternAnim from "../block_img/light_gray_lantern_anim.webp";
import grayLanternAnim from "../block_img/gray_lantern_anim.webp";
import blackLanternAnim from "../block_img/black_lantern_anim.webp";
import brownLanternAnim from "../block_img/brown_lantern_anim.webp";
import redLanternAnim from "../block_img/red_lantern_anim.webp";
import orangeLanternAnim from "../block_img/orange_lantern_anim.webp";
import yellowLanternAnim from "../block_img/yellow_lantern_anim.webp";
import limeLanternAnim from "../block_img/lime_lantern_anim.webp";
import greenLanternAnim from "../block_img/green_lantern_anim.webp";
import cyanLanternAnim from "../block_img/cyan_lantern_anim.webp";
import lightBlueLanternAnim from "../block_img/light_blue_lantern_anim.webp";
import blueLanternAnim from "../block_img/blue_lantern_anim.webp";
import purpleLanternAnim from "../block_img/purple_lantern_anim.webp";
import magentaLanternAnim from "../block_img/magenta_lantern_anim.webp";
import pinkLanternAnim from "../block_img/pink_lantern_anim.webp";

import whiteLanternItem from "../item_img/white_lantern.png";
import lightGrayLanternItem from "../item_img/light_gray_lantern.png";
import grayLanternItem from "../item_img/gray_lantern.png";
import blackLanternItem from "../item_img/black_lantern.png";
import brownLanternItem from "../item_img/brown_lantern.png";
import redLanternItem from "../item_img/red_lantern.png";
import orangeLanternItem from "../item_img/orange_lantern.png";
import yellowLanternItem from "../item_img/yellow_lantern.png";
import limeLanternItem from "../item_img/lime_lantern.png";
import greenLanternItem from "../item_img/green_lantern.png";
import cyanLanternItem from "../item_img/cyan_lantern.png";
import lightBlueLanternItem from "../item_img/light_blue_lantern.png";
import blueLanternItem from "../item_img/blue_lantern.png";
import purpleLanternItem from "../item_img/purple_lantern.png";
import magentaLanternItem from "../item_img/magenta_lantern.png";
import pinkLanternItem from "../item_img/pink_lantern.png";

import whiteDye from "../item_img/white_dye.png";
import lightGrayDye from "../item_img/light_gray_dye.png";
import grayDye from "../item_img/gray_dye.png";
import blackDye from "../item_img/black_dye.png";
import brownDye from "../item_img/brown_dye.png";
import redDye from "../item_img/red_dye.png";
import orangeDye from "../item_img/orange_dye.png";
import yellowDye from "../item_img/yellow_dye.png";
import limeDye from "../item_img/lime_dye.png";
import greenDye from "../item_img/green_dye.png";
import cyanDye from "../item_img/cyan_dye.png";
import lightBlueDye from "../item_img/light_blue_dye.png";
import blueDye from "../item_img/blue_dye.png";
import purpleDye from "../item_img/purple_dye.png";
import magentaDye from "../item_img/magenta_dye.png";
import pinkDye from "../item_img/pink_dye.png";

const craftingLists = {
    "dyed_lantern": [whiteLanternItem, lightGrayLanternItem, grayLanternItem, blackLanternItem, brownLanternItem,
        redLanternItem, orangeLanternItem, yellowLanternItem, limeLanternItem, greenLanternItem,
    cyanLanternItem, lightBlueLanternItem, blueLanternItem, purpleLanternItem,
    magentaLanternItem, pinkLanternItem],
    "dye": [whiteDye, lightGrayDye, grayDye, blackDye, brownDye, redDye, orangeDye, yellowDye, limeDye, greenDye,
        cyanDye, lightBlueDye, blueDye, purpleDye, magentaDye, pinkDye],
}
const optionList = {
    "white": [
        {
            "src": whiteLanternAnim,
            "alt": "White Lantern",
        }
    ],
    "light_gray": [
        {
            "src": lightGrayLanternAnim,
            "alt": "Light Gray Lantern",
        }
    ],
    "gray": [
        {
            "src": grayLanternAnim,
            "alt": "Gray Lantern",
        }
    ],
    "black": [
        {
            "src": blackLanternAnim,
            "alt": "Black Lantern",
        }
    ],
    "brown": [
        {
            "src": brownLanternAnim,
            "alt": "Brown Lantern",
        }
    ],
    "red": [
        {
            "src": redLanternAnim,
            "alt": "Red Lantern",
        }
    ],
    "orange": [
        {
            "src": orangeLanternAnim,
            "alt": "Orange Lantern",
        }
    ],
    "yellow": [
        {
            "src": yellowLanternAnim,
            "alt": "Yellow Lantern",
        }
    ],
    "lime": [
        {
            "src": limeLanternAnim,
            "alt": "Lime Lantern",
        }
    ],
    "green": [
        {
            "src": greenLanternAnim,
            "alt": "Green Lantern",
        }
    ],
    "cyan": [
        {
            "src": cyanLanternAnim,
            "alt": "Cyan Lantern",
        }
    ],
    "light_blue": [
        {
            "src": lightBlueLanternAnim,
            "alt": "Light Blue Lantern",
        }
    ],
    "blue": [
        {
            "src": blueLanternAnim,
            "alt": "Blue Lantern",
        }
    ],
    "purple": [
        {
            "src": purpleLanternAnim,
            "alt": "Purple Lantern",
        }
    ],
    "magenta": [
        {
            "src": magentaLanternAnim,
            "alt": "Magenta Lantern",
        }
    ],
    "pink": [
        {
            "src": pinkLanternAnim,
            "alt": "Pink Lantern",
        }
    ],
}

createRecipeCycle(craftingLists);

const imagePanel = document.getElementById('image-changer-panel');

if (imagePanel) {
    imagePanel.addEventListener('click', (event) => {
        createButtonPanel(event, optionList);
    });
}