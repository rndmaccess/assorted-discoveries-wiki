// No module declaration needed; esbuild-loader handles imports.
import { createRecipeCycle, createButtonPanel } from "./page_util";

import whiteCampfireStatic from "../block_img/white_campfire_static.webp";
import lightGrayCampfireStatic from "../block_img/light_gray_campfire_static.webp";
import grayCampfireStatic from "../block_img/gray_campfire_static.webp";
import blackCampfireStatic from "../block_img/black_campfire_static.webp";
import brownCampfireStatic from "../block_img/brown_campfire_static.webp";
import redCampfireStatic from "../block_img/red_campfire_static.webp";
import orangeCampfireStatic from "../block_img/orange_campfire_static.webp";
import yellowCampfireStatic from "../block_img/yellow_campfire_static.webp";
import limeCampfireStatic from "../block_img/lime_campfire_static.webp";
import greenCampfireStatic from "../block_img/green_campfire_static.webp";
import cyanCampfireStatic from "../block_img/cyan_campfire_static.webp";
import lightBlueCampfireStatic from "../block_img/light_blue_campfire_static.webp";
import blueCampfireStatic from "../block_img/blue_campfire_static.webp";
import purpleCampfireStatic from "../block_img/purple_campfire_static.webp";
import magentaCampfireStatic from "../block_img/magenta_campfire_static.webp";
import pinkCampfireStatic from "../block_img/pink_campfire_static.webp";
import unlitCampfire from "../block_img/unlit_campfire.webp";

import whiteCampfireAnim from "../block_img/white_campfire_anim.webp";
import lightGrayCampfireAnim from "../block_img/light_gray_campfire_anim.webp";
import grayCampfireAnim from "../block_img/gray_campfire_anim.webp";
import blackCampfireAnim from "../block_img/black_campfire_anim.webp";
import brownCampfireAnim from "../block_img/brown_campfire_anim.webp";
import redCampfireAnim from "../block_img/red_campfire_anim.webp";
import orangeCampfireAnim from "../block_img/orange_campfire_anim.webp";
import yellowCampfireAnim from "../block_img/yellow_campfire_anim.webp";
import limeCampfireAnim from "../block_img/lime_campfire_anim.webp";
import greenCampfireAnim from "../block_img/green_campfire_anim.webp";
import cyanCampfireAnim from "../block_img/cyan_campfire_anim.webp";
import lightBlueCampfireAnim from "../block_img/light_blue_campfire_anim.webp";
import blueCampfireAnim from "../block_img/blue_campfire_anim.webp";
import purpleCampfireAnim from "../block_img/purple_campfire_anim.webp";
import magentaCampfireAnim from "../block_img/magenta_campfire_anim.webp";
import pinkCampfireAnim from "../block_img/pink_campfire_anim.webp";

