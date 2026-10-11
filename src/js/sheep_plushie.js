// No module declaration needed; esbuild-loader handles imports.
import { createRecipeCycle, createButtonPanel } from "./page_util";

import whiteSheepPlushieItem from "../item_block_img/white_sheep_plushie_item.webp";
import lightGraySheepPlushieItem from "../item_block_img/light_gray_sheep_plushie_item.webp";
import graySheepPlushieItem from "../item_block_img/gray_sheep_plushie_item.webp";
import blackSheepPlushieItem from "../item_block_img/black_sheep_plushie_item.webp";
import brownSheepPlushieItem from "../item_block_img/brown_sheep_plushie_item.webp";
import redSheepPlushieItem from "../item_block_img/red_sheep_plushie_item.webp";
import orangeSheepPlushieItem from "../item_block_img/orange_sheep_plushie_item.webp";
import yellowSheepPlushieItem from "../item_block_img/yellow_sheep_plushie_item.webp";
import limeSheepPlushieItem from "../item_block_img/lime_sheep_plushie_item.webp";
import greenSheepPlushieItem from "../item_block_img/green_sheep_plushie_item.webp";
import cyanSheepPlushieItem from "../item_block_img/cyan_sheep_plushie_item.webp";
import lightBlueSheepPlushieItem from "../item_block_img/light_blue_sheep_plushie_item.webp";
import blueSheepPlushieItem from "../item_block_img/blue_sheep_plushie_item.webp";
import purpleSheepPlushieItem from "../item_block_img/purple_sheep_plushie_item.webp";
import magentaSheepPlushieItem from "../item_block_img/magenta_sheep_plushie_item.webp";
import pinkSheepPlushieItem from "../item_block_img/pink_sheep_plushie_item.webp";

import whiteSheepPlushie from "../block_img/sheep_plushie_white.webp";
import lightGraySheepPlushie from "../block_img/sheep_plushie_light_gray.webp";
import graySheepPlushie from "../block_img/sheep_plushie_gray.webp";
import blackSheepPlushie from "../block_img/sheep_plushie_black.webp";
import brownSheepPlushie from "../block_img/sheep_plushie_brown.webp";
import redSheepPlushie from "../block_img/sheep_plushie_red.webp";
import orangeSheepPlushie from "../block_img/sheep_plushie_orange.webp";
import yellowSheepPlushie from "../block_img/sheep_plushie_yellow.webp";
import limeSheepPlushie from "../block_img/sheep_plushie_lime.webp";
import greenSheepPlushie from "../block_img/sheep_plushie_green.webp";
import cyanSheepPlushie from "../block_img/sheep_plushie_cyan.webp";
import lightBlueSheepPlushie from "../block_img/sheep_plushie_light_blue.webp";
import blueSheepPlushie from "../block_img/sheep_plushie_blue.webp";
import purpleSheepPlushie from "../block_img/sheep_plushie_purple.webp";
import magentaSheepPlushie from "../block_img/sheep_plushie_magenta.webp";
import pinkSheepPlushie from "../block_img/sheep_plushie_pink.webp";

import whiteWool from "../item_block_img/white_wool_item.webp";
import lightGrayWool from "../item_block_img/light_gray_wool_item.webp";
import grayWool from "../item_block_img/gray_wool_item.webp";
import blackWool from "../item_block_img/black_wool_item.webp";
import brownWool from "../item_block_img/brown_wool_item.webp";
import redWool from "../item_block_img/red_wool_item.webp";
import orangeWool from "../item_block_img/orange_wool_item.webp";
import yellowWool from "../item_block_img/yellow_wool_item.webp";
import limeWool from "../item_block_img/lime_wool_item.webp";
import greenWool from "../item_block_img/green_wool_item.webp";
import cyanWool from "../item_block_img/cyan_wool_item.webp";
import lightBlueWool from "../item_block_img/light_blue_wool_item.webp";
import blueWool from "../item_block_img/blue_wool_item.webp";
import purpleWool from "../item_block_img/purple_wool_item.webp";
import magentaWool from "../item_block_img/magenta_wool_item.webp";
import pinkWool from "../item_block_img/pink_wool_item.webp";

const craftingLists = {
    "sheep_plushie": [whiteSheepPlushieItem, lightGraySheepPlushieItem, graySheepPlushieItem, blackSheepPlushieItem,
        brownSheepPlushieItem, redSheepPlushieItem, orangeSheepPlushieItem, yellowSheepPlushieItem,
        limeSheepPlushieItem, greenSheepPlushieItem, cyanSheepPlushieItem, lightBlueSheepPlushieItem,
        blueSheepPlushieItem, purpleSheepPlushieItem, magentaSheepPlushieItem, pinkSheepPlushieItem
    ],
    "wool": [whiteWool, lightGrayWool, grayWool, blackWool, brownWool, redWool, orangeWool, yellowWool, limeWool,
        greenWool, cyanWool, lightBlueWool, blueWool, purpleWool, magentaWool, pinkWool
    ],
}
const optionList = {
    "white": [
        {
            "src": whiteSheepPlushie,
            "alt": "White sheep plushie sitting",
        }
    ],
    "light_gray": [
        {
            "src": lightGraySheepPlushie,
            "alt": "Light gray sheep plushie sitting",
        }
    ],
    "gray": [
        {
            "src": graySheepPlushie,
            "alt": "Gray sheep plushie sitting",
        }
    ],
    "black": [
        {
            "src": blackSheepPlushie,
            "alt": "Black sheep plushie sitting",
        }
    ],
    "brown": [
        {
            "src": brownSheepPlushie,
            "alt": "Brown sheep plushie sitting",
        }
    ],
    "red": [
        {
            "src": redSheepPlushie,
            "alt": "Red sheep plushie sitting",
        }
    ],
    "orange": [
        {
            "src": orangeSheepPlushie,
            "alt": "Orange sheep plushie sitting",
        }
    ],
    "yellow": [
        {
            "src": yellowSheepPlushie,
            "alt": "Yellow sheep plushie sitting",
        }
    ],
    "lime": [
        {
            "src": limeSheepPlushie,
            "alt": "Lime sheep plushie sitting",
        }
    ],
    "green": [
        {
            "src": greenSheepPlushie,
            "alt": "Green sheep plushie sitting",
        }
    ],
    "cyan": [
        {
            "src": cyanSheepPlushie,
            "alt": "Cyan sheep plushie sitting",
        }
    ],
    "light_blue": [
        {
            "src": lightBlueSheepPlushie,
            "alt": "Light blue sheep plushie sitting",
        }
    ],
    "blue": [
        {
            "src": blueSheepPlushie,
            "alt": "Blue sheep plushie sitting",
        }
    ],
    "purple": [
        {
            "src": purpleSheepPlushie,
            "alt": "Purple sheep plushie sitting",
        }
    ],
    "magenta": [
        {
            "src": magentaSheepPlushie,
            "alt": "Magenta sheep plushie sitting",
        }
    ],
    "pink": [
        {
            "src": pinkSheepPlushie,
            "alt": "Pink sheep plushie sitting",
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