package com.example.yuwei.jnplants.main;

import com.example.yuwei.jnplants.interfaces.MyFragment;

/**
 * Created by yuwei on 15/4/15.
 */
public class MainOuter {

    public static MainActivity getMainActivity(){
        return MainActivity.getInstance();
    }

//  所有填充activity的container的fragment都应该实现interface：MyFragment
//  才能作为replaceContainer的参数来成为showingFragment
    public static void replaceContainer(MyFragment fragment){
        getMainActivity().replaceFragment(fragment.getFragment());
    }
}
