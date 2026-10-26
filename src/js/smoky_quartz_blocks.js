import smokyQuartzBlock from '../item_block_img/smoky_quartz_block_item.webp';
import smokyQuartzBricks from '../item_block_img/smoky_quartz_bricks_item.webp';
import smoothSmokyQuartz from '../item_block_img/smooth_smoky_quartz_item.webp';

import smokyQuartzSlab from '../item_block_img/smoky_quartz_slab_item.webp';
import smokyQuartzBrickSlab from '../item_block_img/smoky_quartz_brick_slab_item.webp';
import smoothSmokyQuartzSlab from '../item_block_img/smooth_smoky_quartz_slab_item.webp';

import smokyQuartzStairs from '../item_block_img/smoky_quartz_stairs_item.webp';
import smokyQuartzBrickStairs from '../item_block_img/smoky_quartz_brick_stairs_item.webp';
import smoothSmokyQuartzStairs from '../item_block_img/smooth_smoky_quartz_stairs_item.webp';

import smokyQuartzWall from '../item_block_img/smoky_quartz_wall_item.webp';
import smokyQuartzBrickWall from '../item_block_img/smoky_quartz_brick_wall_item.webp';
import smoothSmokyQuartzWall from '../item_block_img/smooth_smoky_quartz_wall_item.webp';

// No module declaration needed; esbuild-loader handles imports.
import { createRecipeCycle } from "./page_util";

const craftingLists = {
    "smoky_quartz_block": [smokyQuartzBlock, smokyQuartzBricks, smoothSmokyQuartz],
    "smoky_quartz_slab": [smokyQuartzSlab, smokyQuartzBrickSlab, smoothSmokyQuartzSlab],
    "smoky_quartz_stairs": [smokyQuartzStairs, smokyQuartzBrickStairs, smoothSmokyQuartzStairs],
    "smoky_quartz_wall": [smokyQuartzWall, smokyQuartzBrickWall, smoothSmokyQuartzWall],
    "smoky_quartz_block_result": [
        {
            "alt": smokyQuartzBrickSlab,
            "count": "2"
        },
        {
            "alt": smokyQuartzSlab,
            "count": "2"
        },
        {
            "alt": smokyQuartzBrickStairs,
            "count": ""
        },
        {
            "alt": smokyQuartzStairs,
            "count": ""
        },
        {
            "alt": smokyQuartzBrickWall,
            "count": ""
        },
        {
            "alt": smokyQuartzWall,
            "count": ""
        }
    ],
    "smoky_quartz_bricks_result": [
        {
            "alt": smokyQuartzBrickSlab,
            "count": "2"
        },
        {
            "alt": smokyQuartzBrickStairs,
            "count": ""
        },
        {
            "alt": smokyQuartzBrickWall,
            "count": ""
        }
    ],
    "smooth_smoky_quartz_result": [
        {
            "alt": smoothSmokyQuartzSlab,
            "count": "2"
        },
        {
            "alt": smoothSmokyQuartzStairs,
            "count": ""
        },
        {
            "alt": smoothSmokyQuartzWall,
            "count": ""
        }
    ],
}

createRecipeCycle(craftingLists);