package com.example.yuwei.jnplants.main;

import com.example.yuwei.jnplants.interfaces.ApiFragment;

/**
 * Created by yuwei on 15/4/15.
 */
public class ApiMain {

    public static MainActivity getMainActivity(){
        return MainActivity.getInstance();
    }

    public static void replaceFragment(ApiFragment apiFragment){
        getMainActivity().replaceFragment(apiFragment.getFragment());
    }
}
