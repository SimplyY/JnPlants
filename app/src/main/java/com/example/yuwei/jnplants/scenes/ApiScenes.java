package com.example.yuwei.jnplants.scenes;

import android.support.v4.app.Fragment;

import com.example.yuwei.jnplants.interfaces.ApiFragment;

/**
 * Created by yuwei on 15/4/15.
 */
public class ApiScenes implements ApiFragment{
    @Override
    public Fragment getFragment(){
        return BeautifulScenesFragment.getInstace();
    }
}
