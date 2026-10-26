import bauxiteSlab from '../item_block_img/bauxite_slab_item.webp';
import bauxiteBrickSlab from '../item_block_img/bauxite_brick_slab_item.webp';

import bauxiteStairs from '../item_block_img/bauxite_stairs_item.webp';
import bauxiteBrickStairs from '../item_block_img/bauxite_brick_stairs_item.webp';

import bauxiteWall from '../item_block_img/bauxite_wall_item.webp';
import bauxiteBrickWall from '../item_block_img/bauxite_brick_wall_item.webp';

// No module declaration needed; esbuild-loader handles imports.
import { createRecipeCycle } from "./page_util";

const craftingLists = {
    "bauxite_result": [
        { "src": bauxiteSlab, "count": "2" },
        { "src": bauxiteBrickSlab, "count": "2" },
        { "src": bauxiteStairs, "count": "" },
        { "src": bauxiteBrickStairs, "count": "" },
        { "src": bauxiteWall, "count": "" },
        { "src": bauxiteBrickWall, "count": "" }
    ]
}

createRecipeCycle(craftingLists);