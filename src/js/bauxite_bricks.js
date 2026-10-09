import bauxiteBricks from '../item_block_img/bauxite_bricks_item.webp';
import mossyBauxiteBricks from '../item_block_img/mossy_bauxite_bricks_item.webp';
import crackedBauxiteBricks from '../item_block_img/cracked_bauxite_bricks_item.webp';

import bauxiteBrickSlab from '../item_block_img/bauxite_brick_slab_item.webp';
import mossyBauxiteBrickSlab from '../item_block_img/mossy_bauxite_brick_slab_item.webp';
import crackedBauxiteBrickSlab from '../item_block_img/cracked_bauxite_brick_slab_item.webp';

import bauxiteBrickStairs from '../item_block_img/bauxite_brick_stairs_item.webp';
import mossyBauxiteBrickStairs from '../item_block_img/mossy_bauxite_brick_stairs_item.webp';
import crackedBauxiteBrickStairs from '../item_block_img/cracked_bauxite_brick_stairs_item.webp';

import bauxiteBrickWall from '../item_block_img/bauxite_brick_wall_item.webp';
import mossyBauxiteBrickWall from '../item_block_img/mossy_bauxite_brick_wall_item.webp';
import crackedBauxiteBrickWall from '../item_block_img/cracked_bauxite_brick_wall_item.webp';

// No module declaration needed; esbuild-loader handles imports.
import { createRecipeCycle } from "./page_util";

const craftingLists = {
    "bauxite_bricks": [bauxiteBricks, mossyBauxiteBricks, crackedBauxiteBricks],
    "bauxite_brick_slab": [bauxiteBrickSlab, mossyBauxiteBrickSlab, crackedBauxiteBrickSlab],
    "bauxite_brick_stairs": [bauxiteBrickStairs, mossyBauxiteBrickStairs, crackedBauxiteBrickStairs],
    "bauxite_brick_wall": [bauxiteBrickWall, mossyBauxiteBrickWall, crackedBauxiteBrickWall]
}

createRecipeCycle(craftingLists);