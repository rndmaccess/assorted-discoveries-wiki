// No module declaration needed; esbuild-loader handles imports.
import { createRecipeCycle, createButtonPanel } from "./page_util";

import whiteTorchStatic from "../block_img/white_torch_static.webp";
import lightGrayTorchStatic from "../block_img/light_gray_torch_static.webp";
import grayTorchStatic from "../block_img/gray_torch_static.webp";
import blackTorchStatic from "../block_img/black_torch_static.webp";
import brownTorchStatic from "../block_img/brown_torch_static.webp";
import redTorchStatic from "../block_img/red_torch_static.webp";
import orangeTorchStatic from "../block_img/orange_torch_static.webp";
import yellowTorchStatic from "../block_img/yellow_torch_static.webp";
import limeTorchStatic from "../block_img/lime_torch_static.webp";
import greenTorchStatic from "../block_img/green_torch_static.webp";
import cyanTorchStatic from "../block_img/cyan_torch_static.webp";
import lightBlueTorchStatic from "../block_img/light_blue_torch_static.webp";
import blueTorchStatic from "../block_img/blue_torch_static.webp";
import purpleTorchStatic from "../block_img/purple_torch_static.webp";
import magentaTorchStatic from "../block_img/magenta_torch_static.webp";
import pinkTorchStatic from "../block_img/pink_torch_static.webp";

import whiteTorchAnim from "../block_img/white_torch_anim.webp";
import lightGrayTorchAnim from "../block_img/light_gray_torch_anim.webp";
import grayTorchAnim from "../block_img/gray_torch_anim.webp";
import blackTorchAnim from "../block_img/black_torch_anim.webp";
import brownTorchAnim from "../block_img/brown_torch_anim.webp";
import redTorchAnim from "../block_img/red_torch_anim.webp";
import orangeTorchAnim from "../block_img/orange_torch_anim.webp";
import yellowTorchAnim from "../block_img/yellow_torch_anim.webp";
import limeTorchAnim from "../block_img/lime_torch_anim.webp";
import greenTorchAnim from "../block_img/green_torch_anim.webp";
import cyanTorchAnim from "../block_img/cyan_torch_anim.webp";
import lightBlueTorchAnim from "../block_img/light_blue_torch_anim.webp";
import blueTorchAnim from "../block_img/blue_torch_anim.webp";
import purpleTorchAnim from "../block_img/purple_torch_anim.webp";
import magentaTorchAnim from "../block_img/magenta_torch_anim.webp";
import pinkTorchAnim from "../block_img/pink_torch_anim.webp";

import whiteTorchItem from "../item_img/white_torch.png";
import lightGrayTorchItem from "../item_img/light_gray_torch.png";
import grayTorchItem from "../item_img/gray_torch.png";
import blackTorchItem from "../item_img/black_torch.png";
import brownTorchItem from "../item_img/brown_torch.png";
import redTorchItem from "../item_img/red_torch.png";
import orangeTorchItem from "../item_img/orange_torch.png";
import yellowTorchItem from "../item_img/yellow_torch.png";
import limeTorchItem from "../item_img/lime_torch.png";
import greenTorchItem from "../item_img/green_torch.png";
import cyanTorchItem from "../item_img/cyan_torch.png";
import lightBlueTorchItem from "../item_img/light_blue_torch.png";
import blueTorchItem from "../item_img/blue_torch.png";
import purpleTorchItem from "../item_img/purple_torch.png";
import magentaTorchItem from "../item_img/magenta_torch.png";
import pinkTorchItem from "../item_img/pink_torch.png";

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
    "dyed_torch": [whiteTorchItem, lightGrayTorchItem, grayTorchItem, blackTorchItem, brownTorchItem,
        redTorchItem, orangeTorchItem, yellowTorchItem, limeTorchItem, greenTorchItem,
    cyanTorchItem, lightBlueTorchItem, blueTorchItem, purpleTorchItem,
    magentaTorchItem, pinkTorchItem],
    "dye": [whiteDye, lightGrayDye, grayDye, blackDye, brownDye, redDye, orangeDye, yellowDye, limeDye, greenDye,
        cyanDye, lightBlueDye, blueDye, purpleDye, magentaDye, pinkDye],
}
const optionList = {
    "white": [
        {
            "srcset": whiteTorchStatic
        },
        {
            "src": whiteTorchAnim,
            "alt": "White Torch",
        }
    ],
    "light_gray": [
        {
            "srcset": lightGrayTorchStatic
        },
        {
            "src": lightGrayTorchAnim,
            "alt": "Light Gray Torch",
        }
    ],
    "gray": [
        {
            "srcset": grayTorchStatic
        },
        {
            "src": grayTorchAnim,
            "alt": "Gray Torch",
        }
    ],
    "black": [
        {
            "srcset": blackTorchStatic
        },
        {
            "src": blackTorchAnim,
            "alt": "Black Torch",
        }
    ],
    "brown": [
        {
            "srcset": brownTorchStatic
        },
        {
            "src": brownTorchAnim,
            "alt": "Brown Torch",
        }
    ],
    "red": [
        {
            "srcset": redTorchStatic
        },
        {
            "src": redTorchAnim,
            "alt": "Red Torch",
        }
    ],
    "orange": [
        {
            "srcset": orangeTorchStatic
        },
        {
            "src": orangeTorchAnim,
            "alt": "Orange Torch",
        }
    ],
    "yellow": [
        {
            "srcset": yellowTorchStatic
        },
        {
            "src": yellowTorchAnim,
            "alt": "Yellow Torch",
        }
    ],
    "lime": [
        {
            "srcset": limeTorchStatic
        },
        {
            "src": limeTorchAnim,
            "alt": "Lime Torch",
        }
    ],
    "green": [
        {
            "srcset": greenTorchStatic
        },
        {
            "src": greenTorchAnim,
            "alt": "Green Torch",
        }
    ],
    "cyan": [
        {
            "srcset": cyanTorchStatic
        },
        {
            "src": cyanTorchAnim,
            "alt": "Cyan Torch",
        }
    ],
    "light_blue": [
        {
            "srcset": lightBlueTorchStatic
        },
        {
            "src": lightBlueTorchAnim,
            "alt": "Light Blue Torch",
        }
    ],
    "blue": [
        {
            "srcset": blueTorchStatic
        },
        {
            "src": blueTorchAnim,
            "alt": "Blue Torch",
        }
    ],
    "purple": [
        {
            "srcset": purpleTorchStatic
        },
        {
            "src": purpleTorchAnim,
            "alt": "Purple Torch",
        }
    ],
    "magenta": [
        {
            "srcset": magentaTorchStatic
        },
        {
            "src": magentaTorchAnim,
            "alt": "Magenta Torch",
        }
    ],
    "pink": [
        {
            "srcset": pinkTorchStatic
        },
        {
            "src": pinkTorchAnim,
            "alt": "Pink Torch",
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