package com.example.yuwei.jnplants.main;

import android.support.v4.app.Fragment;

import com.example.yuwei.jnplants.R;
import com.example.yuwei.jnplants.scenes.ApiScenes;
import com.example.yuwei.jnplants.search.ApiSearch;

import java.util.HashMap;

/**
 * Created by yuwei on 15/4/15.
 */
class Container {
    private static Fragment showingFragment;

    private static enum FragmentName {
        SCENES_FRAGMENT,
        SEARCH_FRAGMENT,
        PLANT_FRAGMENT
    }

    private static int amountOfFragment = 0;
    private static HashMap<Integer, FragmentName> fragmentNames = new HashMap<>();

//  由于 fragmentNames 的映射关系是 position -> name 所以 integer 的值从 0 开始
//  在每次为drawer添加item的时候注册一下item和fragment的对应关系
    static void setItemFragmentName(int strId) {
        switch (strId) {
            case R.string.drawer_item_beautiful_scene:
                fragmentNames.put(amountOfFragment, FragmentName.SCENES_FRAGMENT);
                break;
            case R.string.drawer_item_search:
                fragmentNames.put(amountOfFragment, FragmentName.SEARCH_FRAGMENT);
        }
        amountOfFragment++;
    }

//  通过点击drawer的item所得到的position来判断对应的fragment
    static Fragment getTargetFragment(int drawerItemPosition) {
        FragmentName fragmentName = fragmentNames.get(drawerItemPosition);
        switch (fragmentName) {
            case SCENES_FRAGMENT:
                showingFragment = new ApiScenes().getFragment();
            case SEARCH_FRAGMENT:
                showingFragment = new ApiSearch().getFragment();
        }

        return showingFragment;
    }

}
