package com.example.yuwei.jnplants.main;

import com.example.yuwei.jnplants.interfaces.ApiFragment;
import com.example.yuwei.jnplants.scenes.ApiScenes;

/**
 * Created by yuwei on 15/4/15.
 */
public class ApiMain {

    public static MainActivity getMainActivity(){
        return MainActivity.getInstance();
    }

//  所有填充activity的container的fragment都应该实现interface：ApiFragment
//  才能作为replaceContainer的参数来成为showingFragment
    public static void replaceContainer(ApiFragment apiFragment){
        getMainActivity().replaceFragment(apiFragment.getFragment());
    }
}
