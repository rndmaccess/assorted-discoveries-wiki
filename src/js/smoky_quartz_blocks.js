import smokyQuartzBlock from '../item_block_img/smoky_quartz_block_item.webp';
import smokyQuartzBricks from '../item_block_img/smoky_quartz_bricks_item.webp';
import smoothSmokyQuartz from '../item_block_img/smooth_smoky_quartz_item.webp';
import chiseledSmokyQuartz from '../item_block_img/chiseled_smoky_quartz_block_item.webp'
import smokyQuartzPillar from '../item_block_img/smoky_quartz_pillar_item.webp';

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
    "smoky_quartz_block": [ smokyQuartzBlock, smokyQuartzBricks, smoothSmokyQuartz ],
    "smoky_quartz_slab": [ smokyQuartzSlab, smokyQuartzBrickSlab, smoothSmokyQuartzSlab ],
    "smoky_quartz_stairs": [ smokyQuartzStairs, smokyQuartzBrickStairs, smoothSmokyQuartzStairs ],
    "smoky_quartz_wall": [ smokyQuartzWall, smokyQuartzBrickWall, smoothSmokyQuartzWall ],
    "smoky_quartz_block_result": [ smokyQuartzBricks, chiseledSmokyQuartz, smokyQuartzPillar ],
    "smoky_quartz_block_variant_result": [
        { "src": smokyQuartzBrickSlab, "count": "2" },
        { "src": smokyQuartzSlab, "count": "2" },
        smokyQuartzBrickStairs,
        smokyQuartzStairs,
        smokyQuartzBrickWall,
        smokyQuartzWall
    ],
    "smoky_quartz_bricks_result": [
        { "src": smokyQuartzBrickSlab, "count": "2" },
        smokyQuartzBrickStairs,
        smokyQuartzBrickWall
    ],
    "smooth_smoky_quartz_result": [
        { "src": smoothSmokyQuartzSlab, "count": "2" },
        smoothSmokyQuartzStairs,
        smoothSmokyQuartzWall
    ]
}

createRecipeCycle(craftingLists);