import whiteCampfireItem from "../item_img/white_campfire.png";
import lightGrayCampfireItem from "../item_img/light_gray_campfire.png";
import grayCampfireItem from "../item_img/gray_campfire.png";
import blackCampfireItem from "../item_img/black_campfire.png";
import brownCampfireItem from "../item_img/brown_campfire.png";
import redCampfireItem from "../item_img/red_campfire.png";
import orangeCampfireItem from "../item_img/orange_campfire.png";
import yellowCampfireItem from "../item_img/yellow_campfire.png";
import limeCampfireItem from "../item_img/lime_campfire.png";
import greenCampfireItem from "../item_img/green_campfire.png";
import cyanCampfireItem from "../item_img/cyan_campfire.png";
import lightBlueCampfireItem from "../item_img/light_blue_campfire.png";
import blueCampfireItem from "../item_img/blue_campfire.png";
import purpleCampfireItem from "../item_img/purple_campfire.png";
import magentaCampfireItem from "../item_img/magenta_campfire.png";
import pinkCampfireItem from "../item_img/pink_campfire.png";

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
    "dyed_campfire": [whiteCampfireItem, lightGrayCampfireItem, grayCampfireItem, blackCampfireItem, brownCampfireItem,
        redCampfireItem, orangeCampfireItem, yellowCampfireItem, limeCampfireItem, greenCampfireItem,
    cyanCampfireItem, lightBlueCampfireItem, blueCampfireItem, purpleCampfireItem,
    magentaCampfireItem, pinkCampfireItem],
    "dye": [whiteDye, lightGrayDye, grayDye, blackDye, brownDye, redDye, orangeDye, yellowDye, limeDye, greenDye,
        cyanDye, lightBlueDye, blueDye, purpleDye, magentaDye, pinkDye],
}
const optionList = {
    "white": [
        {
            "srcset": whiteCampfireStatic
        },
        {
            "src": whiteCampfireAnim,
            "alt": "White Campfire",
        }
    ],
    "light_gray": [
        {
            "srcset": lightGrayCampfireStatic
        },
        {
            "src": lightGrayCampfireAnim,
            "alt": "Light Gray Campfire",
        }
    ],
    "gray": [
        {
            "srcset": grayCampfireStatic
        },
        {
            "src": grayCampfireAnim,
            "alt": "Gray Campfire",
        }
    ],
    "black": [
        {
            "srcset": blackCampfireStatic
        },
        {
            "src": blackCampfireAnim,
            "alt": "Black Campfire",
        }
    ],
    "brown": [
        {
            "srcset": brownCampfireStatic
        },
        {
            "src": brownCampfireAnim,
            "alt": "Brown Campfire",
        }
    ],
    "red": [
        {
            "srcset": redCampfireStatic
        },
        {
            "src": redCampfireAnim,
            "alt": "Red Campfire",
        }
    ],
    "orange": [
        {
            "srcset": orangeCampfireStatic
        },
        {
            "src": orangeCampfireAnim,
            "alt": "Orange Campfire",
        }
    ],
    "yellow": [
        {
            "srcset": yellowCampfireStatic
        },
        {
            "src": yellowCampfireAnim,
            "alt": "Yellow Campfire",
        }
    ],
    "lime": [
        {
            "srcset": limeCampfireStatic
        },
        {
            "src": limeCampfireAnim,
            "alt": "Lime Campfire",
        }
    ],
    "green": [
        {
            "srcset": greenCampfireStatic
        },
        {
            "src": greenCampfireAnim,
            "alt": "Green Campfire",
        }
    ],
    "cyan": [
        {
            "srcset": cyanCampfireStatic
        },
        {
            "src": cyanCampfireAnim,
            "alt": "Cyan Campfire",
        }
    ],
    "light_blue": [
        {
            "srcset": lightBlueCampfireStatic
        },
        {
            "src": lightBlueCampfireAnim,
            "alt": "Light Blue Campfire",
        }
    ],
    "blue": [
        {
            "srcset": blueCampfireStatic
        },
        {
            "src": blueCampfireAnim,
            "alt": "Blue Campfire",
        }
    ],
    "purple": [
        {
            "srcset": purpleCampfireStatic
        },
        {
            "src": purpleCampfireAnim,
            "alt": "Purple Campfire",
        }
    ],
    "magenta": [
        {
            "srcset": magentaCampfireStatic
        },
        {
            "src": magentaCampfireAnim,
            "alt": "Magenta Campfire",
        }
    ],
    "pink": [
        {
            "srcset": pinkCampfireStatic
        },
        {
            "src": pinkCampfireAnim,
            "alt": "Pink Campfire",
        }
    ],
    "unlit": [
        {
            "srcset": unlitCampfire
        },
        {
            "src": unlitCampfire,
            "alt": "Unlit Dyed Campfire",
        }
    ],
}

// Helper function to pre-cache a single image
function precacheImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = (err) => reject(err);
    });
}

// We pre-cache the campfire renders after the DOM is loaded, because they are large and
// this guarantees that they are looked up instantly when the user selects them in the sidebar.
window.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        console.log('Reduced motion is enabled. Skipping animated asset pre-caching.');
        return;
    }

    const imagesToCache = [whiteCampfireAnim, lightGrayCampfireAnim, grayCampfireAnim, blackCampfireAnim,
        brownCampfireAnim, redCampfireAnim, orangeCampfireAnim, yellowCampfireAnim, limeCampfireAnim, greenCampfireAnim,
        cyanCampfireAnim, lightBlueCampfireAnim, blueCampfireAnim, purpleCampfireAnim,
        magentaCampfireAnim, pinkCampfireAnim];

    Promise.all(imagesToCache.map(precacheImage))
        .then(() => {
            console.log('All images pre-cached successfully!');
        })
        .catch(err => console.error('Failed to pre-cache images', err));
})

createRecipeCycle(craftingLists);

const imagePanel = document.getElementById('image-changer-panel');

if (imagePanel) {
    imagePanel.addEventListener('click', (event) => {
        createButtonPanel(event, optionList);
    });
}